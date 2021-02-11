import {
	AlertDialog as AD,
	AlertDialogBody,
	AlertDialogCloseButton,
	AlertDialogContent,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogOverlay,
	Button,
} from '@chakra-ui/react';
import React, { useRef } from 'react';

interface AlertDialogProps {
	isOpen: boolean;
	onClose: () => void;
}

export const AlertDialog: React.FC<AlertDialogProps> = ({
	isOpen,
	onClose,
}) => {
	const cancelRef = useRef<any>();

	return (
		<>
			<AD
				motionPreset='slideInBottom'
				leastDestructiveRef={cancelRef}
				onClose={onClose}
				isOpen={isOpen}
				isCentered
			>
				<AlertDialogOverlay />

				<AlertDialogContent>
					<AlertDialogHeader>Unsaved work</AlertDialogHeader>
					<AlertDialogCloseButton />
					<AlertDialogBody>
						Are you sure you want to discard all the changes?
					</AlertDialogBody>
					<AlertDialogFooter>
						<Button ref={cancelRef} onClick={onClose}>
							No
						</Button>
						<Button colorScheme='red' ml={3}>
							Yes
						</Button>
					</AlertDialogFooter>
				</AlertDialogContent>
			</AD>
		</>
	);
};
