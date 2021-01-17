import {
	AspectRatio,
	Box,
	Button,
	Divider,
	Flex,
	Heading,
	IconButton,
	Text,
} from '@chakra-ui/react';
import { Image } from 'cloudinary-react';
import moment from 'moment';
import NextLink from 'next/link';
import React from 'react';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { CommentButton } from './CommentButton';
import { LikeButton } from './LikeButton';
import { UserAvatar } from './UserAvatar';

interface SingleQuizHeadProps {
	data: any;
}

const SingleQuizHead: React.FC<SingleQuizHeadProps> = ({ data }) => {
	const {
		quiz_photo,
		title,
		description,
		author,
		created_at,
		likesCount,
		commentsCount,
		questionsCount,
	} = data;

	return (
		<>
			<Flex p='10px' align='center'>
				<NextLink href='/'>
					<IconButton
						variant='ghost'
						colorScheme='purple'
						aria-label='back to home'
						isRound
						fontSize='24px'
						icon={<IoMdArrowRoundBack />}
					/>
				</NextLink>
				<Heading
					ml='20px'
					fontSize='28px'
					fontFamily='poppins'
					fontWeight='800'
				>
					Quiz
				</Heading>
			</Flex>
			<Divider w='full' />
			{quiz_photo && (
				<Box w='full' px='5px' pt='5px'>
					<Box bg='gray.100'>
						<AspectRatio maxW='full' ratio={16 / 9}>
							<Image publicId={quiz_photo} />
						</AspectRatio>
					</Box>
				</Box>
			)}
			<Box px='20px' pt='20px'>
				<Flex justify='flex-start' align='center'>
					<UserAvatar author={author} />
					<Divider orientation='vertical' h='50px' mx='20px' />
					<Heading wordBreak='break-word' lineHeight='1'>
						{title}
					</Heading>
				</Flex>
				<Text
					fontSize='18px'
					my='24px'
					wordBreak='break-word'
					whiteSpace='pre-line'
				>
					{description}
				</Text>
				<Text py='5px'>
					{moment(new Date(parseInt(created_at)).toISOString()).format(
						' h:mm A · MMM D, YYYY'
					)}
				</Text>
				<Divider />
				<Flex justify='space-around' py='12px'>
					<Text ml='5px'>
						<strong>{likesCount}</strong> Likes
					</Text>
					<Text ml='5px'>
						<strong>{commentsCount}</strong> Comments
					</Text>
					<Text ml='5px'>
						<strong>{questionsCount}</strong> Questions
					</Text>
				</Flex>
				<Divider />
				<Flex justify='space-around' py='8px'>
					<LikeButton quiz={data} withoutCount />
					<CommentButton quiz={data} withoutCount />
					<Button variant='ghost' colorScheme='purple'>
						Take quiz
					</Button>
				</Flex>
			</Box>
		</>
	);
};

export default SingleQuizHead;
