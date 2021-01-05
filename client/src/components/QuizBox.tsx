import {
	Avatar,
	Box,
	Center,
	Container as ChakraContainter,
	Heading,
	HStack,
	IconButton,
	StackDivider,
	Text,
	useColorModeValue,
	VStack,
} from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaComment } from 'react-icons/fa';
import { QuizzesResponseFragment } from '../generated/graphql';
import { LikeButton } from './LikeButton';

interface QuizBoxProps {
	quiz: QuizzesResponseFragment;
	date: string;
	desc: string;
}

export const QuizBox: React.FC<QuizBoxProps> = ({ quiz, date, desc }) => {
	const { id, quiz_photo, title, author } = quiz;
	const imageBackgroundColor = useColorModeValue(
		'gray.100',
		'rgb(0, 0, 0, .05)'
	);

	return (
		<ChakraContainter maxW='820px' my='36px'>
			<HStack divider={<StackDivider borderColor='gray' />}>
				<HStack flex={1} align='start'>
					<Box w={quiz_photo ? '60%' : '85%'}>
						<Heading as='h2' size='lg' mb='10px'>
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
							<Box w='40%' pl='32px'>
								<Center
									borderRadius='8px'
									overflow='hidden'
									borderColor='gray'
									bg={imageBackgroundColor}
									borderWidth='1px'
								>
									<Image src={quiz_photo} height={180} width={320} />
								</Center>
							</Box>
						</Link>
					)}
				</HStack>

				<VStack justify='center' spacing='12px'>
					<LikeButton quiz={quiz} />
					<Link href={`/quiz/${id}`}>
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
								fontSize='20px'
								icon={<FaComment />}
							/>
							<Text fontSize='14px' fontWeight='medium' color='gray.400'>
								0
							</Text>
						</Center>
					</Link>
				</VStack>
			</HStack>
		</ChakraContainter>
	);
};
