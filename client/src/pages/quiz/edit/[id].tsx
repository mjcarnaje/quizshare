import {
	AspectRatio,
	Box,
	Button,
	Center,
	Flex,
	Heading,
	Skeleton,
	Spacer,
	Spinner,
	useColorModeValue,
	VStack,
} from '@chakra-ui/react';
import { useRouter } from 'next/dist/client/router';
import Image from 'next/image';
import NextLink from 'next/link';
import React, { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { MdPhotoSizeSelectActual } from 'react-icons/md';
import TextareaAutosize from 'react-textarea-autosize';
import QuestionArray from '../../../components/create-update-quiz/QuestionArray';
import QuizInputUI from '../../../components/custom-inputs/QuizInputUI';
import {
	QuizInput,
	useQuizToUpdateQuery,
	useUpdateQuizMutation,
} from '../../../generated/graphql';
import { MainContainer } from '../../../layouts/MainContainer';
import errorMapper from '../../../utils/errorMapper';
import { removeTypename } from '../../../utils/removeTypename';
import { uploadCloudinaryImage } from '../../../utils/uploadImage';
import { withApollo } from '../../../utils/withApollo';

const EditQuiz = ({}) => {
	const colorTitle = useColorModeValue('gray.800', 'white');
	const router = useRouter();
	const thumbnailBg = useColorModeValue('gray.50', 'rgba(255, 255, 255, 0.04)');
	const [image, setImage] = useState<string | 'loading'>();
	const [autoAddChoiceInput, setAutoAddChoiceInput] = useState<boolean>(false);

	const { data: queryData, loading } = useQuizToUpdateQuery({
		variables: {
			quiz_id: parseInt(router.query.id as string),
		},
	});

	const [updateQuiz, { loading: updateLoading }] = useUpdateQuizMutation();

	const data = removeTypename(queryData?.quizToUpdate!);

	const methods = useForm<QuizInput>();

	const { register, handleSubmit, errors, reset, setError } = methods;

	const onSubmit = async (values: QuizInput) => {
		try {
			const { errors } = await updateQuiz({
				variables: {
					inputs: values,
					quiz_id: parseInt(router.query.id as string),
				},
				update: (cache) => {
					cache.evict({ fieldName: 'quizzes' });
					cache.evict({ fieldName: 'quizToUpdate' });
				},
			});
			if (!errors) {
				router.push('/');
			}
		} catch (err) {
			errorMapper(errors, setError);
		}
	};

	const uploadImage = () => {
		uploadCloudinaryImage(
			(error: any, photos: { event: string; info: { url: any } }) => {
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

	useEffect(() => {
		if (!data) return;
		reset(data);
	}, [queryData]);

	if (loading && !data) {
		return (
			<MainContainer display='grid' placeItems='center' minH='101vh'>
				<Spinner color='purple.500' />
			</MainContainer>
		);
	}

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
						{(image || data?.quiz_photo) && (
							<input
								type='hidden'
								name='quiz_photo'
								ref={register()}
								defaultValue={image || data.quiz_photo!}
							/>
						)}
						<VStack spacing='16px'>
							<Box w='full'>
								{data?.quiz_photo || image ? (
									<Skeleton isLoaded={image !== 'loading'}>
										<Box borderRadius='8px' overflow='hidden' bg='gray.100'>
											<AspectRatio maxW='full' ratio={16 / 9}>
												{image !== 'loading' ? (
													<Image
														src={image || data?.quiz_photo!}
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
							{(data?.quiz_photo || image) && (
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
								errorMessage='Title is required field.'
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
								errorMessage='Description is required field.'
							/>
						</VStack>
						<QuestionArray
							autoAddChoiceInput={autoAddChoiceInput}
							setAutoAddChoiceInput={setAutoAddChoiceInput}
						/>
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
								isLoading={updateLoading}
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

export default withApollo({ ssr: false })(EditQuiz);
