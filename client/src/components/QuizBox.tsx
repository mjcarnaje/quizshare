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
import React from 'react';
import { FaComment } from 'react-icons/fa';
import { QuizzesResponseFragment } from '../generated/graphql';
import { LikeButton } from './LikeButton';

interface QuizBoxProps extends QuizzesResponseFragment {
	date: string;
	desc: string;
}

export const QuizBox: React.FC<QuizBoxProps> = ({
	title,
	date,
	desc,
	likes,
	author,
	quiz_photo,
}) => {
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
							{title}
						</Heading>
						<Text mb='10px' fontSize='14px'>
							{date}
						</Text>
						<Text lineHeight='22px' mb='24px'>
							{desc}
						</Text>
						<HStack align='start' spacing='12px' fontSize='17px'>
							<Avatar src={author?.avatar || undefined} />
							<Box>
								<Heading as='h3' fontSize='17px' fontFamily='inter'>
									{author.profile.name}
								</Heading>
								<Text fontSize='15px' lineHeight='.9'>
									{`@${author.email.split('@')[0]}`}
								</Text>
							</Box>
						</HStack>
					</Box>
					{quiz_photo && (
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
					)}
				</HStack>

				<VStack justify='center' spacing='12px'>
					<LikeButton likes={likes} />
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
							22
						</Text>
					</Center>
				</VStack>
			</HStack>
		</ChakraContainter>
	);
};
