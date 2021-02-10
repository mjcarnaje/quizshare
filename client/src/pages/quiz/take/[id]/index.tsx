import {
	AspectRatio,
	Avatar,
	Box,
	Button,
	Flex,
	Grid,
	Heading,
	Text,
	useColorModeValue,
	VStack,
	Icon,
	Tooltip,
} from '@chakra-ui/react';
import { useRouter } from 'next/dist/client/router';
import Image from 'next/image';
import React, { RefObject, useContext, useRef, useState } from 'react';
import {
	useCheckAnswerMutation,
	useQuestionsQuery,
	useSingleQuizQuery,
} from '../../../../generated/graphql';
import { MainContainer } from '../../../../layouts/MainContainer';
import { SubContainer } from '../../../../layouts/SubContainer';
import { QuizScoreContext, QuizScoreType } from '../../../../store/context';
import { withApollo } from '../../../../utils/withApollo';
import { gql } from '@apollo/client';
import { BiCheckDouble } from 'react-icons/bi';
import Head from 'next/head';

interface TakeQuizProps {}
export type UsersAnswerProps = {
	question_id: string;
	choice_id: string;
};

const TakeQuiz: React.FC<TakeQuizProps> = ({}) => {
	const choiceBgHover = useColorModeValue(
		'gray.200',
		'rgba(255, 255, 255, 0.04)'
	);

	const choiceBgSelected = useColorModeValue(
		'gray.300',
		'rgba(255, 255, 255, 0.06'
	);

	const router = useRouter();
	const questionsRefs: RefObject<any> = useRef([]);

	const [usersAnswer, setUsersAnswer] = useState<UsersAnswerProps[]>([]);
	const [checking, setChecking] = useState(false);

	const { setQuizScore, setAnswerByUser } = useContext(
		QuizScoreContext
	) as QuizScoreType;

	const { data, loading } = useQuestionsQuery({
		variables: {
			quiz_id: parseInt(router.query.id as string),
			withAnswer: false,
		},
	});

	const { data: quizdata, loading: quizloading } = useSingleQuizQuery({
		variables: {
			quiz_id: parseInt(router.query.id as string),
		},
	});

	const [
		checkAnswer,
		{ loading: checkAnswerLoading },
	] = useCheckAnswerMutation();

	const selectAnswer = (question_id: string, choice_id: string, i: number) => {
		const isAnsweredIndex = usersAnswer.findIndex(
			(ans) => ans.question_id === question_id
		);

		if (isAnsweredIndex !== -1) {
			let newArr = [...usersAnswer];
			newArr[isAnsweredIndex] = { ...newArr[isAnsweredIndex], choice_id };
			setUsersAnswer(newArr);
		} else {
			setUsersAnswer((ans) => [...ans, { question_id, choice_id }]);
		}

		// automatic scrolling until second to the last question
		if (
			data?.questions?.length !== undefined &&
			data?.questions?.length > i + 1
		) {
			questionsRefs.current[i + 1].scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<MainContainer>
			<Head>
				<title>{`Take | ${quizdata?.singleQuiz?.title}`}</title>
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
			</Head>
			<SubContainer position='relative'>
				<Flex justify='space-between'>
					<Box ml='10px'>
						<Heading as='h2' fontSize='24px'>
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
					</Box>
					{quizdata?.singleQuiz?.is_taken && (
						<Tooltip label='You have taken this' aria-label='A tooltip'>
							<Box>
								<Icon as={BiCheckDouble} color='gray.500' boxSize='24px' />
							</Box>
						</Tooltip>
					)}
				</Flex>
				<VStack spacing='48px' my='20px'>
					{data?.questions?.map((question, i) => (
						<Box
							key={question.question_id}
							ref={(ref) => (questionsRefs.current[i] = ref)}
							w='full'
						>
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
										{data.questions?.length}
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
									const answer = usersAnswer.find(
										(ans) => ans.question_id === question.question_id
									);
									const isAnswered = answer?.choice_id === choice.choice_id;

									return (
										<Box
											key={choice.choice_id}
											borderWidth='1px'
											cursor='pointer'
											p='12px'
											textAlign='center'
											wordBreak='break-word'
											whiteSpace='pre-line'
											_hover={{ bg: !isAnswered ? choiceBgHover : '' }}
											onClick={() =>
												selectAnswer(question.question_id, choice.choice_id, i)
											}
											bg={isAnswered ? choiceBgSelected : ''}
											boxShadow={isAnswered ? 'sm' : ''}
										>
											{choice?.choice_photo && (
												<Box
													mb='8px'
													overflow='hidden'
													borderRadius='sm'
													bg='gray.100'
												>
													<AspectRatio ratio={16 / 9}>
														<Image src={choice.choice_photo} layout='fill' />
													</AspectRatio>
												</Box>
											)}
											<Box>
												<Text>{choice.value}</Text>
											</Box>
										</Box>
									);
								})}
							</Grid>
						</Box>
					))}
				</VStack>

				{!quizdata && quizloading && <Text>quiz loading...</Text>}
				{!data && loading && <Text>questoins loading...</Text>}

				<Box w='full' textAlign='center'>
					<Button
						isLoading={checkAnswerLoading || checking}
						loadingText='Checking...'
						onClick={async () => {
							await checkAnswer({
								variables: {
									data: {
										quiz_id: parseInt(router.query.id as string),
										users_answer: usersAnswer,
									},
								},
								update: (cache, { data }) => {
									const id = parseInt(router.query.id as string);

									router.push(`/quiz/take/${id}/score`);

									const qdata = cache.readFragment<{
										scores_count: number;
									}>({
										id: 'Quiz:' + id,
										fragment: gql`
											fragment _ on Quiz {
												scores_count
											}
										`,
									});

									let newTakersCount: number = qdata?.scores_count ?? 0;

									cache.writeFragment({
										id: 'Quiz:' + id,
										fragment: gql`
											fragment _ on Quiz {
												scores_count
											}
										`,
										data: {
											scores_count: (newTakersCount += 1),
										},
									});

									setAnswerByUser(usersAnswer);
									setQuizScore(data?.checkAnswer);
									setUsersAnswer([]);
									setChecking(true);
								},
							});
						}}
					>
						Sumbit answer
					</Button>
				</Box>
			</SubContainer>
		</MainContainer>
	);
};

export default withApollo({ ssr: true })(TakeQuiz);
