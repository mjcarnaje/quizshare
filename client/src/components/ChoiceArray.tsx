import {
	AspectRatio,
	Box,
	Button,
	Flex,
	IconButton,
	Radio,
	RadioGroup,
	SimpleGrid,
	Skeleton,
	Spacer,
	Tooltip,
} from '@chakra-ui/react';
import { Image } from 'cloudinary-react';
import React, { useEffect, useState } from 'react';
import { Controller, useFieldArray, useFormContext } from 'react-hook-form';
import { BsPlusSquare } from 'react-icons/bs';
import { MdDelete, MdPhotoSizeSelectActual } from 'react-icons/md';
import TextareaAutosize from 'react-textarea-autosize';
import { v4 as uuid } from 'uuid';
import { ChoiceInput } from '../generated/graphql';
import { uploadCloudinaryImage } from '../utils/uploadImage';
import CustomQuizInput from './CustomQuizInput';

declare global {
	interface Window {
		cloudinary: any;
	}
}
interface ChoiceArrayProps {
	questionIndex: number;
	answer: string;
}

const ChoiceArray: React.FC<ChoiceArrayProps> = ({ questionIndex, answer }) => {
	const [images, setImages] = useState<
		{ choice_id: string; public_id: string | 'loading' }[]
	>([]);

	const { control, register } = useFormContext();
	const { fields, append, remove } = useFieldArray<ChoiceInput>({
		control,
		name: `questions[${questionIndex}].choices`,
	});

	const uploadImage = (choice_id: string) => {
		uploadCloudinaryImage(
			(error: any, photos: { event: string; info: { public_id: any } }) => {
				const imagesThatAreNotChanged = images.filter(
					(img) => img.choice_id !== choice_id
				);
				if (!error && photos.event === 'queues-start') {
					setImages([
						...imagesThatAreNotChanged,
						{ choice_id: choice_id, public_id: 'loading' },
					]);
				} else if (!error && photos.event === 'success') {
					setImages([
						...imagesThatAreNotChanged,
						{
							choice_id: choice_id,
							public_id: photos.info.public_id,
						},
					]);
				} else if (error) {
					console.error(error);
				}
			}
		);
	};

	const addChoice = (shouldFocus: boolean = true) => {
		append({ choice_id: uuid(), value: '', choicePhoto: '' }, shouldFocus);
	};

	useEffect(() => {
		addChoice(false);
		addChoice(false);
	}, []);

	return (
		<Box>
			<Flex>
				<Spacer />
				<Button
					leftIcon={<BsPlusSquare />}
					colorScheme='purple'
					variant='ghost'
					size='xs'
					onClick={() => addChoice()}
				>
					Add Choice
				</Button>
			</Flex>
			<Controller
				control={control}
				name={`questions[${questionIndex}].answer`}
				rules={{ required: true }}
				render={({ onChange, onBlur, value }) => (
					<RadioGroup
						onChange={onChange}
						onBlur={onBlur}
						value={value}
						defaultValue={answer}
					>
						<SimpleGrid my='10px' p='2px' columns={2} spacing='10px'>
							{fields.map((choice, i) => {
								const img = images.findIndex(
									(i) => i.choice_id === choice.choice_id
								);

								const publicId = images[img]?.public_id || choice.choicePhoto!;
								return (
									<Box key={choice.choice_id}>
										<Box
											borderRadius='md'
											pos='relative'
											overflow='hidden'
											borderWidth='1px'
											p='4px'
										>
											<input
												type='hidden'
												name={`questions[${questionIndex}].choices[${i}].choice_id`}
												defaultValue={choice.choice_id}
												ref={register()}
											/>
											{img !== -1 && (
												<input
													type='hidden'
													name={`questions[${questionIndex}].choices[${i}].choicePhoto`}
													value={publicId}
													ref={register()}
												/>
											)}
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
												register={register}
												input={`questions[${questionIndex}].choices[${i}].value`}
												as={TextareaAutosize}
												placeholder='Type your answer here...'
												resize='none'
												overflow='hidden'
												py='7px'
												defaultValue={choice.value}
												mb='18px'
											/>
											<Flex pos='absolute' bottom='2px' left='4px' right='2px'>
												<Radio value={choice.choice_id} colorScheme='green'>
													correct answer
												</Radio>
												<Spacer />
												<Tooltip hasArrow label='Add choice photo'>
													<IconButton
														isRound
														icon={<MdPhotoSizeSelectActual />}
														size='xs'
														variant='ghost'
														color='gray.400'
														fontSize='13px'
														onClick={() => uploadImage(choice.choice_id!)}
														aria-label='upload choice_photo button'
													/>
												</Tooltip>
												<Tooltip hasArrow label='Remove choice'>
													<IconButton
														isRound
														icon={<MdDelete />}
														size='xs'
														variant='ghost'
														color='gray.400'
														fontSize='13px'
														onClick={() => remove(i)}
														isDisabled={fields.length === 1 ? true : false}
														aria-label='remove choice'
													/>
												</Tooltip>
											</Flex>
										</Box>
									</Box>
								);
							})}
						</SimpleGrid>
					</RadioGroup>
				)}
			/>
		</Box>
	);
};
export default ChoiceArray;
