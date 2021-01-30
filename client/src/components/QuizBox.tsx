import {
	AspectRatio,
	Box,
	Container as ChakraContainter,
	Heading,
	Stack,
	StackDivider,
	Text,
	useBreakpointValue,
	Flex,
	Icon,
} from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { QuizzesResponseFragment } from '../generated/graphql';
import { CommentButton } from './CommentButton';
import { EditDeleteQuizButtons } from './EditDeleteQuizButtons';
import { LikeButton } from './LikeButton';
import { UserAvatar } from './UserAvatar';
import moment from 'moment';
import { AiOutlineEye, AiOutlineUnorderedList } from 'react-icons/ai';
import { useColorModeValue } from '@chakra-ui/react';

interface QuizBoxProps {
	quiz: QuizzesResponseFragment;
}

export const QuizBox: React.FC<QuizBoxProps> = ({ quiz }) => {
	const titleColor = useColorModeValue('gray.700', 'white');

	const { description, created_at } = quiz;
	const descriptionCharacter = useBreakpointValue({ base: 172, md: 250 });

	let date, desc;

	const moreThan250Characters = description.length > 250;

	if (moreThan250Characters) {
		desc = `${description.slice(0, descriptionCharacter)}...`;
	} else {
		desc = description;
	}

	const parsedCreateAt = new Date(parseInt(created_at));

	const oneDayAgo = moment(parsedCreateAt)
		.fromNow(true)
		.includes('day' || 'week' || 'month' || 'year');

	if (oneDayAgo) {
		date = moment(parsedCreateAt).format('ll');
	} else {
		date = `${moment(parsedCreateAt).fromNow(true)} ago`;
	}

	const titleSize = useBreakpointValue({ base: 'xl', md: 'lg' });
	const { id, quiz_photo, title, author, takers_count, questionsCount } = quiz;

	return (
		<ChakraContainter maxW={['100%', '460px', '820px']} my='36px' p='0'>
			<Stack
				direction={['column', 'column', 'row']}
				divider={<StackDivider borderColor='gray' />}
			>
				<Stack
					direction={['column-reverse', 'column-reverse', 'row']}
					flex={1}
					align='start'
				>
					<Box w={['100%', '100%', quiz_photo ? '60%' : '85%']} pos='relative'>
						<Heading as='h2' size={titleSize} mb='10px' color={titleColor}>
							<Link href={`/quiz/${id}`}>{title}</Link>
						</Heading>
						<EditDeleteQuizButtons
							quiz={quiz}
							pos='absolute'
							top='2px'
							right='4px'
							display={['inline-block', 'inline-block', 'none']}
						/>
						<Flex mb='10px'>
							<Text fontSize='14px'>
								<Link href={`/quiz/${id}`}>{date}</Link>
							</Text>
							<Flex align='center' ml='20px'>
								<Icon as={AiOutlineEye} />
								<Text ml='4px' fontSize='14px'>
									{takers_count} Submissions
								</Text>
							</Flex>
							<Flex align='center' ml='20px'>
								<Icon as={AiOutlineUnorderedList} />
								<Text ml='4px' fontSize='14px'>
									{questionsCount} Questions
								</Text>
							</Flex>
						</Flex>
						<Text lineHeight='22px' mb='24px'>
							<Link href={`/quiz/${id}`}>{desc}</Link>
						</Text>
						<UserAvatar author={author} />
					</Box>
					{quiz_photo && (
						<Link href={`/quiz/${id}`}>
							<Box
								w={['100%', '100%', '45%']}
								pl={[0, 0, '32px']}
								cursor='pointer'
							>
								<Box borderRadius='8px' overflow='hidden' bg='gray.100'>
									<AspectRatio maxW='full' ratio={16 / 9}>
										<Image
											src={quiz_photo}
											layout='fill'
											alt='Thumbnail of Quiz'
										/>
									</AspectRatio>
								</Box>
							</Box>
						</Link>
					)}
				</Stack>

				<Stack
					direction={['row', 'row', 'column']}
					justify='center'
					spacing={['36px', '36px', '12px']}
					pos='relative'
				>
					<EditDeleteQuizButtons
						quiz={quiz}
						pos='absolute'
						top='0'
						left='4px'
						display={['none', 'none', 'inline-block']}
					/>
					<LikeButton quiz={quiz} />
					<CommentButton quiz={quiz} />
				</Stack>
			</Stack>
		</ChakraContainter>
	);
};
