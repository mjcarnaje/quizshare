import {
	AspectRatio,
	Box,
	Button,
	Center,
	Flex,
	Skeleton,
	Slider,
	SliderTrack,
	SliderFilledTrack,
	SliderThumb,
	useColorModeValue,
	VStack,
	Text,
	Badge,
} from '@chakra-ui/react';
import Head from 'next/head';
import Image from 'next/image';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { MdPhotoSizeSelectActual } from 'react-icons/md';
import { FaPercentage } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import TextareaAutosize from 'react-textarea-autosize';
import QuizInputUI from '../../../components/custom-inputs/QuizInputUI';
import { QuizInput } from '../../../generated/graphql';
import { MainContainer } from '../../../layouts/MainContainer';
import { QuizContainer } from '../../../layouts/QuizContainer';
import { SubContainer } from '../../../layouts/SubContainer';
import { setSettings } from '../../../store/quizSlice';
import { SettingsInput, State } from '../../../store/type';
import { uploadCloudinaryImage } from '../../../utils/uploadImage';
import { withApollo } from '../../../utils/withApollo';

const Result: React.FC = () => {
	const dispatch = useDispatch();

	const { title, description, quiz_photo } = useSelector(
		(state: State) => state.quiz
	);

	const [image, setImage] = useState<string | 'loading'>();
	const [percentage, setPercentage] = useState<number>(30);

	const { register, handleSubmit, errors } = useForm<QuizInput>({
		defaultValues: { title, description, quiz_photo },
	});

	const onSubmit = (data: SettingsInput) => {
		dispatch(
			setSettings({
				title: data.title,
				description: data.description,
				quiz_photo: data.quiz_photo,
			})
		);
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
			<QuizContainer type='create'>
				<SubContainer w='764px' my='0'>
					<form onSubmit={handleSubmit(onSubmit)}>
						{image && (
							<input
								type='hidden'
								name='quiz_photo'
								ref={register()}
								defaultValue={image}
							/>
						)}
						<VStack spacing='16px'>
							<QuizInputUI
								register={register({ required: true, minLength: 6 })}
								name='Result Title'
								input='title'
								placeholder='Type the title here...'
								fontSize='20px'
								size='lg'
								error={errors.title}
								errorMessage={
									errors.title?.message || 'Title is required field.'
								}
							/>
							<Box w='full'>
								{image ? (
									<Skeleton isLoaded={image !== 'loading'}>
										<Box borderRadius='8px' overflow='hidden' bg='gray.100'>
											<AspectRatio maxW='600px' ratio={16 / 9}>
												{image !== 'loading' ? (
													<Image
														src={image}
														alt='Thumbnail of Quiz'
														layout='fill'
													/>
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
									Result Minimum Percent Correct -{' '}
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
										<Box color='purple.500' as={FaPercentage} />
									</SliderThumb>
								</Slider>
							</Box>

							<QuizInputUI
								register={register({ required: true })}
								name='Result Description'
								input='description'
								placeholder='Type the description here..'
								as={TextareaAutosize}
								resize='none'
								overflow='hidden'
								minH='100px'
								py='5px'
								error={errors.description}
								errorMessage={
									errors.description?.message ||
									'Description is required field.'
								}
							/>
						</VStack>

						<Flex w='full' mt='20px' justify='flex-end'>
							<Button colorScheme='purple' type='submit' px='20px' ml='10px'>
								Add result
							</Button>
						</Flex>
					</form>
				</SubContainer>
			</QuizContainer>
		</MainContainer>
	);
};

export default withApollo({ ssr: true })(Result);
