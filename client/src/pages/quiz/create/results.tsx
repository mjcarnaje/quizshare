import {
	Box,
	Button,
	Flex,
	HStack,
	IconButton,
	Slider,
	SliderFilledTrack,
	SliderThumb,
	SliderTrack,
	Tag,
	Tooltip,
	useToast,
} from '@chakra-ui/react';
import React from 'react';
import { Controller, useFieldArray, useForm } from 'react-hook-form';
import { BsPlusSquareFill } from 'react-icons/bs';
import { MdDelete, MdGraphicEq, MdPhotoSizeSelectActual } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import TextareaAutosize from 'react-textarea-autosize';
import { v4 as uuid } from 'uuid';
import QuizInputUI from '../../../components/custom-inputs/QuizInputUI';
import ImageHolder from '../../../components/ImageHolder';
import Meta from '../../../components/Meta';
import { MainContainer } from '../../../layouts/MainContainer';
import { QuizContainer } from '../../../layouts/QuizContainer';
import { SubContainer } from '../../../layouts/SubContainer';
import { setResults } from '../../../store/quizSlice';
import { ResultProps, State } from '../../../store/type';
import { useUploadForArrayPhotos } from '../../../utils/useUploadPhoto';
import { withApollo } from '../../../utils/withApollo';

const Results: React.FC = () => {
	const toast = useToast();
	const dispatch = useDispatch();

	const results = useSelector((state: State) => state.quiz.results);

	const { images, uploadImage } = useUploadForArrayPhotos();

	const { control, register, handleSubmit, errors } = useForm({
		defaultValues: { results },
	});

	const { fields, append, remove } = useFieldArray({
		control,
		name: 'results',
	});

	const onSubmit = (data: { results: ResultProps[] }) => {
		let percentIsTaken =
			new Set(data.results.map((result) => result['minimum_percentage']))
				.size !== data.results.length;

		if (percentIsTaken) {
			toast({
				description: 'There is a duplicate percentage.',
				status: 'error',
				duration: 5000,
				isClosable: true,
				position: 'bottom-right',
			});
		} else {
			dispatch(setResults(data.results));
		}
	};

	const addResult = (shouldFocus: boolean = true) => {
		append(
			{
				result_id: uuid(),
				title: '',
				result_photo: '',
				minimum_percentage: 0,
				description: '',
			},
			shouldFocus
		);
	};

	return (
		<MainContainer py='40px' height='100.1vh'>
			<Meta title='Create Quiz' />

			<QuizContainer type='create'>
				<SubContainer w='764px' my='0'>
					<form onSubmit={handleSubmit(onSubmit)}>
						<Box w='full'>
							{fields.map((result, i) => {
								const imgIndex = images.findIndex(
									(i) => i.item_id === result.result_id
								);
								const url = images[imgIndex]?.url || result.result_photo!;

								return (
									<Box
										key={result.id}
										borderWidth='1px'
										p='12px'
										borderRadius='8px'
										mb='20px'
										_notFirst={{ marginTop: '20px' }}
										boxShadow='sm'
									>
										<input
											type='hidden'
											name={`results[${i}].result_id`}
											defaultValue={result.result_id}
											ref={register()}
										/>
										{imgIndex !== -1 && (
											<input
												type='hidden'
												name={`results[${i}].result_photo`}
												value={url}
												ref={register()}
											/>
										)}
										<Controller
											name={`results[${i}].minimum_percentage`}
											control={control}
											defaultValue={result?.minimum_percentage ?? 30}
											rules={{ required: 'Percentage is required' }}
											render={({ value, onChange }) => (
												<Box>
													<Flex align='center' justify='space-between'>
														<Tag>{value}%</Tag>
														<HStack spacing='10px'>
															<Tooltip
																hasArrow
																label={
																	result?.result_photo
																		? 'Replace result photo'
																		: 'Add result photo'
																}
															>
																<IconButton
																	isRound
																	icon={<MdPhotoSizeSelectActual />}
																	size='sm'
																	variant='ghost'
																	color='gray.400'
																	fontSize='15px'
																	onClick={() => uploadImage(result.result_id!)}
																	aria-label='upload result_photo button'
																/>
															</Tooltip>
															<Tooltip hasArrow label='Remove result'>
																<IconButton
																	isRound
																	icon={<MdDelete />}
																	size='sm'
																	variant='ghost'
																	color='gray.400'
																	fontSize='15px'
																	onClick={() => remove(i)}
																	isDisabled={
																		fields.length === 1 ? true : false
																	}
																	aria-label='Remove result'
																/>
															</Tooltip>
														</HStack>
													</Flex>
													<Slider
														aria-label='slider-ex-4'
														defaultValue={value}
														onChange={(val) => onChange(val)}
													>
														<SliderTrack bg='red.100'>
															<SliderFilledTrack bg='tomato' />
														</SliderTrack>
														<SliderThumb boxSize={6}>
															<Box color='tomato' as={MdGraphicEq} />
														</SliderThumb>
													</Slider>
												</Box>
											)} // props contains: onChange, onBlur and value
										/>

										<ImageHolder image={url} ratio={16 / 9} />

										<QuizInputUI
											register={register({
												required: `Result ${i + 1}: Title is a required field`,
												minLength: {
													value: 6,
													message: `Result ${
														i + 1
													} required 6 characters minimum`,
												},
											})}
											input={`results[${i}].title`}
											as={TextareaAutosize}
											placeholder='Type the title here..'
											resize='none'
											overflow='hidden'
											py='7px'
											error={errors?.results?.[i]?.title}
											errorMessage={errors?.results?.[i]?.title?.message}
											defaultValue={result.title}
										/>
										<QuizInputUI
											register={register({
												required: `Result ${
													i + 1
												}: Description is a required field`,
												minLength: {
													value: 20,
													message: `Result ${
														i + 1
													} required 20 characters minimum`,
												},
											})}
											input={`results[${i}].description`}
											as={TextareaAutosize}
											placeholder='Type the description here..'
											resize='none'
											overflow='hidden'
											minH='100px'
											py='7px'
											error={errors?.results?.[i]?.description}
											errorMessage={errors?.results?.[i]?.description?.message}
											defaultValue={result.description!}
										/>
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
										addResult();
									}}
								>
									Add Result
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

export default withApollo({ ssr: true })(Results);
