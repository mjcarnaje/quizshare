import {
	Avatar,
	Box,
	Button,
	Center,
	Container as ChakraContainter,
	Flex,
	HStack,
	IconButton,
	StackDivider,
	Text,
	useColorMode,
	VStack,
} from '@chakra-ui/react';
import moment from 'moment';
import Image from 'next/image';
import React from 'react';
import { FaComment } from 'react-icons/fa';
import { IoIosHeart } from 'react-icons/io';
import { Container } from '../components/Container';
import { useQuizzesQuery } from '../generated/graphql';
import { useIsAuth } from '../utils/useIsAuth';
import { withApollo } from '../utils/withApollo';

const Index: React.FC = () => {
	const { colorMode } = useColorMode();
	const colorText = { light: 'gray.800', dark: 'white' };
	const outline = { light: '', dark: 'gray.500' };
	const buttonColor = { light: 'purple', dark: 'gray' };

	useIsAuth();

	const { data, loading, fetchMore, variables } = useQuizzesQuery({
		variables: {
			limit: 3,
			cursor: null,
		},
		notifyOnNetworkStatusChange: true,
	});

	return (
		<Container minH='100vh'>
			{data?.quizzes.quizzes.map((quiz) => {
				const { title, description, quiz_photo, created_at, author, id } = quiz;
				return (
					<ChakraContainter maxW='820px' my='36px' key={id}>
						<HStack divider={<StackDivider borderColor='gray.200' />}>
							<HStack w='full'>
								<Box w='60%'>
									<Text
										fontWeight='700'
										fontSize='30px'
										color={colorText[colorMode]}
										lineHeight='37.5px'
										letterSpacing='-.75px'
										mb='10px'
									>
										{title}
									</Text>
									<Text mb='10px' fontSize='14px'>
										{moment(new Date(parseInt(created_at))).fromNow(true)} ago
									</Text>
									<Text lineHeight='22px' color='gray.600' mb='20px'>
										{description.length > 250
											? `${description.slice(0, 250)}...`
											: description}
									</Text>
									<HStack align='start' spacing='12px' fontSize='17px'>
										<Avatar
											src={author?.avatar || 'https://bit.ly/broken-link'}
										/>
										<Box>
											<Text fontWeight='semibold' color='#333333'>
												{author.profile.name}
											</Text>
											<Text color='gray.600' fontSize='15px' lineHeight='10px'>
												{`@${author.email.split('@')[0]}`}
											</Text>
										</Box>
									</HStack>
								</Box>
								<Flex w='40%' pl='32px' align='start' h='full' justify='start'>
									<Center
										borderRadius='8px'
										overflow='hidden'
										borderColor={outline[colorMode]}
										borderStyle='solid'
										borderWidth='1px'
									>
										<Image
											src={
												quiz_photo ||
												'https://thekrauseagency.com/wp-content/themes/consultix/images/no-image-found-360x250.png'
											}
											alt='Picture of quiz'
											height={180}
											width={320}
										/>
									</Center>
								</Flex>
							</HStack>

							<VStack justify='center' spacing='12px'>
								<Center>
									<IconButton
										variant='outline'
										colorScheme='gray'
										aria-label='Like post'
										isRound
										color='gray.400'
										_focus={{ outline: 'none' }}
										border='none'
										_hover={{ color: 'red.500' }}
										fontSize='24px'
										icon={<IoIosHeart />}
									/>
									<Text fontSize='14px' fontWeight='medium' color='gray.400'>
										18
									</Text>
								</Center>
								<Center>
									<IconButton
										variant='outline'
										colorScheme='gray'
										aria-label='Like post'
										isRound
										color='gray.400'
										_focus={{ outline: 'none' }}
										border='none'
										_hover={{ color: 'blue.500' }}
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
			})}
			{data && data.quizzes.hasMore && (
				<Button
					size='sm'
					colorScheme={buttonColor[colorMode]}
					variant='ghost'
					fontSize={16}
					my='20px'
					onClick={() => {
						fetchMore({
							variables: {
								limit: variables?.limit,
								cursor:
									data.quizzes.quizzes[data.quizzes.quizzes.length - 1]
										.created_at,
							},
						});
					}}
					isLoading={loading}
				>
					Load more
				</Button>
			)}
		</Container>
	);
};

export default withApollo({ ssr: true })(Index);
