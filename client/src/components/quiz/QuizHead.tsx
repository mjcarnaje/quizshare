import {
	AspectRatio,
	Box,
	Button,
	Container as ChakraContainer,
	Divider,
	Flex,
	Heading,
	IconButton,
	Spacer,
	Tag,
	Text,
	Tooltip,
} from '@chakra-ui/react';
import moment from 'moment';
import { useRouter } from 'next/dist/client/router';
import Image from 'next/image';
import React from 'react';
import { BiCheckDouble } from 'react-icons/bi';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { CommentButton } from '../CommentButton';
import { EditDeleteQuizButtons } from '../edit-delete-buttons/EditDeleteQuizButtons';
import { LikeButton } from '../LikeButton';
import { UserAvatar } from '../UserAvatar';
import QuizHeadLoading from './QuizHeadLoading';

interface QuizHeadProps {
	data: any;
	quizLoading: boolean;
}

const QuizHead: React.FC<QuizHeadProps> = ({ data, quizLoading }) => {
	const router = useRouter();

	if (quizLoading && !data) {
		return <QuizHeadLoading />;
	}

	const {
		id,
		quiz_photo,
		title,
		description,
		author,
		created_at,
		likes_count,
		comments_count,
		questions_count,
		scores_count,
		is_taken,
		tags,
	} = data;

	return (
		<>
			<ChakraContainer
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
						onClick={() => router.back()}
					/>
					<Heading
						ml='20px'
						fontSize='28px'
						fontFamily='poppins'
						fontWeight='800'
					>
						Quiz
					</Heading>
					<Spacer />
					<EditDeleteQuizButtons quiz={data} />
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
					<Flex
						direction={['column-reverse', 'column-reverse', 'row']}
						justify='flex-start'
						align={['flex-start', 'flex-start', 'center']}
						position='relative'
					>
						<UserAvatar author={author} />
						<Divider
							display={['none', 'none', 'block']}
							orientation='vertical'
							h='50px'
							mx='20px'
						/>
						<Heading
							wordBreak='break-word'
							lineHeight='1'
							mb={['15px', '15px', '0']}
						>
							{title}
						</Heading>
						{is_taken && (
							<Tooltip label='You have taken this' aria-label='A tooltip'>
								<IconButton
									position='absolute'
									right='10px'
									colorScheme='purple'
									variant='ghost'
									aria-label='is already taken'
									icon={<BiCheckDouble fontSize='24px' />}
									isRound
									_focus={{ outline: 'none' }}
								/>
							</Tooltip>
						)}
					</Flex>
					<Text
						fontSize='18px'
						my='24px'
						wordBreak='break-word'
						whiteSpace='pre-line'
					>
						{description}
					</Text>

					<Box overflowWrap='break-word' mb='24px'>
						{tags &&
							tags.map((tag: { name: string }, i: number) => (
								<Tag key={i} variant='subtle' mr='6px' my='3px'>
									{tag.name}
								</Tag>
							))}
					</Box>

					<Text py='5px'>
						{moment(new Date(parseInt(created_at)).toISOString()).format(
							' h:mm A · MMM D, YYYY'
						)}
					</Text>
					<Divider />
					<Flex justify='space-around' py='12px'>
						<Text ml='5px'>
							<strong>{likes_count}</strong> Likes
						</Text>
						<Text ml='5px'>
							<strong>{comments_count}</strong> Comments
						</Text>
						<Text ml='5px'>
							<strong>{questions_count}</strong> Questions
						</Text>
						<Text ml='5px'>
							<strong>{scores_count}</strong> Submissions
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
			</ChakraContainer>
		</>
	);
};

export default QuizHead;
