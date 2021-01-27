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
import { QuizResultContext, QuizResultType } from '../../../../store/context';
import { withApollo } from '../../../../utils/withApollo';

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
	const myRefs: RefObject<any> = useRef([]);

	const [usersAnswer, setUsersAnswer] = useState<UsersAnswerProps[]>([]);

	const { setQuizResult, setAnswerByUser } = useContext(
		QuizResultContext
	) as QuizResultType;

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

	const [checkAnswer, { loading: checking }] = useCheckAnswerMutation();

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
		if (
			data?.questions?.length !== undefined &&
			data?.questions?.length > i + 1
		) {
			myRefs.current[i + 1].scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<MainContainer>
			<SubContainer>
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
				<VStack spacing='48px' my='20px'>
					{data?.questions?.map((question, i) => (
						<Box
							key={question.question_id}
							ref={(el) => (myRefs.current[i] = el)}
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
						isLoading={checking}
						onClick={async () => {
							await checkAnswer({
								variables: {
									data: {
										quiz_id: parseInt(router.query.id as string),
										users_answer: usersAnswer,
									},
								},
								update: (_, { data }) => {
									router.push(
										`/quiz/take/${parseInt(router.query.id as string)}/result`
									);
									setAnswerByUser(usersAnswer);
									setQuizResult(data?.checkAnswer);
									setUsersAnswer([]);
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
