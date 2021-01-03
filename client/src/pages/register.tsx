import { ArrowBackIcon, WarningIcon } from '@chakra-ui/icons';
import {
	Box,
	Button,
	Flex,
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
	useColorModeValue,
	VStack,
} from '@chakra-ui/react';
import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Days, Months, Years } from '../components/BirthdayDateOptions';
import { Container } from '../components/Container';
import RegisterLoginInput from '../components/RegisterLoginInput';
import {
	RegisterInput,
	useRegisterMutation,
	MeQuery,
} from '../generated/graphql';
import errorMapper from '../utils/errorMapper';
import { withApollo } from '../utils/withApollo';
import { MeDocument } from '../generated/graphql';

const Register: React.FC = () => {
	const [isSecondStep, setIsSecondStep] = useState(false);

	const bgColor = useColorModeValue('white', '#202020');
	const registerBoxShadow = useColorModeValue('md', 'lg');
	const borderColor = useColorModeValue('gray.200', '');

	const router = useRouter();

	const [registerUser, { loading }] = useRegisterMutation();

	const { register, handleSubmit, errors, setError } = useForm<RegisterInput>();

	const onSumbit = async (values: RegisterInput) => {
		try {
			const { data } = await registerUser({
				variables: values,
				update: (cache, { data }) => {
					cache.writeQuery<MeQuery>({
						query: MeDocument,
						data: {
							__typename: 'Query',
							me: data?.register,
						},
					});
				},
			});
			if (data?.register) {
				router.push('/');
			}
		} catch (err) {
			errorMapper(err, setError);
		}
	};

	return (
		<Container minHeight='100vh' justify='center'>
			<Head>
				<title>Register</title>
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
				pt='16px'
				pb='54px	'
				h='540px'
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
						<Text fontSize='20px' textAlign='center'>
							It's quick and easy.
						</Text>
						<VStack spacing='10px' py='24px'>
							<HStack w='full' spacing='6px'>
								<RegisterLoginInput
									error={errors.first_name}
									input='first_name'
									name='First Name'
									register={register}
									type='text'
								/>
								<RegisterLoginInput
									input='last_name'
									error={errors.last_name}
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
										focusBorderColor='purple.500'
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
													bg={bgColor}
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
												bg={bgColor}
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
										id='month'
										ref={register}
										isInvalid={!!errors.month}
										focusBorderColor='purple.500'
									>
										<Months />
									</Select>
									<HStack w='50%' spacing='6px'>
										<Select
											size='lg'
											placeholder='Day'
											name='day'
											id='day'
											ref={register}
											isInvalid={!!errors.day}
											focusBorderColor='purple.500'
										>
											<Days />
										</Select>
										<Select
											size='lg'
											placeholder='Year'
											name='year'
											id='year'
											ref={register}
											isInvalid={!!errors.year}
											focusBorderColor='purple.500'
										>
											<Years />
										</Select>
									</HStack>
								</HStack>
							</FormControl>
						</VStack>
					</Box>

					<VStack spacing='10px' py='24px' display={isSecondStep ? '' : 'none'}>
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
							error={errors.confirm_password}
							input='confirm_password'
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
