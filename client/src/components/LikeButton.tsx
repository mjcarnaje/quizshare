import { gql } from '@apollo/client';
import { Center, IconButton, Text } from '@chakra-ui/react';
import React from 'react';
import { IoIosHeart } from 'react-icons/io';
import {
	QuizzesResponseFragment,
	useToggleLikeMutation,
} from '../generated/graphql';

interface LikeButtonProps {
	quiz: QuizzesResponseFragment;
}

export const LikeButton: React.FC<LikeButtonProps> = ({
	quiz: { isLiked, id, likesCount },
}) => {
	const [toggleLike] = useToggleLikeMutation();

	return (
		<Center>
			<IconButton
				variant='outline'
				colorScheme='gray'
				aria-label='Like post'
				isRound
				color={isLiked ? 'red.400' : 'gray.400'}
				_focus={{ outline: 'none' }}
				border='none'
				_hover={{ color: isLiked ? 'red.500' : 'gray.500' }}
				fontSize='24px'
				icon={<IoIosHeart />}
				onClick={async () =>
					await toggleLike({
						variables: {
							quiz_id: parseInt(id),
						},
						update: (cache) => {
							const data = cache.readFragment<{
								likesCount: number;
								isLiked: boolean;
							}>({
								id: 'Quiz:' + id,
								fragment: gql`
									fragment _ on Quiz {
										id
										likesCount
										isLiked
									}
								`,
							});

							let newIsLiked: boolean;
							let newLikesCount: number = data!.likesCount;

							if (data && data.isLiked) {
								newIsLiked = false;
								newLikesCount = newLikesCount - 1;
							} else {
								newIsLiked = true;
								newLikesCount = newLikesCount + 1;
							}
							cache.writeFragment({
								id: 'Quiz:' + id,
								fragment: gql`
									fragment _ on Quiz {
										id
										likesCount
										isLiked
									}
								`,
								data: { isLiked: newIsLiked, likesCount: newLikesCount },
							});
						},
					})
				}
			/>
			<Text fontSize='14px' fontWeight='medium' color='gray.400'>
				{likesCount}
			</Text>
		</Center>
	);
};
