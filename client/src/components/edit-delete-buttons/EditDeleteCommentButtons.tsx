import { DeleteIcon } from '@chakra-ui/icons';
import {
	AlertDialog,
	AlertDialogBody,
	AlertDialogCloseButton,
	AlertDialogContent,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogOverlay,
	Button,
	IconButton,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	Square,
	SquareProps,
	useDisclosure,
} from '@chakra-ui/react';
import React, { RefObject, useRef } from 'react';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import {
	CommentResponseFragment,
	useDeleteCommentMutation,
	useMeQuery,
} from '../../generated/graphql';

type EditDeleteCommentButtonsProps = {
	comment: CommentResponseFragment;
	quiz_id: number;
} & SquareProps;

export const EditDeleteCommentButtons: React.FC<EditDeleteCommentButtonsProps> = ({
	comment,
	quiz_id,
	...props
}) => {
	const { data } = useMeQuery();

	const [deleteComment] = useDeleteCommentMutation();

	const { isOpen, onOpen, onClose } = useDisclosure();
	const cancelRef: RefObject<any> = useRef();

	if (data?.me?.id !== comment.author.id) {
		return null;
	}

	return (
		<>
			<Square {...props}>
				<Menu>
					<MenuButton
						as={IconButton}
						aria-label='Comment Options'
						icon={<BiDotsVerticalRounded />}
						variant='ghost'
						isRound
					/>
					<MenuList>
						<MenuItem onClick={onOpen} icon={<DeleteIcon />}>
							Delete
						</MenuItem>
					</MenuList>
				</Menu>
			</Square>
			<AlertDialog
				motionPreset='slideInBottom'
				leastDestructiveRef={cancelRef}
				onClose={onClose}
				isOpen={isOpen}
				isCentered
			>
				<AlertDialogOverlay />

				<AlertDialogContent>
					<AlertDialogHeader>Delete quiz?</AlertDialogHeader>
					<AlertDialogCloseButton />
					<AlertDialogBody>
						Are you sure you want to delete this comment? You can't undo this
						action afterwards.
					</AlertDialogBody>
					<AlertDialogFooter>
						<Button ref={cancelRef} onClick={onClose}>
							No
						</Button>
						<Button
							colorScheme='red'
							ml={3}
							onClick={() => {
								deleteComment({
									variables: {
										comment_id: parseInt(comment.id),
										quiz_id,
									},
									update: (cache) => {
										cache.evict({ id: 'Comment:' + comment.id });
									},
								});
							}}
						>
							Yes
						</Button>
					</AlertDialogFooter>
				</AlertDialogContent>
			</AlertDialog>
		</>
	);
};
