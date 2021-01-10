import { Box, Heading, VStack } from '@chakra-ui/react';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import TextareaAutosize from 'react-textarea-autosize';
import { Container } from '../../components/Container';
import CustomQuizInput from '../../components/CustomQuizInput';
import QuestionArray from '../../components/QuestionArray';
import { QuizInput } from '../../generated/graphql';
import { withApollo } from '../../utils/withApollo';

const CreateQuiz: React.FC = () => {
	const methods = useForm<QuizInput>();

	const { register, handleSubmit, watch } = methods;

	const onSubmit = async (data: unknown) => {
		console.log(data);
	};

	const datas = watch();

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
							<VStack spacing='16px'>
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
						</form>
					</FormProvider>
				</Box>
			</Box>
			<pre>{JSON.stringify(datas, null, 2)}</pre>
		</Container>
	);
};

export default withApollo({ ssr: true })(CreateQuiz);
