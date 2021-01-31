import { gql } from '@apollo/client';
import {
	Avatar,
	Button,
	Center,
	FormControl,
	IconButton,
	Input,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Text,
	Flex,
	useDisclosure,
} from '@chakra-ui/react';
import React, { RefObject, useRef, useState } from 'react';
import { FaComment } from 'react-icons/fa';
import TextareaAutosize from 'react-textarea-autosize';
import { useCreateCommentMutation, useMeQuery } from '../generated/graphql';

interface CommentButtonProps {
	quiz: {
		id: string;
		comments_count: number;
		author: {
			email: string;
		};
	} & any;
	withoutCount?: boolean;
}

export const CommentButton: React.FC<CommentButtonProps> = ({
	quiz: {
		id,
		comments_count,
		author: { email },
	},
	withoutCount,
}) => {
	const [text, setText] = useState('');

	const { data, loading: loadingMe, error } = useMeQuery();

	const { isOpen, onOpen, onClose } = useDisclosure();
	const [createComment, { loading }] = useCreateCommentMutation();

	const initialRef: RefObject<any> = useRef();

	if (loadingMe) {
		<Text>...loading</Text>;
	}

	if (!data && !loadingMe) {
		return <Text>Error {error?.message}</Text>;
	}
	return (
		<>
			<Modal
				isCentered
				onClose={onClose}
				isOpen={isOpen}
				motionPreset='slideInBottom'
				initialFocusRef={initialRef}
			>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader fontSize='17px' fontWeight='500'>
						{`Replying to @${email.split('@')[0]}`}
					</ModalHeader>
					<ModalCloseButton />
					<ModalBody display='flex'>
						<Avatar
							name={data?.me?.profile.name}
							src={data?.me?.avatar || ''}
						/>
						<FormControl>
							<Input
								ref={initialRef}
								type='text'
								placeholder='Comment your reply'
								bg='none'
								variant='filled'
								resize='none'
								value={text}
								onChange={(e) => setText(e.target.value)}
								_focus={{ outline: 'none', bg: 'none' }}
								_hover={{ bg: 'none' }}
								fontFamily='inter'
								overflow='hidden'
								as={TextareaAutosize}
							/>
						</FormControl>
					</ModalBody>
					<ModalFooter>
						<Button
							variant='ghost'
							onClick={async () => {
								createComment({
									variables: {
										quiz_id: parseInt(id),
										text: text,
									},
									update: (cache, { data }) => {
										cache.writeFragment({
											id: 'Quiz:' + id,
											fragment: gql`
												fragment _ on Quiz {
													id
													comments_count
												}
											`,
											data: { comments_count: comments_count + 1 },
										});

										setText('');
										onClose();
									},
								});
							}}
							isLoading={loading}
						>
							Reply
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
			<Flex justify='flex-start' align='center'>
				<IconButton
					variant='outline'
					colorScheme='gray'
					aria-label='Like post'
					isRound
					color='gray.400'
					_focus={{ outline: 'none' }}
					border='none'
					_hover={{ color: 'gray.500' }}
					fontSize='20px'
					icon={<FaComment />}
					onClick={onOpen}
				/>
				{!withoutCount && (
					<Text fontSize='14px' fontWeight='medium' color='gray.400'>
						{comments_count}
					</Text>
				)}
			</Flex>
		</>
	);
};
