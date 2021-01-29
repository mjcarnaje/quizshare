import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import {
	AspectRatio,
	Avatar,
	Box,
	Button,
	Flex,
	Grid,
	Heading,
	Icon,
	Spinner,
	Text,
	VStack,
} from '@chakra-ui/react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react';
import {
	useQuestionsQuery,
	useSingleQuizQuery,
} from '../../../../generated/graphql';
import { MainContainer } from '../../../../layouts/MainContainer';
import { SubContainer } from '../../../../layouts/SubContainer';
import { QuizResultContext, QuizResultType } from '../../../../store/context';
import { withApollo } from '../../../../utils/withApollo';
import { useColorModeValue } from '@chakra-ui/react';
import { AiFillCheckCircle, AiFillCloseCircle } from 'react-icons/ai';
import Comments from '../../../../components/single-quiz/Comments';
import Head from 'next/head';

interface ResultProps {}

const Result: React.FC<ResultProps> = ({}) => {
	const correctColor = useColorModeValue('#68AF15', '#68AF15');
	const wrongColor = useColorModeValue('#D30000', '#D30000');

	const router = useRouter();

	const [, , , id] = router.asPath.split('/');

	const [showAnswer, setShowAnswer] = useState(false);

	const { quizResult, setQuizResult, answersByUser } = useContext(
		QuizResultContext
	) as QuizResultType;

	const { data: quizdata } = useSingleQuizQuery({
		variables: {
			quiz_id: parseInt(router.query.id as string),
		},
	});

	const { data: questionsdata } = useQuestionsQuery({
		variables: {
			quiz_id: parseInt(id as string),
			withAnswer: true,
		},
	});

	useEffect(() => {
		if (!quizResult) {
			router.replace(`/quiz/take/${id}`);
		}
		// return () => {
		// 	setQuizResult(null);
		// };
	}, []);

	if (!quizResult) {
		return (
			<MainContainer
				display='flex'
				alignItems='center'
				justifyContent='center'
				h='100vh'
			>
				<SubContainer display='grid' placeItems='center'>
					<Flex>
						<Spinner mr='5px' />
						<Text>Checking...</Text>
					</Flex>
				</SubContainer>
			</MainContainer>
		);
	}

	const {
		score,
		current_total_questions,
		taker: {
			username,
			email,
			avatar,
			profile: { name },
		},
	} = quizResult;

	const percentage = ((score / current_total_questions) * 100).toFixed(1);

	return (
		<MainContainer>
			<Head>
				<title>{`Result | ${quizdata?.singleQuiz?.title}`}</title>
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
			</Head>
			<SubContainer>
				<Flex align='center' flexDirection='column' mb='30px'>
					<Heading as='h2' fontSize='32px'>
						{quizdata?.singleQuiz?.title}
					</Heading>
					<Flex mt='2px'>
						<Avatar
							size='xs'
							src={quizdata?.singleQuiz?.author.avatar ?? ''}
							name={quizdata?.singleQuiz?.author.profile.name ?? ''}
						/>
						<Text ml='10px' as='p'>
							{quizdata?.singleQuiz?.author.profile.name}
						</Text>
					</Flex>
				</Flex>
				<Box>
					<Box textAlign='center'>
						<Avatar src={avatar ?? ''} name={name} alt={username} size='xl' />
						<Text lineHeight='1.2' fontWeight='semibold'>
							{username}
						</Text>
						<Text lineHeight='1' fontSize='14px'>
							{`@${email.split('@')[0]}`}
						</Text>
					</Box>
					<Box textAlign='center' my='20px'>
						<Heading fontSize='44px'>{`${percentage}%`}</Heading>
						<Text as='h2' fontSize='20px'>
							You answered <strong>{score}</strong> out of{' '}
							<strong>{current_total_questions}</strong> correctly
						</Text>
					</Box>
				</Box>
				<Flex justify='center' mt='30px'>
					<Button
						size='sm'
						onClick={() => setShowAnswer(!showAnswer)}
						rightIcon={showAnswer ? <ChevronDownIcon /> : <ChevronUpIcon />}
					>
						{showAnswer ? 'Hide Answers' : 'Show Answers'}
					</Button>
				</Flex>
				{showAnswer && (
					<VStack spacing='48px' my='20px'>
						{questionsdata?.questions?.map((question, i) => {
							const questionThatAnswered = answersByUser?.find(
								(ans) => ans.question_id === question.question_id
							);

							return (
								<Box key={question.question_id} w='full'>
									{question?.question_photo && (
										<Box
											mx='auto'
											my='8px'
											overflow='hidden'
											borderRadius='sm'
											bg='gray.100'
											maxW={['100%', '67%']}
										>
											<AspectRatio ratio={16 / 9}>
												<Image src={question.question_photo} layout='fill' />
											</AspectRatio>
										</Box>
									)}
									<Box
										boxShadow='sm'
										py='14px'
										px='28px'
										borderRadius='4px'
										pos='relative'
										borderWidth='1px'
									>
										<VStack pos='absolute' left='8px' spacing='2px'>
											<Text as='p' fontSize='14px' lineHeight='1'>
												{i + 1}
											</Text>
											<Text as='small' fontSize='11px' lineHeight='1'>
												{questionsdata.questions?.length}
											</Text>
										</VStack>
										<Text
											fontSize='18px'
											wordBreak='break-word'
											whiteSpace='pre-line'
											fontWeight='semibold'
										>
											{question.question}
										</Text>
									</Box>
									<Grid
										templateColumns='repeat(auto-fit, minmax(360px, 1fr))'
										gap={2}
										my='15px'
										mx={['20px', '0']}
									>
										{question.choices.map((choice) => {
											const correctAnswer =
												choice.choice_id === question.answer;

											let isWrong, isCorrect;

											if (
												questionThatAnswered &&
												questionThatAnswered.choice_id === choice.choice_id
											) {
												if (
													questionThatAnswered.choice_id !== question.answer
												) {
													isWrong = true;
												} else if (
													questionThatAnswered.choice_id === question.answer
												) {
													isCorrect = true;
												}
											}

											return (
												<Box
													key={choice.choice_id}
													borderWidth={
														correctAnswer || isWrong || isCorrect
															? '2px'
															: '1px'
													}
													borderRadius={
														correctAnswer || isWrong || isCorrect ? 'md' : ''
													}
													p='12px'
													textAlign='center'
													wordBreak='break-word'
													whiteSpace='pre-line'
													borderColor={
														correctAnswer || isCorrect
															? correctColor
															: isWrong
															? wrongColor
															: ''
													}
													bg={
														correctAnswer || isCorrect
															? 'rgba(104, 175, 21, .2)'
															: isWrong
															? 'rgba(211, 0, 0, .2)'
															: ''
													}
												>
													{choice?.choicePhoto && (
														<Box
															mb='8px'
															overflow='hidden'
															borderRadius='sm'
															bg='gray.100'
														>
															<AspectRatio ratio={16 / 9}>
																<Image src={choice.choicePhoto} layout='fill' />
															</AspectRatio>
														</Box>
													)}
													<Box position='relative'>
														<Text>{choice.value}</Text>
														{(isCorrect || isWrong) && (
															<Box
																position='absolute'
																right='0'
																top='50%'
																transform='translate(0, -50%)'
																display='flex'
																justifyContent='center'
																alignItems='center'
															>
																{isCorrect && (
																	<Icon
																		as={AiFillCheckCircle}
																		color={correctColor}
																		boxSize='20px'
																	/>
																)}
																{isWrong && (
																	<Icon
																		as={AiFillCloseCircle}
																		color={wrongColor}
																		boxSize='20px'
																	/>
																)}
															</Box>
														)}
													</Box>
												</Box>
											);
										})}
									</Grid>
								</Box>
							);
						})}
					</VStack>
				)}
			</SubContainer>
			<SubContainer bg='' borderWidth='0' boxShadow='none'>
				<Heading as='h3' fontSize='18px' fontFamily='inter' mb='20px'>
					Discussions
				</Heading>
				<Comments
					quiz_id={parseInt(id as string)}
					commentsCount={quizdata?.singleQuiz?.commentsCount ?? 0}
				/>
			</SubContainer>
		</MainContainer>
	);
};
export default withApollo({ ssr: true })(Result);
