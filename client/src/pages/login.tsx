import { Box, Button, Text, useColorMode, VStack } from '@chakra-ui/react';
import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Container } from '../components/Container';
import RegisterLoginInput from '../components/RegisterLoginInput';
import {
	LoginMutationVariables,
	MeDocument,
	MeQuery,
	useLoginMutation,
} from '../generated/graphql';
import { withApollo } from '../utils/withApollo';
import errorMapper from '../utils/errorMapper';

const Login: React.FC = () => {
	const { colorMode } = useColorMode();

	const bgColor = { light: 'white', dark: 'gray.800' };
	const registerBoxShadow = { light: 'md', dark: 'lg' };

	const [loginUser, { loading }] = useLoginMutation();

	const router = useRouter();

	const {
		register,
		handleSubmit,
		errors,
		setError,
	} = useForm<LoginMutationVariables>();

	const onSumbit = async (values: LoginMutationVariables) => {
		try {
			const response = await loginUser({
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
			if (response.data?.login) {
				router.push('/');
			}
		} catch (err) {
			errorMapper(err, setError);
		}
	};
	return (
		<Container height='100vh'>
			<Head>
				<title>Login</title>
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
			</Head>
			<Box
				bg={bgColor[colorMode]}
				boxShadow={registerBoxShadow[colorMode]}
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
						<RegisterLoginInput
							error={errors.emailOrUsername}
							input='emailOrUsername'
							name='Email or username'
							register={register}
							type='text'
						/>
						<RegisterLoginInput
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
		</Container>
	);
};

export default withApollo({ ssr: false })(Login);
