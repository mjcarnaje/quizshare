import { Button, Center, Flex, VStack } from '@chakra-ui/react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { MdPhotoSizeSelectActual } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import TextareaAutosize from 'react-textarea-autosize';
import QuizInputUI from '../../../../components/custom-inputs/QuizInputUI';
import ImageHolder from '../../../../components/ImageHolder';
import { QuizInput } from '../../../../generated/graphql';
import { MainContainer } from '../../../../layouts/MainContainer';
import { QuizContainer } from '../../../../layouts/QuizContainer';
import { SubContainer } from '../../../../layouts/SubContainer';
import { setSettings } from '../../../../store/quizSlice';
import { SettingsInput, State } from '../../../../store/type';
import { useUploadSinglePhoto } from '../../../../utils/useUploadPhoto';
import { withApollo } from '../../../../utils/withApollo';
import TagsArray from '../../../../components/create-update-quiz/TagsArray';

const Settings: React.FC = () => {
	const router = useRouter();
	const dispatch = useDispatch();

	const { title, description, quiz_photo, tags } = useSelector(
		(state: State) => state.quiz
	);

	const { image, setImage, uploadImage } = useUploadSinglePhoto();

	const methods = useForm<QuizInput>({
		defaultValues: { title, description, quiz_photo, tags },
	});

	const { register, handleSubmit, errors } = methods;

	const onSubmit = (data: SettingsInput) => {
		dispatch(
			setSettings({
				title: data.title,
				description: data.description,
				quiz_photo: data.quiz_photo,
				tags: data.tags,
			})
		);
	};

	useEffect(() => {
		if (!title) {
			router.replace(`/quiz/edit/${router.query.id}`);
		}

		if (quiz_photo) {
			setImage(quiz_photo);
		}
	}, [quiz_photo, title]);

	return (
		<MainContainer py='40px'>
			<Head>
				<title>Create Quiz</title>
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
			</Head>
			<QuizContainer type='update' quizId={router.query.id as string}>
				<SubContainer w='764px' my='0'>
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
								<ImageHolder
									image={image}
									ratio={16 / 9}
									initialHeight='200px'
									buttonText='Upload thumbnail'
									upload={uploadImage}
								/>
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
									register={register({
										required: 'Title is required',
										minLength: {
											value: 6,
											message: 'Title required more than 6 characters',
										},
									})}
									name='Title'
									input='title'
									placeholder='Type the title here...'
									fontSize='20px'
									size='lg'
									error={errors.title}
									errorMessage={errors.title?.message}
								/>
								<QuizInputUI
									register={register({
										required: 'Description is required',
										minLength: {
											value: 80,
											message: 'Description required more than 80 characters',
										},
									})}
									name='Description'
									input='description'
									placeholder='Type the description here..'
									as={TextareaAutosize}
									resize='none'
									overflow='hidden'
									minH='100px'
									py='7px'
									error={errors.description}
									errorMessage={errors.description?.message}
								/>
								<TagsArray />
							</VStack>
							<Flex w='full' mt='20px' justify='flex-end'>
								<Button colorScheme='purple' type='submit' px='20px' ml='10px'>
									Save Settings
								</Button>
							</Flex>
						</form>
					</FormProvider>
				</SubContainer>
			</QuizContainer>
		</MainContainer>
	);
};

export default withApollo({ ssr: true })(Settings);
