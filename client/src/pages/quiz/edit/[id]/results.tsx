import { ChevronDownIcon, DeleteIcon, EditIcon } from '@chakra-ui/icons';
import {
	AspectRatio,
	Badge,
	Box,
	Button,
	Center,
	Flex,
	Heading,
	IconButton,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	Skeleton,
	Slider,
	SliderFilledTrack,
	SliderThumb,
	SliderTrack,
	Text,
	useColorModeValue,
	useToast,
	VStack,
} from '@chakra-ui/react';
import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import Image from 'next/image';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { MdGraphicEq, MdPhotoSizeSelectActual } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import TextareaAutosize from 'react-textarea-autosize';
import { v4 as uuid } from 'uuid';
import QuizInputUI from '../../../../components/custom-inputs/QuizInputUI';
import { MainContainer } from '../../../../layouts/MainContainer';
import { QuizContainer } from '../../../../layouts/QuizContainer';
import { SubContainer } from '../../../../layouts/SubContainer';
import {
	createResult,
	deleteResult,
	updateResult,
} from '../../../../store/quizSlice';
import { State } from '../../../../store/type';
import { uploadCloudinaryImage } from '../../../../utils/uploadImage';
import { withApollo } from '../../../../utils/withApollo';

const Score: React.FC = () => {
	const router = useRouter();
	const toast = useToast();
	const dispatch = useDispatch();
	const results = useSelector((state: State) => state.quiz.results);

	const [image, setImage] = useState<string | 'loading'>();
	const [percentage, setPercentage] = useState<number>(0);
	const [editMode, setEditMode] = useState<boolean>(false);
	const [currentResultIdx, setCurrentResultIdx] = useState<string | null>();

	const { register, handleSubmit, errors, reset } = useForm();

	const clear = () => {
		reset({ title: '', description: '' });
		setPercentage(0);
		setImage(undefined);
	};

	const create = (data: { title: string; description: string }) => {
		let percentIsTaken = results.find(
			(result) => result.minimum_percentage === percentage
		);

		if (percentIsTaken) {
			toast({
				description: 'Percentage is already taken',
				status: 'error',
				duration: 5000,
				isClosable: true,
				position: 'bottom-right',
			});
		} else {
			dispatch(
				createResult({
					...data,
					result_id: uuid(),
					result_photo: image,
					minimum_percentage: percentage,
				})
			);
			clear();
		}
	};

	const edit = (id: string) => {
		setEditMode(true);
		setCurrentResultIdx(id);

		const toEdit = results.find((result) => result.result_id === id);

		if (toEdit) {
			reset({ title: toEdit.title, description: toEdit.description });
			setImage(toEdit.result_photo);
			setPercentage(toEdit.minimum_percentage);
		}
	};

	const update = (data: { title: string; description: string }) => {
		if (currentResultIdx && editMode) {
			dispatch(
				updateResult({
					id: currentResultIdx,
					data: {
						...data,
						result_id: currentResultIdx,
						result_photo: image,
						minimum_percentage: percentage,
					},
				})
			);

			clear();
			setEditMode(false);
			setCurrentResultIdx(null);
		}
	};

	const uploadImage = () => {
		uploadCloudinaryImage(
			(error: any, photos: { event: string; info: { url: string } }) => {
				if (!error && photos.event === 'queues-start') {
					setImage('loading');
				} else if (!error && photos.event === 'success') {
					setImage(photos.info.url);
				} else if (error) {
					console.error(error);
				}
			}
		);
	};

	return (
		<MainContainer py='40px'>
			<Head>
				<title>Create Quiz</title>
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
			</Head>
			<QuizContainer type='update' quizId={router.query?.id as string}>
				<SubContainer my='0'>
					<form onSubmit={handleSubmit(editMode ? update : create)}>
						{image && (
							<input
								type='hidden'
								name='result_photo'
								value={image}
								ref={register()}
							/>
						)}
						<VStack spacing='16px'>
							<QuizInputUI
								register={register({
									required: 'Title is required',
									minLength: {
										value: 3,
										message: 'Title required more than 3 characters',
									},
									maxLength: {
										value: 60,
										message: 'Title must not exceed more than 60 characters',
									},
								})}
								name='Result Title'
								input='title'
								placeholder='Type the title here...'
								fontSize='20px'
								size='lg'
								error={errors.title}
								errorMessage={errors.title?.message}
							/>
							<Box w='full'>
								{image ? (
									<Skeleton isLoaded={image !== 'loading'}>
										<Box
											borderRadius='8px'
											maxW='500px'
											mx='auto'
											overflow='hidden'
											bg='gray.100'
										>
											<AspectRatio ratio={16 / 9}>
												{image !== 'loading' ? (
													<Image src={image} alt='result image' layout='fill' />
												) : (
													<Box></Box>
												)}
											</AspectRatio>
										</Box>
									</Skeleton>
								) : (
									<AspectRatio
										ratio={16 / 9}
										maxW='500px'
										bg={useColorModeValue(
											'gray.50',
											'rgba(255, 255, 255, 0.04)'
										)}
										mx='auto'
										display='flex'
										justifyContent='center'
										alignItems='center'
									>
										<Button
											leftIcon={<MdPhotoSizeSelectActual />}
											colorScheme='gray'
											variant='ghost'
											onClick={uploadImage}
										>
											Upload result image
										</Button>
									</AspectRatio>
								)}
							</Box>
							{image && (
								<Center>
									<Button
										leftIcon={<MdPhotoSizeSelectActual />}
										colorScheme='gray'
										onClick={uploadImage}
									>
										Change Thumbnail
									</Button>
								</Center>
							)}
							<Box w='full'>
								<Text
									fontFamily='inter'
									textTransform='uppercase'
									fontWeight='400'
									fontSize='14px'
									color={useColorModeValue('#000', '#fff')}
									w='full'
									textAlign='left'
								>
									Score Minimum Percent Correct -{' '}
									<Badge colorScheme='purple'>{percentage}%</Badge>
								</Text>
								<Slider
									aria-label='percentage'
									defaultValue={percentage}
									onChangeEnd={(val) => setPercentage(val)}
								>
									<SliderTrack bg='purple.100'>
										<SliderFilledTrack bg='purple.500' />
									</SliderTrack>
									<SliderThumb boxSize={6}>
										<Box color='purple.500' as={MdGraphicEq} />
									</SliderThumb>
								</Slider>
							</Box>

							<QuizInputUI
								register={register({
									required: 'Description is required',
									minLength: {
										value: 20,
										message: 'Description required more than 20 characters',
									},
								})}
								name='Result Description'
								input='description'
								placeholder='Type the description here..'
								as={TextareaAutosize}
								resize='none'
								overflow='hidden'
								minH='100px'
								py='5px'
								error={errors.description}
								errorMessage={errors.description?.message}
							/>
						</VStack>

						<Flex w='full' mt='20px' justify='flex-end'>
							{editMode ? (
								<>
									<Button
										colorScheme='purple'
										type='submit'
										px='20px'
										ml='10px'
										variant='ghost'
									>
										Cancel
									</Button>
									<Button
										colorScheme='purple'
										type='submit'
										px='20px'
										ml='10px'
									>
										Save Changes
									</Button>
								</>
							) : (
								<Button colorScheme='purple' type='submit' px='20px' ml='10px'>
									Add Result
								</Button>
							)}
						</Flex>
					</form>
				</SubContainer>

				{results.map((result) => (
					<SubContainer
						my='20px'
						boxShadow='sm'
						textAlign='center'
						position='relative'
					>
						<Box position='absolute' right='5px' top='5px'>
							<Menu>
								<MenuButton
									as={IconButton}
									aria-label='Options'
									icon={<ChevronDownIcon />}
									size='xs'
									variant='ghost'
								/>
								<MenuList>
									<MenuItem
										icon={<DeleteIcon />}
										onClick={() => dispatch(deleteResult(result.result_id))}
									>
										Delete
									</MenuItem>
									<MenuItem
										icon={<EditIcon />}
										onClick={() => edit(result.result_id)}
									>
										Edit
									</MenuItem>
								</MenuList>
							</Menu>
						</Box>

						<Heading as='h2' fontSize='24px'>
							{result.title}
						</Heading>
						<Badge colorScheme='purple' size='lg' fontSize='14px' my='5px'>
							{result.minimum_percentage}%
						</Badge>
						{result.result_photo && (
							<Box
								overflow='hidden'
								maxW='500px'
								borderRadius='md'
								bg='gray.100'
								my='5px'
								mx='auto'
							>
								<AspectRatio w='full' ratio={16 / 9}>
									<Image
										alt='result image'
										layout='fill'
										src={result.result_photo}
									/>
								</AspectRatio>
							</Box>
						)}
						<Text mt='20px' wordBreak='break-word' whiteSpace='pre-line'>
							{result.description}
						</Text>
					</SubContainer>
				))}
			</QuizContainer>
		</MainContainer>
	);
};

export default withApollo({ ssr: true })(Score);
