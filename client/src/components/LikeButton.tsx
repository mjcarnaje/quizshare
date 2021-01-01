import { Center, IconButton, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { IoIosHeart } from 'react-icons/io';

interface LikeButtonProps {
	likes: { id: string }[];
}

export const LikeButton: React.FC<LikeButtonProps> = ({ likes }) => {
	const [liked, setLiked] = useState<boolean>(false);

	useEffect(() => {}, []);

	return (
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
				fontSize='24px'
				icon={<IoIosHeart />}
			/>
			<Text fontSize='14px' fontWeight='medium' color='gray.400'>
				18
			</Text>
		</Center>
	);
};
