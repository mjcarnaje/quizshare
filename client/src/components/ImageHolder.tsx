import {
	AspectRatio,
	Box,
	Button,
	Center,
	Spinner,
	useColorModeValue,
} from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import { MdPhotoSizeSelectActual } from 'react-icons/md';

interface ImageHolderProps {
	image: string | null | undefined;
	ratio: number;
	initialHeight?: string;
	buttonText?: string;
	upload?: () => void;
}

const ImageHolder: React.FC<ImageHolderProps> = ({
	image,
	ratio,
	initialHeight,
	buttonText,
	upload,
}) => {
	const bgColor = useColorModeValue('gray.50', 'rgba(255, 255, 255, 0.04)');
	return (
		<>
			{image === 'loading' && (
				<Box w='full' borderRadius='8px' overflow='hidden' bg={bgColor}>
					<AspectRatio maxW='full' ratio={ratio}>
						<Spinner m='auto' />
					</AspectRatio>
				</Box>
			)}
			{image && image !== 'loading' && (
				<Box w='full' mb='2px' p='4px'>
					<Box borderRadius='8px' overflow='hidden' bg={bgColor}>
						<AspectRatio maxW='full' ratio={ratio}>
							<Image src={image} alt='picture' layout='fill' />
						</AspectRatio>
					</Box>
				</Box>
			)}
			{!image && initialHeight && buttonText && (
				<Center w='full' borderRadius='8px' h={initialHeight} bg={bgColor}>
					<Button
						leftIcon={<MdPhotoSizeSelectActual />}
						colorScheme='gray'
						variant='ghost'
						onClick={upload}
					>
						{buttonText}
					</Button>
				</Center>
			)}
		</>
	);
};

export default ImageHolder;
