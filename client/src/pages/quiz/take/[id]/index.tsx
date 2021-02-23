import { gql } from '@apollo/client';
import {
	AspectRatio,
	Avatar,
	Box,
	Button,
	Flex,
	Grid,
	Heading,
	Icon,
	Text,
	Tooltip,
	useColorModeValue,
	VStack,
} from '@chakra-ui/react';
import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import Image from 'next/image';
import React, { RefObject, useRef, useState } from 'react';
import { BiCheckDouble } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import {
	useCheckAnswerMutation,
	useQuestionsQuery,
	useSingleQuizQuery,
} from '../../../../generated/graphql';
import { MainContainer } from '../../../../layouts/MainContainer';
import { SubContainer } from '../../../../layouts/SubContainer';
import { setAnswerByUser, setQuizResult } from '../../../../store/resultSlice';
import { AnswerByUserProps, QuizResultProps } from '../../../../store/type';
import { useGetIntId } from '../../../../utils/useGetIntId';
import { withApollo } from '../../../../utils/withApollo';

interface TakeQuizProps {}

const TakeQuiz: React.FC<TakeQuizProps> = ({}) => {
	const router = useRouter();
	const dispatch = useDispatch();
	const questionsRefs: RefObject<any> = useRef([]);

	const quizId = useGetIntId();

	const [usersAnswer, setUsersAnswer] = useState<AnswerByUserProps[]>([]);
	const [checking, setChecking] = useState(false);

	const { data, loading } = useQuestionsQuery({
		variables: {
			quiz_id: quizId,
			withAnswer: false,
		},
	});

	const { data: quizdata, loading: quizloading } = useSingleQuizQuery({
		variables: {
			quiz_id: quizId,
		},
	});

	const [checkAnswer, { loading: checkloading }] = useCheckAnswerMutation();

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
				<title>{`Take | ${quizdata?.quiz?.title}`}</title>
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
			</Head>
			<SubContainer position='relative'>
				<Flex justify='space-between'>
					<Box ml='10px'>
						<Heading as='h2' fontSize='24px'>
							{quizdata?.quiz?.title}
						</Heading>
						<Flex mt='2px'>
							<Avatar
								size='xs'
								src={quizdata?.quiz?.author.avatar ?? ''}
								name={quizdata?.quiz?.author.profile.name ?? ''}
							/>
							<Text ml='10px' as='p'>
								{quizdata?.quiz?.author.profile.name}
							</Text>
						</Flex>
					</Box>
					{quizdata?.quiz?.is_taken && (
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
											_hover={{
												bg: !isAnswered
													? useColorModeValue(
															'gray.200',
															'rgba(255, 255, 255, 0.04)'
													  )
													: '',
											}}
											onClick={() =>
												selectAnswer(question.question_id, choice.choice_id, i)
											}
											bg={
												isAnswered
													? useColorModeValue(
															'gray.300',
															'rgba(255, 255, 255, 0.06)'
													  )
													: ''
											}
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
						isLoading={checkloading || checking}
						loadingText='Checking...'
						onClick={async () => {
							await checkAnswer({
								variables: {
									data: {
										quiz_id: quizId,
										users_answer: usersAnswer,
									},
								},
								update: (cache, { data }) => {
									const id = quizId;

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

									dispatch(setAnswerByUser(usersAnswer));
									dispatch(
										setQuizResult(data!.checkAnswer! as QuizResultProps)
									);
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
