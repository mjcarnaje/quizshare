import {
	AspectRatio,
	Box,
	Button,
	Divider,
	Flex,
	Heading,
	IconButton,
	Text,
	Container as ChakraContainter,
	SkeletonCircle,
	Skeleton,
	HStack,
	SkeletonText,
} from '@chakra-ui/react';
import Image from 'next/image';
import moment from 'moment';
import React from 'react';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { CommentButton } from '../CommentButton';
import { LikeButton } from '../LikeButton';
import { UserAvatar } from '../UserAvatar';
import { useRouter } from 'next/dist/client/router';

interface SingleQuizHeadProps {
	data: any;
	quizLoading: boolean;
}

const SingleQuizHead: React.FC<SingleQuizHeadProps> = ({
	data,
	quizLoading,
}) => {
	const router = useRouter();

	if (quizLoading && !data) {
		// loading skeleton
		return (
			<ChakraContainter
				borderRadius='8px'
				borderWidth='1px'
				maxW={['100%', '100%', '820px']}
				my='36px'
				p='0'
			>
				<Flex p='10px' align='center'>
					<SkeletonCircle size='10' />
					<Skeleton ml='20px' height='20px' w='15%' />
				</Flex>
				<Skeleton>
					<AspectRatio maxW='full' ratio={16 / 9}>
						<Box></Box>
					</AspectRatio>
				</Skeleton>
				<Box px='20px' pt='20px'>
					<Flex justify='flex-start' align='center'>
						<HStack w='30%'>
							<Box>
								<SkeletonCircle size='12' />
							</Box>
							<SkeletonText mt='2' noOfLines={2} spacing='2' w='full' />
						</HStack>
						<Divider orientation='vertical' h='50px' mx='20px' />
						<Skeleton height='22px' w='18%' />
					</Flex>
					<Box my='24px'>
						<SkeletonText mt='2' noOfLines={6} spacing='3' w='full' />
					</Box>
					<Box py='5px'>
						<SkeletonText noOfLines={1} w='28%' />
					</Box>
					<Divider />
					<Flex justify='space-around' py='15px'>
						<SkeletonText ml='5px' noOfLines={1} w='17%' />
						<SkeletonText ml='5px' noOfLines={1} w='17%' />
						<SkeletonText ml='5px' noOfLines={1} w='17%' />
					</Flex>
					<Divider />
					<Flex justify='space-around' py='18px' align='center'>
						<SkeletonCircle size='8' />
						<SkeletonCircle size='8' />
						<Skeleton height='22px' w='15%' />
					</Flex>
				</Box>
			</ChakraContainter>
		);
	}

	const {
		id,
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
			<ChakraContainter
				borderRadius='8px'
				borderWidth='1px'
				maxW={['100%', '100%', '820px']}
				my='36px'
				p='0'
			>
				<Flex p='10px' align='center'>
					<IconButton
						variant='ghost'
						colorScheme='purple'
						aria-label='back to home'
						isRound
						fontSize='24px'
						icon={<IoMdArrowRoundBack />}
						onClick={() => router.push('/')}
					/>
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
								{quiz_photo !== 'loading' && (
									<Image
										src={quiz_photo}
										layout='fill'
										alt='Thumbnail of Quiz'
									/>
								)}
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
						<Button
							variant='ghost'
							colorScheme='purple'
							onClick={() => router.push(`/quiz/take/${id}`)}
						>
							Take quiz
						</Button>
					</Flex>
				</Box>
			</ChakraContainter>
		</>
	);
};

export default SingleQuizHead;
