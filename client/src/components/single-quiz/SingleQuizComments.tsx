import {
	Avatar,
	Box,
	Button,
	Flex,
	HStack,
	SkeletonCircle,
	SkeletonText,
	Text,
	useColorModeValue,
	VStack,
	Container as ChakraContainter,
} from '@chakra-ui/react';
import React from 'react';
import { useCommentsQuery } from '../../generated/graphql';
import moment from 'moment';

const LoadingSkeleton: React.FC = () => {
	return (
		<VStack spacing='15px' w='full'>
			<Flex p='10px' borderWidth='1px' borderRadius='8px' w='full'>
				<SkeletonCircle size='10' />
				<Box ml='10px' py='2px' w='64%'>
					<SkeletonText mt='2' noOfLines={3} spacing='2' />
				</Box>
			</Flex>
			<Flex p='10px' borderWidth='1px' borderRadius='8px' w='full'>
				<SkeletonCircle size='10' />
				<Box ml='10px' py='2px' w='64%'>
					<SkeletonText mt='2' noOfLines={3} spacing='2' />
				</Box>
			</Flex>
			<Flex p='10px' borderWidth='1px' borderRadius='8px' w='full'>
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
}

const SingleQuizComments: React.FC<SingleQuizCommentsProps> = ({ quiz_id }) => {
	const buttonColorScheme = useColorModeValue('purple', 'gray');

	const { data, loading, error, fetchMore, variables } = useCommentsQuery({
		variables: {
			limit: 5,
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
			{!loading && !data && <LoadingSkeleton />}

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
									borderWidth='1px'
									borderRadius='8px'
									w='full'
								>
									<Avatar src={avatar || ''} name={name} />
									<Box ml='10px'>
										<HStack>
											<Text fontWeight='bold'>{username}</Text>
											<Text fontSize='14px'>{email}</Text>
											<Text>&#183;</Text>
											<Text fontSize='14px'>
												{moment(parseInt(created_at)).fromNow(true)} ago
											</Text>
										</HStack>
										<Text mt='5px'>{text}</Text>
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
export default SingleQuizComments;
