import { ChevronDownIcon, DeleteIcon, EditIcon } from '@chakra-ui/icons';
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
	useColorModeValue,
	useDisclosure,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import React, { RefObject, useRef } from 'react';
import {
	QuizzesResponseFragment,
	useDeleteQuizMutation,
	useMeQuery,
} from '../generated/graphql';

type EditDeleteQuizButtonsProps = {
	quiz: QuizzesResponseFragment;
} & SquareProps;

export const EditDeleteQuizButtons: React.FC<EditDeleteQuizButtonsProps> = ({
	quiz,
	...props
}) => {
	const { data } = useMeQuery();

	const bgColor = useColorModeValue('rgb(255, 255, 255)', 'rgb(32, 32, 32)');
	const colorBody = useColorModeValue('gray.600', '#BDBDBD');

	const [deleteQuiz] = useDeleteQuizMutation();

	const { isOpen, onOpen, onClose } = useDisclosure();
	const cancelRef: RefObject<any> = useRef();

	if (data?.me?.id !== quiz.author.id) {
		return null;
	}

	return (
		<>
			<Square {...props}>
				<Menu>
					<MenuButton
						as={IconButton}
						aria-label='delete or update quiz'
						variant='ghost'
						size='sm'
						isRound
						colorScheme='gray'
						icon={<ChevronDownIcon />}
					/>
					<MenuList bg={bgColor} color={colorBody}>
						<MenuItem onClick={onOpen}>
							<DeleteIcon mr='12px' />
							<span>Delete</span>
						</MenuItem>
						<NextLink href={`/quiz/edit/${quiz.id}`}>
							<MenuItem>
								<EditIcon mr='12px' />
								<span>Edit</span>
							</MenuItem>
						</NextLink>
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
						Are you sure you want to delete this quiz? You can't undo this
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
								deleteQuiz({
									variables: {
										quiz_id: parseInt(quiz.id),
									},
									update: (cache) => {
										cache.evict({ id: 'Quiz:' + quiz.id });
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
