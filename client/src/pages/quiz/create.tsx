import {
	AspectRatio,
	Box,
	Button,
	Center,
	Heading,
	Skeleton,
	useColorModeValue,
	VStack,
} from '@chakra-ui/react';
import { CloudinaryContext, Image } from 'cloudinary-react';
import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { MdPhotoSizeSelectActual } from 'react-icons/md';
import TextareaAutosize from 'react-textarea-autosize';
import { Container } from '../../components/Container';
import CustomQuizInput from '../../components/CustomQuizInput';
import QuestionArray from '../../components/QuestionArray';
import { QuizInput } from '../../generated/graphql';
import { uploadCloudinaryImage } from '../../utils/uploadImage';
import { withApollo } from '../../utils/withApollo';

const CreateQuiz: React.FC = () => {
	const thumbnailBg = useColorModeValue('gray.50', 'rgba(255, 255, 255, 0.04)');
	const [image, setImage] = useState<string | 'loading'>();

	const methods = useForm<QuizInput>();

	const { register, handleSubmit, watch } = methods;

	const onSubmit = async (data: unknown) => {
		console.log(data);
	};

	const datas = watch();

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
		<Container minH='100vh'>
			<Box py='40px'>
				<Heading
					as='h1'
					fontFamily='inter'
					fontWeight='800'
					color='gray.700'
					lineHeight='1'
					fontSize='54px'
					pb='40px'
				>
					Create an interactive quiz
				</Heading>
				<Box
					w='764px'
					boxShadow='md'
					p='24px'
					borderWidth='1px'
					borderRadius='md'
				>
					<FormProvider {...methods}>
						<form onSubmit={handleSubmit(onSubmit)}>
							<CloudinaryContext
								cloudName={process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}
							>
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
									<CustomQuizInput
										register={register}
										name='Title'
										input='title'
										placeholder='Type the title here...'
										fontSize='20px'
										size='lg'
									/>
									<CustomQuizInput
										register={register}
										name='Description'
										input='description'
										placeholder='Type the description here..'
										as={TextareaAutosize}
										resize='none'
										overflow='hidden'
										py='5px'
									/>
								</VStack>
								<QuestionArray />
							</CloudinaryContext>
						</form>
					</FormProvider>
				</Box>
			</Box>
			<pre>{JSON.stringify(datas, null, 2)}</pre>
		</Container>
	);
};

export default withApollo({ ssr: true })(CreateQuiz);
