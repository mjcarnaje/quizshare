import {
	Alert,
	AlertIcon,
	AspectRatio,
	Box,
	Button,
	Flex,
	IconButton,
	Skeleton,
	Switch,
	Text,
	Tooltip,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { Controller, useFieldArray, useFormContext } from 'react-hook-form';
import { MdDelete, MdPhotoSizeSelectActual } from 'react-icons/md';
import TextareaAutosize from 'react-textarea-autosize';
import { v4 as uuid } from 'uuid';
import { QuestionInput, QuizInput } from '../../generated/graphql';
import ChoiceArray from './ChoiceArray';
import QuizInputUI from '../custom-inputs/QuizInputUI';
import Image from 'next/image';
import { uploadCloudinaryImage } from '../../utils/uploadImage';
import { HStack } from '@chakra-ui/react';
import { useRouter } from 'next/dist/client/router';

interface QuestionArrayProps {
	autoAddChoiceInput?: boolean;
	setAutoAddChoiceInput?: any;
}

const QuestionArray: React.FC<QuestionArrayProps> = ({
	autoAddChoiceInput,
	setAutoAddChoiceInput,
}) => {
	const router = useRouter();

	const [images, setImages] = useState<
		{ question_id: string; url: string | 'loading' }[]
	>([]);
	const { control, register, errors, watch } = useFormContext<QuizInput>();
	const { fields, append, remove } = useFieldArray<QuestionInput>({
		control,
		name: 'questions',
	});

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

	const addQuestionForEdit = (callback: Function) => {
		setAutoAddChoiceInput(true);
		callback();
	};

	useEffect(() => {
		if (router.pathname.includes('edit')) return;
		addQuestion(false);
	}, []);

	return (
		<Box w='full'>
			{fields.map((question, i) => {
				const imgIndex = images.findIndex(
					(i) => i.question_id === question.question_id
				);
				const url = images[imgIndex]?.url || question.question_photo!;

				const withExplanation = watch(`questions[${i}].with_explanation`);
				const withHint = watch(`questions[${i}].with_hint`);

				return (
					<Box
						key={question.id}
						borderWidth='1px'
						p='12px'
						borderRadius='8px'
						my='20px'
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
									<Box borderRadius='8px' overflow='hidden'>
										<AspectRatio maxW='full' ratio={16 / 9}>
											<Image src={url} alt={`Quiz ${i} photo`} layout='fill' />
										</AspectRatio>
									</Box>
								</Skeleton>
							</Box>
						)}

						<QuizInputUI
							register={register({ required: true })}
							input={`questions[${i}].question`}
							as={TextareaAutosize}
							placeholder='Type the question here..'
							resize='none'
							overflow='hidden'
							py='7px'
							error={errors.questions?.[i]?.question}
							errorMessage={`Question ${i + 1} is required field`}
							defaultValue={question.question}
						/>
						<ChoiceArray
							questionIndex={i}
							answer={question.answer!}
							autoAddChoiceInput={autoAddChoiceInput}
						/>
						{withExplanation && (
							<QuizInputUI
								register={register({ required: true })}
								input={`questions[${i}].explanation`}
								as={TextareaAutosize}
								placeholder='Type the explanation here..'
								resize='none'
								overflow='hidden'
								py='7px'
								error={errors.questions?.[i]?.explanation}
								errorMessage={`Type the explanation or you can just turn it off`}
								defaultValue={question.explanation!}
							/>
						)}
						{withHint && (
							<QuizInputUI
								register={register({ required: true })}
								input={`questions[${i}].hint`}
								as={TextareaAutosize}
								placeholder='Type the hint here..'
								resize='none'
								overflow='hidden'
								py='7px'
								error={errors.questions?.[i]?.hint}
								errorMessage={`Type the hint or you can just turn it off`}
								defaultValue={question.hint!}
							/>
						)}
						{errors.questions?.[i]?.answer && (
							<Alert status='error' borderRadius='5px'>
								<AlertIcon />
								Please select the correct answer to this question
							</Alert>
						)}
					</Box>
				);
			})}
			<Button
				colorScheme='purple'
				size='lg'
				w='full'
				onClick={() => {
					if (router.pathname.includes('edit') && !autoAddChoiceInput) {
						return addQuestionForEdit(addQuestion);
					}
					addQuestion();
				}}
			>
				Add Question
			</Button>
		</Box>
	);
};

export default QuestionArray;
