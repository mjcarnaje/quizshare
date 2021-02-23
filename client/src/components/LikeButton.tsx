import { gql } from '@apollo/client';
import { Flex, IconButton, Text } from '@chakra-ui/react';
import React from 'react';
import { IoIosHeart } from 'react-icons/io';
import { useToggleLikeMutation } from '../generated/graphql';

interface LikeButtonProps {
	quiz: {
		is_liked?: boolean;
		id: string;
		likes_count: number;
		questions_count?: number;
	} & any;
	withoutCount?: boolean;
}

export const LikeButton: React.FC<LikeButtonProps> = ({
	quiz: { is_liked, id, likes_count },
	withoutCount,
}) => {
	const [toggleLike] = useToggleLikeMutation();

	return (
		<Flex justify='flex-start' align='center'>
			<IconButton
				variant='outline'
				colorScheme='gray'
				aria-label='Like post'
				isRound
				color={is_liked ? 'red.400' : 'gray.400'}
				_focus={{ outline: 'none' }}
				border='none'
				_hover={{ color: is_liked ? 'red.500' : 'gray.500' }}
				fontSize='24px'
				icon={<IoIosHeart />}
				onClick={async () =>
					await toggleLike({
						variables: {
							quiz_id: parseInt(id),
						},
						update: (cache) => {
							const data = cache.readFragment<{
								likes_count: number;
								is_liked: boolean;
							}>({
								id: 'Quiz:' + id,
								fragment: gql`
									fragment _ on Quiz {
										id
										likes_count
										is_liked
									}
								`,
							});

							let newIsLiked: boolean;
							let newLikesCount: number = data!.likes_count;

							if (data && data.is_liked) {
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
										likes_count
										is_liked
									}
								`,
								data: { is_liked: newIsLiked, likes_count: newLikesCount },
							});
						},
					})
				}
			/>
			{!withoutCount && (
				<Text fontSize='14px' fontWeight='medium' color='gray.400'>
					{likes_count}
				</Text>
			)}
		</Flex>
	);
};
