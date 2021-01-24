import {
	AspectRatio,
	Box,
	Button,
	Center,
	Flex,
	Heading,
	Skeleton,
	Spacer,
	useColorModeValue,
	VStack,
} from '@chakra-ui/react';
import { Image } from 'cloudinary-react';
import { useRouter } from 'next/dist/client/router';
import NextLink from 'next/link';
import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { MdPhotoSizeSelectActual } from 'react-icons/md';
import TextareaAutosize from 'react-textarea-autosize';
import QuizInputUI from '../../components/custom-inputs/QuizInputUI';
import QuestionArray from '../../components/QuestionArray';
import { QuizInput, useCreateQuizMutation } from '../../generated/graphql';
import { uploadCloudinaryImage } from '../../utils/uploadImage';
import { withApollo } from '../../utils/withApollo';
import errorMapper from '../../utils/errorMapper';
import { MainContainer } from '../../layouts/MainContainer';

const CreateQuiz: React.FC = () => {
	const colorTitle = useColorModeValue('gray.800', 'white');
	const router = useRouter();
	const thumbnailBg = useColorModeValue('gray.50', 'rgba(255, 255, 255, 0.04)');
	const [image, setImage] = useState<string | 'loading'>();

	const [createQuiz, { loading }] = useCreateQuizMutation();

	const methods = useForm<QuizInput>();

	const { register, handleSubmit, errors, setError } = methods;

	const onSubmit = async (values: QuizInput) => {
		try {
			const { errors } = await createQuiz({
				variables: values,
				update: (cache) => {
					cache.evict({ fieldName: 'quizzes' });
				},
			});
			if (!errors) {
				router.push('/');
			}
		} catch (err) {
			errorMapper(err, setError);
		}
	};

	const uploadImage = () => {
		uploadCloudinaryImage(
			(error: any, photos: { event: string; info: { public_id: any } }) => {
				if (!error && photos.event === 'queues-start') {
					setImage('loading');
				} else if (!error && photos.event === 'success') {
					setImage(photos.info.public_id);
				} else if (error) {
					console.error(error);
				}
			}
		);
	};

	return (
		<MainContainer py='40px'>
			<Heading
				as='h1'
				fontFamily='inter'
				fontWeight='800'
				color={colorTitle}
				lineHeight='1'
				fontSize={['30px', '42px', '56px']}
				pb='40px'
				textAlign='center'
			>
				Create an interactive quiz
			</Heading>
			<Box
				maxW='764px'
				w={['auto', 'auto', '764px']}
				m='auto'
				boxShadow='md'
				p={['10px', '10px', '24px']}
				borderWidth='1px'
				borderRadius='md'
			>
				<FormProvider {...methods}>
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
							<Box w='full'>
								{image ? (
									<Skeleton isLoaded={image !== 'loading'}>
										<Box borderRadius='8px' overflow='hidden'>
											<AspectRatio maxW='full' ratio={16 / 9}>
												<Image publicId={image} />
											</AspectRatio>
										</Box>
									</Skeleton>
								) : (
									<Center h='200px' bg={thumbnailBg}>
										<Button
											leftIcon={<MdPhotoSizeSelectActual />}
											colorScheme='gray'
											variant='ghost'
											onClick={uploadImage}
										>
											Upload Thumbnail
										</Button>
									</Center>
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
							<QuizInputUI
								register={register({ required: true })}
								name='Title'
								input='title'
								placeholder='Type the title here...'
								fontSize='20px'
								size='lg'
								error={errors.title}
								errorMessage={
									errors.title?.message || 'Title is required field.'
								}
							/>
							<QuizInputUI
								register={register({ required: true })}
								name='Description'
								input='description'
								placeholder='Type the description here..'
								as={TextareaAutosize}
								resize='none'
								overflow='hidden'
								py='5px'
								error={errors.description}
								errorMessage={
									errors.description?.message ||
									'Description is required field.'
								}
							/>
						</VStack>
						<QuestionArray />
						<Flex w='full' mt='20px'>
							<Spacer />
							<NextLink href='/'>
								<Button variant='outline' colorScheme='purple' px='20px'>
									Cancel
								</Button>
							</NextLink>
							<Button
								colorScheme='purple'
								type='submit'
								px='20px'
								ml='10px'
								isLoading={loading}
							>
								Save
							</Button>
						</Flex>
					</form>
				</FormProvider>
			</Box>
		</MainContainer>
	);
};

export default withApollo({ ssr: true })(CreateQuiz);
