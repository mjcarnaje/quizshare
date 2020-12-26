import { ArrowBackIcon, WarningIcon } from '@chakra-ui/icons';
import {
	Box,
	Button,
	FormControl,
	FormLabel,
	HStack,
	IconButton,
	InputGroup,
	InputRightElement,
	List,
	ListIcon,
	ListItem,
	Select,
	Text,
	Tooltip,
	useColorMode,
	VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Days, Months, Years } from '../components/BirthdayDateOptions';
import { Container } from '../components/Container';
import RegisterLoginInput from '../components/RegisterLoginInput';
import { RegisterInput, useRegisterMutation } from '../generated/graphql';
import errorMapper from '../utils/errorMapper';
import { withApollo } from '../utils/withApollo';
import { Flex } from '@chakra-ui/react';

const Register: React.FC = () => {
	const [isSecondStep, setIsSecondStep] = useState(false);

	const { colorMode } = useColorMode();

	const bgColor = { light: 'white', dark: 'gray.800' };
	const registerBoxShadow = { light: 'md', dark: 'lg' };

	const [registerMutation, { loading }] = useRegisterMutation();

	const { register, handleSubmit, errors, setError } = useForm<RegisterInput>();

	const onSumbit = async (values: RegisterInput) => {
		try {
			const { data } = await registerMutation({
				variables: values,
			});
			alert(data);
		} catch (err) {
			const errObj = errorMapper(err);
			Object.keys(errObj).forEach((key) => {
				setError(key, { type: 'server', message: errObj[key] });
			});
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
								<RegisterLoginInput
									error={errors.firstName}
									input='firstName'
									name='First Name'
									register={register}
									type='text'
								/>
								<RegisterLoginInput
									input='lastName'
									error={errors.lastName}
									name='Last Name'
									register={register}
									type='text'
								/>
							</HStack>
							<FormControl id='gender' isInvalid={!!errors.gender}>
								<FormLabel>Gender</FormLabel>
								<InputGroup size='lg'>
									<Select
										name='gender'
										defaultValue=''
										ref={register}
										placeholder='Gender'
										isInvalid={!!errors.gender}
									>
										<option value='Male'>Male</option>
										<option value='Female'>Female</option>
										<option value='Other'>Other</option>
									</Select>
									{errors.gender && (
										<InputRightElement>
											<Tooltip
												hasArrow
												label={errors.gender.message}
												bg='red.500'
											>
												<WarningIcon
													color='red.500'
													fontSize='20px'
													bg={bgColor[colorMode]}
													rounded='100px'
												/>
											</Tooltip>
										</InputRightElement>
									)}
								</InputGroup>
							</FormControl>
							<FormControl>
								<Flex justify='space-between'>
									<FormLabel>Date of Birth</FormLabel>
									{(errors.year || errors.month || errors.day) && (
										<Tooltip
											hasArrow
											label={
												<List spacing={3}>
													{errors.year && (
														<ListItem>
															<ListIcon as={WarningIcon} color='red.700' />
															{errors.year.message}
														</ListItem>
													)}
													{errors.month && (
														<ListItem>
															<ListIcon as={WarningIcon} color='red.700' />
															{errors.month.message}
														</ListItem>
													)}
													{errors.day && (
														<ListItem>
															<ListIcon as={WarningIcon} color='red.700' />
															{errors.day.message}
														</ListItem>
													)}
												</List>
											}
											bg='red.500'
										>
											<WarningIcon
												mx='14px'
												color='red.500'
												fontSize='20px'
												bg={bgColor[colorMode]}
												rounded='100px'
											/>
										</Tooltip>
									)}
								</Flex>
								<HStack w='full' spacing='6px'>
									<Select
										w='50%'
										size='lg'
										placeholder='Month'
										name='month'
										ref={register}
										isInvalid={!!errors.month}
									>
										<Months />
									</Select>
									<HStack w='50%' spacing='6px'>
										<Select
											size='lg'
											placeholder='Day'
											name='day'
											ref={register}
											isInvalid={!!errors.day}
										>
											<Days />
										</Select>
										<Select
											size='lg'
											placeholder='Year'
											name='year'
											ref={register}
											isInvalid={!!errors.year}
										>
											<Years />
										</Select>
									</HStack>
								</HStack>
							</FormControl>
						</VStack>
					</Box>

					<VStack spacing='8px' display={isSecondStep ? '' : 'none'}>
						<RegisterLoginInput
							error={errors.username}
							input='username'
							name='Username'
							register={register}
							type='text'
						/>
						<RegisterLoginInput
							error={errors.email}
							input='email'
							name='Email'
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
						<RegisterLoginInput
							error={errors.confirmPassword}
							input='confirmPassword'
							name='Confirm Password'
							register={register}
							type='password'
						/>
					</VStack>

					<Button
						type={isSecondStep ? 'submit' : 'button'}
						size='sm'
						isLoading={loading}
						rounded='20px'
						px='20px'
						position='absolute'
						right='1rem'
						bottom='1rem'
						colorScheme='purple'
						fontWeight='bold'
						onClick={
							isSecondStep
								? undefined
								: (e) => {
										e.preventDefault();
										setIsSecondStep(true);
								  }
						}
					>
						{isSecondStep ? 'Submit' : 'Next'}
					</Button>
				</form>
			</Box>
		</Container>
	);
};

export default withApollo({ ssr: false })(Register);
