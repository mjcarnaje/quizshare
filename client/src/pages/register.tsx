import { ArrowBackIcon } from '@chakra-ui/icons';
import {
	Box,
	Button,
	FormControl,
	FormLabel,
	HStack,
	IconButton,
	Input,
	Select,
	Text,
	useColorMode,
	VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Days, Months, Years } from '../components/birthdayDateOptions';
import { Container } from '../components/Container';
import { RegisterInput, useRegisterMutation } from '../generated/graphql';
import errorMapper from '../utils/errorMapper';
import { withApollo } from '../utils/withApollo';

const Register: React.FC = () => {
	const [isSecondStep, setIsSecondStep] = useState(false);

	const { colorMode } = useColorMode();

	const bgColor = { light: 'white', dark: 'gray.800' };
	const registerBoxShadow = { light: 'md', dark: 'lg' };

	const [registerMutation, { loading }] = useRegisterMutation();

	const { register, handleSubmit, watch } = useForm<RegisterInput>({
		defaultValues: {
			firstName: '',
			lastName: '',
			gender: '',
			month: '',
			day: '',
			year: '',
			username: '',
			email: '',
			password: '',
			confirmPassword: '',
		},
	});

	const onSumbit = async (values: RegisterInput) => {
		try {
			const { data } = await registerMutation({
				variables: values,
			});
			alert(data);
		} catch (err) {
			console.log(errorMapper(err));
		}
	};

	const watchFirstStepValues = watch([
		'firstName',
		'lastName',
		'gender',
		'month',
		'day',
		'year',
	]);

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
				{isSecondStep && (
					<IconButton
						variant='ghost'
						colorScheme='purple'
						aria-label='Go back'
						position='absolute'
						isRound
						left='1rem'
						top='1rem'
						icon={<ArrowBackIcon />}
						onClick={() => setIsSecondStep(false)}
					/>
				)}
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
					<Box w='full' display={isSecondStep ? 'none' : ''}>
						<Text fontSize={28} fontWeight='bold' textAlign='center'>
							Create your account
						</Text>
						<Text fontSize='20px' color='gray.600' textAlign='center'>
							It's quick and easy.
						</Text>
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
									name='gender'
									defaultValue=''
									ref={register()}
									placeholder='Gender'
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
					</Box>

					<VStack spacing='8px' display={isSecondStep ? '' : 'none'}>
						<FormControl id='username'>
							<FormLabel>Username</FormLabel>
							<Input
								size='lg'
								type='text'
								name='username'
								placeholder='Username'
								ref={register()}
							/>
						</FormControl>
						<FormControl id='email'>
							<FormLabel>Email</FormLabel>
							<Input
								size='lg'
								type='text'
								name='email'
								placeholder='Email'
								ref={register()}
							/>
						</FormControl>
						<FormControl id='password'>
							<FormLabel>Password</FormLabel>
							<Input
								size='lg'
								type='password'
								name='password'
								placeholder='Password'
								ref={register()}
							/>
						</FormControl>
						<FormControl id='confirmPassword'>
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

					{!isSecondStep ? (
						<Button
							size='sm'
							rounded='20px'
							px='20px'
							position='absolute'
							right='1rem'
							bottom='1rem'
							colorScheme='purple'
							fontWeight='bold'
							onClick={() => setIsSecondStep(true)}
							disabled={
								Object.values(watchFirstStepValues).filter((val) => val === '')
									.length !== 0
							}
						>
							Next
						</Button>
					) : (
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
					)}
				</form>
			</Box>
		</Container>
	);
};

export default withApollo({ ssr: false })(Register);
