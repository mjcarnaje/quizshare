import {
	AspectRatio,
	Box,
	Button,
	Flex,
	HStack,
	IconButton,
	Skeleton,
	Switch,
	Text,
	Tooltip,
} from '@chakra-ui/react';
import Head from 'next/head';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { Controller, useFieldArray, useForm } from 'react-hook-form';
import { BsPlusSquareFill } from 'react-icons/bs';
import { MdDelete, MdPhotoSizeSelectActual } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import TextareaAutosize from 'react-textarea-autosize';
import { v4 as uuid } from 'uuid';
import ChoiceArray from '../../../components/create-update-quiz/ChoiceArray';
import QuizInputUI from '../../../components/custom-inputs/QuizInputUI';
import { QuestionInput } from '../../../generated/graphql';
import { MainContainer } from '../../../layouts/MainContainer';
import { QuizContainer } from '../../../layouts/QuizContainer';
import { SubContainer } from '../../../layouts/SubContainer';
import { setQuestions } from '../../../store/quizSlice';
import { State } from '../../../store/type';
import { uploadCloudinaryImage } from '../../../utils/uploadImage';
import { withApollo } from '../../../utils/withApollo';

const Questions: React.FC = () => {
	const dispatch = useDispatch();

	const questions = useSelector((state: State) => state.quiz.questions);

	const [addChoice, setAddChoice] = useState(false);
	const [images, setImages] = useState<
		{ question_id: string; url: string | 'loading' }[]
	>([]);

	const { control, register, watch, handleSubmit, errors } = useForm({
		defaultValues: { questions },
	});

	const { fields, append, remove } = useFieldArray({
		control,
		name: 'questions',
	});

	const onSubmit = (data: { questions: QuestionInput[] }) => {
		dispatch(setQuestions(data.questions));
	};

	const addQuestion = (shouldFocus: boolean = true) => {
		append(
			{
				question_id: uuid(),
				question: '',
				choices: [],
				answer: '',
				with_explanation: false,
				explanation: '',
				with_hint: false,
				hint: '',
			},
			shouldFocus
		);
		setAddChoice(true);
	};

	const uploadImage = (question_id: string) => {
		uploadCloudinaryImage(
			(error: any, photos: { event: string; info: { url: any } }) => {
				const imagesThatAreNotChanged = images.filter(
					(img) => img.question_id !== question_id
				);
				if (!error && photos.event === 'queues-start') {
					setImages([
						...imagesThatAreNotChanged,
						{ question_id: question_id, url: 'loading' },
					]);
				} else if (!error && photos.event === 'success') {
					setImages([
						...imagesThatAreNotChanged,
						{
							question_id: question_id,
							url: photos.info.url,
						},
					]);
				} else if (error) {
					console.error(error);
				}
			}
		);
	};

	useEffect(() => {
		if (questions.length === 0) {
			addQuestion(false);
		}
	}, []);

	return (
		<MainContainer py='40px' height='100.1vh'>
			<Head>
				<title>Create Quiz</title>
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
			</Head>
			<QuizContainer type='create'>
				<SubContainer w='764px' my='0'>
					<form onSubmit={handleSubmit(onSubmit)}>
						<Box w='full'>
							{fields.map((question, i) => {
								const imgIndex = images.findIndex(
									(i) => i.question_id === question.question_id
								);
								const url = images[imgIndex]?.url || question.question_photo!;

								const withExplanation = watch(
									`questions[${i}].with_explanation`
								);
								const withHint = watch(`questions[${i}].with_hint`);

								return (
									<Box
										key={question.id}
										borderWidth='1px'
										p='12px'
										borderRadius='8px'
										mb='20px'
										_notFirst={{ marginTop: '20px' }}
										boxShadow='sm'
									>
										<input
											type='hidden'
											name={`questions[${i}].question_id`}
											defaultValue={question.question_id}
											ref={register()}
										/>
										{imgIndex !== -1 && (
											<input
												type='hidden'
												name={`questions[${i}].question_photo`}
												value={url}
												ref={register()}
											/>
										)}
										<Flex align='center' justify='space-between' pb='5px'>
											<Text fontSize='13px'>{`QUESTION ${i + 1}`}</Text>
											<HStack spacing='10px'>
												<Tooltip hasArrow label='Add explanation'>
													<Controller
														control={control}
														name={`questions[${i}].with_explanation`}
														defaultValue={question.with_explanation}
														render={({ onChange, value }) => {
															return (
																<Switch
																	size='sm'
																	colorScheme='purple'
																	onChange={(e) => {
																		onChange(e.target.checked);
																	}}
																	isChecked={value}
																/>
															);
														}}
													/>
												</Tooltip>
												<Tooltip hasArrow label='Add hint'>
													<Controller
														control={control}
														name={`questions[${i}].with_hint`}
														defaultValue={question.with_hint}
														render={({ onChange, value }) => {
															return (
																<Switch
																	size='sm'
																	colorScheme='purple'
																	onChange={(e) => {
																		onChange(e.target.checked);
																	}}
																	isChecked={value}
																/>
															);
														}}
													/>
												</Tooltip>
												<Tooltip
													hasArrow
													label={
														question?.question_photo
															? 'Replace question photo'
															: 'Add question photo'
													}
												>
													<IconButton
														isRound
														icon={<MdPhotoSizeSelectActual />}
														size='sm'
														variant='ghost'
														color='gray.400'
														fontSize='15px'
														onClick={() => uploadImage(question.question_id!)}
														aria-label='upload question_photo button'
													/>
												</Tooltip>
												<Tooltip hasArrow label='Remove question'>
													<IconButton
														isRound
														icon={<MdDelete />}
														size='sm'
														variant='ghost'
														color='gray.400'
														fontSize='15px'
														onClick={() => remove(i)}
														isDisabled={fields.length === 1 ? true : false}
														aria-label='Remove question'
													/>
												</Tooltip>
											</HStack>
										</Flex>

										{url && (
											<Box p='4px' mb='2px'>
												<Skeleton isLoaded={url !== 'loading'}>
													<Box
														borderRadius='8px'
														overflow='hidden'
														bg='gray.100'
													>
														<AspectRatio maxW='full' ratio={16 / 9}>
															{url !== 'loading' ? (
																<Image
																	src={url}
																	alt={`Quiz ${i} photo`}
																	layout='fill'
																/>
															) : (
																<Box></Box>
															)}
														</AspectRatio>
													</Box>
												</Skeleton>
											</Box>
										)}

										<QuizInputUI
											register={register({
												required: `Question ${i + 1} is required field`,
												minLength: {
													value: 6,
													message: `Question ${i + 1} required 6 characters`,
												},
											})}
											input={`questions[${i}].question`}
											as={TextareaAutosize}
											placeholder='Type the question here..'
											resize='none'
											overflow='hidden'
											py='7px'
											error={errors?.questions?.[i]?.question}
											errorMessage={errors?.questions?.[i]?.question?.message}
											defaultValue={question.question}
										/>
										<ChoiceArray
											questionIndex={i}
											answer={question.answer!}
											control={control}
											register={register}
											autoAdd={questions.length === 0}
											addChoice={addChoice}
											setAddChoice={setAddChoice}
											errors={errors}
										/>
										{withExplanation && (
											<QuizInputUI
												register={register({
													required:
														'Type the explanation or you can just turn it off',
												})}
												input={`questions[${i}].explanation`}
												as={TextareaAutosize}
												placeholder='Type the explanation here..'
												resize='none'
												overflow='hidden'
												py='7px'
												error={errors?.questions?.[i]?.explanation}
												errorMessage={
													errors?.questions?.[i]?.explanation?.message
												}
												defaultValue={question.explanation!}
											/>
										)}
										{withHint && (
											<QuizInputUI
												register={register({
													required: 'Type the hint or you can just turn it off',
												})}
												input={`questions[${i}].hint`}
												as={TextareaAutosize}
												placeholder='Type the hint here..'
												resize='none'
												overflow='hidden'
												py='7px'
												error={errors?.questions?.[i]?.hint}
												errorMessage={errors?.questions?.[i]?.hint?.message}
												defaultValue={question.hint!}
											/>
										)}
									</Box>
								);
							})}
							<Flex w='full' justify='flex-end'>
								<Button
									leftIcon={<BsPlusSquareFill />}
									variant='ghost'
									textAlign='right'
									colorScheme='purple'
									size='sm'
									onClick={() => {
										addQuestion();
									}}
								>
									Add Question
								</Button>
							</Flex>

							<Flex w='full' mt='20px' justify='center'>
								<Button
									colorScheme='purple'
									variant='ghost'
									type='submit'
									px='20px'
									ml='10px'
								>
									Save Changes
								</Button>
							</Flex>
						</Box>
					</form>
				</SubContainer>
			</QuizContainer>
		</MainContainer>
	);
};

export default withApollo({ ssr: true })(Questions);
