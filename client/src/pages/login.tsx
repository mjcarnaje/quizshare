import { Box, Button, Text, useColorModeValue, VStack } from '@chakra-ui/react';
import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import React from 'react';
import { useForm } from 'react-hook-form';
import { MainContainer } from '../layouts/MainContainer';
import MainInputUI from '../components/custom-inputs/MainInputUI';
import {
	LoginInput,
	MeDocument,
	MeQuery,
	useLoginMutation,
} from '../generated/graphql';
import errorMapper from '../utils/errorMapper';
import { withApollo } from '../utils/withApollo';

const Login: React.FC = () => {
	const bgColor = useColorModeValue('white', '#202020');
	const registerBoxShadow = useColorModeValue('md', 'lg');
	const borderColor = useColorModeValue('gray.200', '');

	const [loginUser, { loading }] = useLoginMutation();

	const router = useRouter();

	const { register, handleSubmit, errors, setError } = useForm<LoginInput>();

	const onSumbit = async (values: LoginInput) => {
		try {
			const { data } = await loginUser({
				variables: values,
				update: (cache, { data }) => {
					cache.writeQuery<MeQuery>({
						query: MeDocument,
						data: {
							__typename: 'Query',
							me: data?.login,
						},
					});
				},
			});
			if (data?.login) {
				router.push('/');
			}
		} catch (err) {
			errorMapper(err, setError);
		}
	};
	return (
		<MainContainer
			flexGrow={1}
			display='flex'
			justifyContent='center'
			alignItems='center'
		>
			<Head>
				<title>Login</title>
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
			</Head>
			<Box
				borderWidth='1px'
				borderColor={borderColor}
				bg={bgColor}
				boxShadow={registerBoxShadow}
				rounded='md'
				w='40%'
				px='32px'
				py='16px'
			>
				<Box mb='20px'>
					<Text
						fontSize='28px'
						fontFamily='berkshire'
						textAlign='center'
						color='purple.500'
					>
						Qs
					</Text>
				</Box>
				<form onSubmit={handleSubmit(onSumbit)}>
					<VStack spacing='10px' py='24px'>
						<MainInputUI
							error={errors.emailOrUsername}
							input='emailOrUsername'
							name='Email or username'
							register={register}
							type='text'
						/>
						<MainInputUI
							error={errors.password}
							input='password'
							name='Password'
							register={register}
							type='password'
						/>
					</VStack>
					<Box w='full' textAlign='right'>
						<Button
							type='submit'
							size='sm'
							isLoading={loading}
							rounded='20px'
							px='20px'
							colorScheme='purple'
							fontWeight='bold'
						>
							Login
						</Button>
					</Box>
				</form>
			</Box>
		</MainContainer>
	);
};

export default withApollo({ ssr: false })(Login);
