import {
	Box,
	Button,
	Flex,
	IconButton,
	Radio,
	RadioGroup,
	SimpleGrid,
	Spacer,
	Tooltip,
} from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { Controller, useFieldArray } from 'react-hook-form';
import { BsPlusSquare } from 'react-icons/bs';
import { MdDelete, MdPhotoSizeSelectActual } from 'react-icons/md';
import TextareaAutosize from 'react-textarea-autosize';
import { v4 as uuid } from 'uuid';
import { ChoiceInput } from '../../generated/graphql';
import { useUploadForArrayPhotos } from '../../utils/useUploadPhoto';
import QuizInputUI from '../custom-inputs/QuizInputUI';
import ImageHolder from '../ImageHolder';

declare global {
	interface Window {
		cloudinary: any;
	}
}
interface ChoiceArrayProps {
	questionIndex: number;
	answer: string;
	control: any;
	register: any;
	autoAdd: boolean;
	addChoice: boolean;
	setAddChoice: (a: boolean) => void;
	errors: any;
}

const ChoiceArray: React.FC<ChoiceArrayProps> = ({
	questionIndex,
	answer,
	control,
	register,
	autoAdd,
	addChoice: AC,
	setAddChoice,
	errors,
}) => {
	const { images, uploadImage } = useUploadForArrayPhotos();

	const { fields, append, remove } = useFieldArray<ChoiceInput>({
		control,
		name: `questions[${questionIndex}].choices`,
	});

	const addChoice = (shouldFocus: boolean = true) => {
		append({ choice_id: uuid(), value: '', choice_photo: '' }, shouldFocus);
	};

	useEffect(() => {
		if (autoAdd || AC) {
			addChoice(false);
			addChoice(false);
		}
		setAddChoice(false);
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
				defaultValue={answer}
				render={({ onChange, onBlur, value }) => (
					<RadioGroup
						onChange={onChange}
						onBlur={onBlur}
						value={value}
						defaultValue={answer}
					>
						<SimpleGrid my='10px' p='2px' columns={[1, 2]} spacing='10px'>
							{fields.map((choice, i) => {
								const imgIndex = images.findIndex(
									(i) => i.item_id === choice.choice_id
								);

								const url = images[imgIndex]?.url || choice.choice_photo!;
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
											{imgIndex !== -1 && (
												<input
													type='hidden'
													name={`questions[${questionIndex}].choices[${i}].choice_photo`}
													value={url}
													ref={register()}
												/>
											)}

											<ImageHolder image={url} ratio={16 / 9} />

											<QuizInputUI
												register={register({ required: true })}
												input={`questions[${questionIndex}].choices[${i}].value`}
												as={TextareaAutosize}
												placeholder='Type your answer here...'
												resize='none'
												overflow='hidden'
												defaultValue={choice.value}
												error={
													errors?.questions?.[questionIndex]?.choices?.[i]
														?.value
												}
												py='7px'
												errorMessage={`Choice ${
													i + 1
												} is required field: type or remove it.😉`}
												isChoiceInput
											/>
											<Flex pos='absolute' bottom='2px' left='4px' right='2px'>
												<Radio
													value={choice.choice_id}
													colorScheme='green'
													isInvalid={
														!!errors.questions?.[questionIndex]?.answer
													}
												>
													correct answer
												</Radio>
												<Spacer />
												<Tooltip
													hasArrow
													label={
														choice?.choice_photo
															? 'Replace choice photo'
															: 'Add choice photo'
													}
												>
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
