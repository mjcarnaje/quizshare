import {
	AspectRatio,
	Avatar,
	Box,
	Container as ChakraContainter,
	Heading,
	HStack,
	Stack,
	StackDivider,
	Text,
	useBreakpointValue,
} from '@chakra-ui/react';
import { Image } from 'cloudinary-react';
import Link from 'next/link';
import React from 'react';
import { QuizzesResponseFragment } from '../generated/graphql';
import { CommentButton } from './CommentButton';
import { LikeButton } from './LikeButton';

interface QuizBoxProps {
	quiz: QuizzesResponseFragment;
	date: string;
	desc: string;
}

export const QuizBox: React.FC<QuizBoxProps> = ({ quiz, date, desc }) => {
	const titleSize = useBreakpointValue({ base: 'xl', md: 'lg' });
	const { id, quiz_photo, title, author } = quiz;

	return (
		<ChakraContainter maxW={['100%', '460px', '820px']} my='36px'>
			<Stack
				direction={['column', 'column', 'row']}
				divider={<StackDivider borderColor='gray' />}
			>
				<Stack
					direction={['column-reverse', 'column-reverse', 'row']}
					flex={1}
					align='start'
				>
					<Box w={['100%', '100%', quiz_photo ? '60%' : '85%']}>
						<Heading as='h2' size={titleSize} mb='10px'>
							<Link href={`/quiz/${id}`}>{title}</Link>
						</Heading>
						<Text mb='10px' fontSize='14px'>
							<Link href={`/quiz/${id}`}>{date}</Link>
						</Text>
						<Text lineHeight='22px' mb='24px'>
							<Link href={`/quiz/${id}`}>{desc}</Link>
						</Text>
						<HStack align='start' spacing='12px' fontSize='17px'>
							<Link href={`/user/${author.username}`}>
								<Avatar
									src={author?.avatar || ''}
									name={author.profile.name}
									cursor='pointer'
								/>
							</Link>
							<Box>
								<Heading as='h3' fontSize='17px' fontFamily='inter'>
									<Link href={`/user/${author.username}`}>
										{author.profile.name}
									</Link>
								</Heading>
								<Text fontSize='15px' lineHeight='.9'>
									<Link href={`/user/${author.username}`}>
										{`@${author.email.split('@')[0]}`}
									</Link>
								</Text>
							</Box>
						</HStack>
					</Box>
					{quiz_photo && (
						<Link href={`/quiz/${id}`}>
							<Box
								w={['100%', '100%', '45%']}
								pl={[0, 0, '32px']}
								cursor='pointer'
							>
								<Box borderRadius='8px' overflow='hidden'>
									<AspectRatio maxW='full' ratio={16 / 9}>
										<Image publicId={quiz_photo} />
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
				>
					<LikeButton quiz={quiz} />
					<CommentButton quiz={quiz} />
				</Stack>
			</Stack>
		</ChakraContainter>
	);
};
