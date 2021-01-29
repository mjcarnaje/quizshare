import { gql } from '@apollo/client';
import {
	Avatar,
	Box,
	Button,
	Container as ChakraContainter,
	Flex,
	FormControl,
	HStack,
	Input,
	SkeletonCircle,
	SkeletonText,
	Text,
	useColorModeValue,
	VStack,
} from '@chakra-ui/react';
import moment from 'moment';
import React, { useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import {
	useCommentsQuery,
	useCreateCommentMutation,
	useMeQuery,
} from '../../generated/graphql';

const LoadingSkeleton: React.FC = () => {
	return (
		<VStack spacing='15px' w='full'>
			<Flex p='10px' w='full'>
				<SkeletonCircle size='10' />
				<Box ml='10px' py='2px' w='64%'>
					<SkeletonText mt='2' noOfLines={3} spacing='2' />
				</Box>
			</Flex>
			<Flex p='10px' w='full'>
				<SkeletonCircle size='10' />
				<Box ml='10px' py='2px' w='64%'>
					<SkeletonText mt='2' noOfLines={3} spacing='2' />
				</Box>
			</Flex>
			<Flex p='10px' w='full'>
				<SkeletonCircle size='10' />
				<Box ml='10px' py='2px' w='64%'>
					<SkeletonText mt='2' noOfLines={3} spacing='2' />
				</Box>
			</Flex>
		</VStack>
	);
};
interface SingleQuizCommentsProps {
	quiz_id: number;
	limit?: number;
	commentsCount: number;
}

const Comments: React.FC<SingleQuizCommentsProps> = ({
	quiz_id,
	limit = 10,
	commentsCount,
}) => {
	const buttonColorScheme = useColorModeValue('purple', 'gray');
	const [text, setText] = useState('');

	const { data: medata } = useMeQuery();
	const [
		createComment,
		{ loading: commentloading },
	] = useCreateCommentMutation();
	const { data, loading, error, fetchMore, variables } = useCommentsQuery({
		variables: {
			limit: limit,
			quiz_id: quiz_id,
			cursor: null,
		},
		notifyOnNetworkStatusChange: true,
	});

	if (!loading && !data) {
		return (
			<Box>
				<Text>There is an error </Text>
				<Text>{error?.message}</Text>
			</Box>
		);
	}

	return (
		<ChakraContainter maxW={['100%', '100%', '820px']} mb='36px' p='0'>
			<Flex p='10px' mb='30px'>
				<Avatar
					name={medata?.me?.profile.name}
					src={medata?.me?.avatar ?? ''}
				/>
				<Box w='full' ml='15px'>
					<FormControl>
						<Input
							type='text'
							placeholder='Add to discussion'
							resize='none'
							variant='filled'
							value={text}
							onChange={(e) => setText(e.target.value)}
							_focus={{ outline: 'none' }}
							fontFamily='inter'
							py='7px'
							minH='70px'
							overflow='hidden'
							as={TextareaAutosize}
						/>
					</FormControl>
					<Button
						mt='4px'
						variant='ghost'
						size='sm'
						borderRadius='lg'
						colorScheme='purple'
						isDisabled={text.trim() === ''}
						onClick={async () => {
							await createComment({
								variables: {
									quiz_id: quiz_id,
									text: text,
								},
								update: (cache, { data }) => {
									cache.writeFragment({
										id: 'Quiz:' + quiz_id,
										fragment: gql`
											fragment _ on Quiz {
												id
												commentsCount
											}
										`,
										data: { commentsCount: (commentsCount += 1) },
									});

									const cacheId = cache.identify(data!.createComment!);

									cache.modify({
										fields: {
											comments: (existingFieldData, { toReference }) => {
												return {
													...existingFieldData,
													comments: [
														toReference(cacheId as string),
														...existingFieldData.comments,
													],
												};
											},
										},
									});
									setText('');
								},
							});
						}}
						isLoading={commentloading}
					>
						Post Comment
					</Button>
				</Box>
			</Flex>

			{loading && !data && <LoadingSkeleton />}

			{!loading && !data?.comments?.comments && (
				<Box my='36px' textAlign='center' w='full'>
					<Text>There is no discussion yet.</Text>
				</Box>
			)}

			<VStack spacing='15px' w='full'>
				<>
					{data &&
						data.comments!.comments.map((comment) => {
							const {
								id,
								text,
								author: {
									username,
									email,
									avatar,
									profile: { name },
								},
								created_at,
							} = comment;

							return (
								<Flex
									key={id}
									p='10px'
									// borderWidth='1px'
									// borderRadius='8px'
									w='full'
								>
									<Avatar src={avatar || ''} name={name} />
									<Box ml='15px'>
										<HStack>
											<Text fontWeight='bold'>{username}</Text>
											<Text fontSize='14px'>{email}</Text>
										</HStack>
										<Text fontSize='14px' mb='12px'>
											{moment(parseInt(created_at)).fromNow(true)} ago
										</Text>
										<Text wordBreak='break-word' whiteSpace='pre-line'>
											{text}
										</Text>
									</Box>
								</Flex>
							);
						})}

					{loading && <LoadingSkeleton />}

					{data && data.comments?.hasMore && (
						<Button
							size='sm'
							colorScheme={buttonColorScheme}
							variant='ghost'
							fontSize={16}
							my='20px'
							onClick={() => {
								fetchMore({
									variables: {
										limit: variables?.limit,
										quiz_id: variables?.quiz_id,
										cursor:
											data?.comments?.comments[
												data.comments.comments.length - 1
											].created_at,
									},
								});
							}}
							isLoading={loading}
						>
							Load more
						</Button>
					)}
				</>
			</VStack>
		</ChakraContainter>
	);
};
export default Comments;
