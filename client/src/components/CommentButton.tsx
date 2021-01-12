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
	useDisclosure,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { FaComment } from 'react-icons/fa';
import TextareaAutosize from 'react-textarea-autosize';
import { useUserContext } from '../context/context';
import { gql } from '@apollo/client';
import {
	QuizzesResponseFragment,
	useCreateCommentMutation,
} from '../generated/graphql';

interface CommentButtonProps {
	quiz: QuizzesResponseFragment;
}

export const CommentButton: React.FC<CommentButtonProps> = ({
	quiz: {
		id,
		commentsCount,
		author: { email },
	},
}) => {
	const [text, setText] = useState('');
	const { user } = useUserContext();

	const { isOpen, onOpen, onClose } = useDisclosure();
	const [createComment, { loading }] = useCreateCommentMutation();

	return (
		<>
			<Modal
				isCentered
				onClose={onClose}
				isOpen={isOpen}
				motionPreset='slideInBottom'
			>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>{`Replying to @${email.split('@')[0]}`}</ModalHeader>
					<ModalCloseButton />
					<ModalBody display='flex'>
						<Avatar name={user?.profile.name} src={user?.avatar || ''} />
						<FormControl>
							<Input
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
									update: (cache) => {
										cache.writeFragment({
											id: 'Quiz:' + id,
											fragment: gql`
												fragment _ on Quiz {
													id
													commentsCount
                          comments {
                            
                          }
												}
											`,
											data: { commentsCount: commentsCount + 1 },
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
			<Center>
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
				<Text fontSize='14px' fontWeight='medium' color='gray.400'>
					{commentsCount}
				</Text>
			</Center>
		</>
	);
};
