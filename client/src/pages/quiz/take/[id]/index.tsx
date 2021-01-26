import {
	Avatar,
	Button,
	Container as ChakraContainter,
	Heading,
	Flex,
	Text,
	Box,
	VStack,
	AspectRatio,
} from '@chakra-ui/react';
import { useRouter } from 'next/dist/client/router';
import Image from 'next/image';
import React, { useState, useRef, RefObject } from 'react';
import {
	useQuestionsQuery,
	useSingleQuizQuery,
} from '../../../../generated/graphql';
import { MainContainer } from '../../../../layouts/MainContainer';
import { withApollo } from '../../../../utils/withApollo';
import { Grid } from '@chakra-ui/react';
import { useCheckAnswerMutation } from '../../../../generated/graphql';

interface TakeQuizProps {}
type UsersAnswerProps = {
	question_id: string;
	choice_id: string;
};

const TakeQuiz: React.FC<TakeQuizProps> = ({}) => {
	const router = useRouter();
	const myRefs: RefObject<any> = useRef([]);

	const [show, setShow] = useState(false);
	const [usersAnswer, setUsersAnswer] = useState<UsersAnswerProps[]>([]);

	const { data, loading } = useQuestionsQuery({
		variables: {
			quiz_id: parseInt(router.query.id as string),
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
			<ChakraContainter
				maxW={['100%', '100%', '860px']}
				boxShadow='md'
				borderRadius='md'
				my='42px'
				p='24px'
				borderWidth='1px'
			>
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
											_hover={{ bg: !isAnswered ? 'gray.50' : '' }}
											onClick={() =>
												selectAnswer(question.question_id, choice.choice_id, i)
											}
											bg={isAnswered ? 'gray.300' : ''}
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
											{choice.value}
										</Box>
									);
								})}
							</Grid>
						</Box>
					))}
				</VStack>

				{!quizdata && quizloading && <Text>quiz loading...</Text>}
				{!data && loading && <Text>questoins loading...</Text>}

				<Box w='full' textAlign='right'>
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
								update: () => {
									setUsersAnswer([]);
								},
							});
						}}
					>
						Check Answer
					</Button>
				</Box>
			</ChakraContainter>
			<Button onClick={() => setShow(!show)} size='sm'>
				toggle
			</Button>
			{show && data && <pre>{JSON.stringify(data.questions, null, 2)}</pre>}
		</MainContainer>
	);
};

export default withApollo({ ssr: true })(TakeQuiz);
