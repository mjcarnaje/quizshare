import {
	AspectRatio,
	Box,
	Button,
	Flex,
	IconButton,
	Skeleton,
	Text,
	Tooltip,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { MdDelete, MdPhotoSizeSelectActual } from 'react-icons/md';
import TextareaAutosize from 'react-textarea-autosize';
import { v4 as uuid } from 'uuid';
import { QuestionInput, QuizInput } from '../generated/graphql';
import ChoiceArray from './ChoiceArray';
import CustomQuizInput from './CustomQuizInput';
import { Image } from 'cloudinary-react';
import { uploadCloudinaryImage } from '../utils/uploadImage';

interface QuestionArrayProps {}

const QuestionArray: React.FC<QuestionArrayProps> = ({}) => {
	const [images, setImages] = useState<
		{ question_id: string; public_id: string | 'loading' }[]
	>([]);
	const { control, register, errors } = useFormContext<QuizInput>();
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
			(error: any, photos: { event: string; info: { public_id: any } }) => {
				const imagesThatAreNotChanged = images.filter(
					(img) => img.question_id !== question_id
				);
				if (!error && photos.event === 'queues-start') {
					setImages([
						...imagesThatAreNotChanged,
						{ question_id: question_id, public_id: 'loading' },
					]);
				} else if (!error && photos.event === 'success') {
					setImages([
						...imagesThatAreNotChanged,
						{
							question_id: question_id,
							public_id: photos.info.public_id,
						},
					]);
				} else if (error) {
					console.error(error);
				}
			}
		);
	};

	useEffect(() => {
		addQuestion(false);
	}, []);

	return (
		<Box w='full'>
			{fields.map((question, i) => {
				const img = images.findIndex(
					(i) => i.question_id === question.question_id
				);
				const publicId = images[img]?.public_id || question.question_photo!;
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
						{img !== -1 && (
							<input
								type='hidden'
								name={`questions[${i}].question_photo`}
								value={publicId}
								ref={register()}
							/>
						)}
						<Flex align='center' justify='space-between' pb='5px'>
							<Text fontSize='13px'>{`QUESTION ${i + 1}`}</Text>
							<Box>
								<Tooltip hasArrow label='Add question photo'>
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
							</Box>
						</Flex>

						{publicId && (
							<Box p='4px' mb='2px'>
								<Skeleton isLoaded={publicId !== 'loading'}>
									<Box borderRadius='8px' overflow='hidden'>
										<AspectRatio maxW='full' ratio={16 / 9}>
											<Image publicId={publicId} />
										</AspectRatio>
									</Box>
								</Skeleton>
							</Box>
						)}

						<CustomQuizInput
							register={register({ required: true })}
							input={`questions[${i}].question`}
							as={TextareaAutosize}
							placeholder='Type the question here..'
							resize='none'
							overflow='hidden'
							py='7px'
							error={errors.questions?.[i]?.question}
							errorMessage={`Question ${i + 1} is required field`}
						/>
						<ChoiceArray questionIndex={i} answer={question.answer!} />
					</Box>
				);
			})}
			<Button
				colorScheme='purple'
				size='lg'
				w='full'
				onClick={() => addQuestion()}
			>
				Add Question
			</Button>
		</Box>
	);
};

export default QuestionArray;
