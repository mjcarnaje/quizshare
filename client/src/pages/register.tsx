import {
	Box,
	Button,
	FormControl,
	FormLabel,
	HStack,
	Input,
	Select,
	Text,
	useColorMode,
	VStack,
} from '@chakra-ui/react';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Days, Months, Years } from '../components/birthdayDateOptions';
import { Container } from '../components/Container';
import { RegisterInput, useRegisterMutation } from '../generated/graphql';
import { withApollo } from '../utils/withApollo';

const Register: React.FC = () => {
	const { colorMode } = useColorMode();

	const bgColor = { light: 'white', dark: 'gray.800' };
	const registerBoxShadow = { light: 'md', dark: 'lg' };

	const [registerMutation, { loading }] = useRegisterMutation();

	const { register, handleSubmit } = useForm();

	const onSumbit = async (values: RegisterInput) => {
		try {
			const { data } = await registerMutation({
				variables: values,
			});
			alert(data);
		} catch (err) {
			const errors: { [key: string]: string } = {};
			err.graphQLErrors[0]?.extensions.exception.validationErrors.forEach(
				(validationErr: any) => {
					Object.values(validationErr.constraints).forEach((message: any) => {
						errors[validationErr.property] = message;
					});
				}
			);
			alert(JSON.stringify(errors, null, 2));
		}
	};

	return (
		<Container minHeight='100vh' justify='center'>
			<Box
				bg={bgColor[colorMode]}
				boxShadow={registerBoxShadow[colorMode]}
				rounded='md'
				w='40%'
				px={8}
				pt={4}
				pb={16}
				position='relative'
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

				<Text fontSize={28} fontWeight='bold' textAlign='center'>
					Create your account
				</Text>
				<Text fontSize='20px' color='gray.600' textAlign='center'>
					It's quick and easy.
				</Text>
				<form onSubmit={handleSubmit(onSumbit)}>
					<VStack spacing='12px' py='24px'>
						<HStack w='full' spacing='6px'>
							<FormControl id='firstName'>
								<FormLabel>First name</FormLabel>
								<Input
									size='lg'
									type='text'
									name='firstName'
									placeholder='First name'
									ref={register()}
								/>
							</FormControl>
							<FormControl id='lastName'>
								<FormLabel>Last name</FormLabel>
								<Input
									size='lg'
									type='text'
									name='lastName'
									placeholder='Last name'
									ref={register()}
								/>
							</FormControl>
						</HStack>
						<FormControl id='gender'>
							<FormLabel>Gender</FormLabel>
							<Select
								size='lg'
								defaultValue='Male'
								name='gender'
								ref={register()}
							>
								<option value='Male'>Male</option>
								<option value='Female'>Female</option>
								<option value='Other'>Other</option>
							</Select>
						</FormControl>
						<FormControl>
							<FormLabel>Date of Birth</FormLabel>
							<HStack w='full' spacing='6px'>
								<FormControl id='month' w='50%'>
									<Select
										size='lg'
										placeholder='Month'
										name='month'
										ref={register()}
									>
										<Months />
									</Select>
								</FormControl>
								<HStack w='50%' spacing='6px'>
									<FormControl id='day'>
										<Select
											size='lg'
											placeholder='Day'
											name='day'
											ref={register()}
										>
											<Days />
										</Select>
									</FormControl>
									<FormControl id='year'>
										<Select
											size='lg'
											placeholder='Year'
											name='year'
											ref={register()}
										>
											<Years />
										</Select>
									</FormControl>
								</HStack>
							</HStack>
						</FormControl>
					</VStack>
					<VStack spacing='8px'>
						<FormControl>
							<FormLabel>Username</FormLabel>
							<Input
								size='lg'
								type='text'
								name='username'
								placeholder='Username'
								ref={register()}
							/>
						</FormControl>
						<FormControl>
							<FormLabel>Email</FormLabel>
							<Input
								size='lg'
								type='text'
								name='email'
								placeholder='Email'
								ref={register()}
							/>
						</FormControl>
						<FormControl>
							<FormLabel>Password</FormLabel>
							<Input
								size='lg'
								type='password'
								name='password'
								placeholder='Password'
								ref={register()}
							/>
						</FormControl>
						<FormControl>
							<FormLabel>Confirm password</FormLabel>
							<Input
								size='lg'
								type='password'
								name='confirmPassword'
								placeholder='Confirm password'
								ref={register()}
							/>
						</FormControl>
					</VStack>

					<Button
						type='submit'
						size='sm'
						isLoading={loading}
						rounded='20px'
						px='20px'
						position='absolute'
						right='1rem'
						bottom='1rem'
						colorScheme='purple'
						fontWeight='bold'
					>
						Submit
					</Button>
				</form>
			</Box>
		</Container>
	);
};

export default withApollo({ ssr: false })(Register);
