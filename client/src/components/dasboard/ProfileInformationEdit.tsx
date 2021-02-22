import {
	Button,
	Divider,
	HStack,
	GridItem,
	Text,
	VStack,
	Flex,
	FormControl,
	FormLabel,
	List,
	ListIcon,
	ListItem,
	Select,
	Tooltip,
	useColorModeValue,
	Icon,
	chakra,
	Square,
} from '@chakra-ui/react';
import React from 'react';
import { useForm } from 'react-hook-form';
import { FiEdit } from 'react-icons/fi';
import {
	UpdateProfileInput,
	UserResponseFragment,
	useUpdateProfileMutation,
} from '../../generated/graphql';
import MainInputUI from '../custom-inputs/MainInputUI';
import TextareaAutosize from 'react-textarea-autosize';
import { WarningIcon } from '@chakra-ui/icons';
import { Months, Days, Years } from '../options/Birthday';
import { Country } from '../options/Country';
import { MeQuery, MeDocument } from '../../generated/graphql';
import errorMapper from '../../utils/errorMapper';
import {
	FaFacebookSquare,
	FaTwitterSquare,
	FaYoutubeSquare,
} from 'react-icons/fa';
interface ProfileInformationEditProps {
	profInfoProps: UserResponseFragment;
	setEditMode: (editMode: boolean) => void;
}

const defaultMonths = [
	'Jan',
	'Feb',
	'Mar',
	'Apr',
	'May',
	'Jun',
	'Jul',
	'Aug',
	'Sep',
	'Oct',
	'Nov',
	'Dec',
];

export const ProfileInformationEdit: React.FC<ProfileInformationEditProps> = ({
	profInfoProps: {
		profile: { first_name, last_name, birthday, bio, country, social },
	},
	setEditMode,
}) => {
	const [updateProfile, { loading }] = useUpdateProfileMutation();

	const {
		register,
		handleSubmit,
		errors,
		setError,
	} = useForm<UpdateProfileInput>();

	const onSumbit = async (values: UpdateProfileInput) => {
		try {
			const { data } = await updateProfile({
				variables: { data: values },
				update: (cache, { data }) => {
					cache.writeQuery<MeQuery>({
						query: MeDocument,
						data: {
							__typename: 'Query',
							me: data?.updateProfile,
						},
					});
				},
			});
			if (data?.updateProfile) {
				setEditMode(false);
			}
		} catch (err) {
			errorMapper(err, setError);
		}
	};

	return (
		<>
			<GridItem
				colSpan={10}
				display='flex'
				justifyContent='space-between'
				alignItems='center'
				py='8px'
				px='6px'
			>
				<Text px='16px'>Profile Information</Text>
				<Button
					onClick={() => setEditMode(false)}
					rightIcon={<FiEdit />}
					colorScheme='purple'
					variant='ghost'
				>
					Cancel
				</Button>
			</GridItem>
			<GridItem colSpan={10}>
				<Divider mb='16px' />
			</GridItem>
			<GridItem colSpan={10}>
				<form onSubmit={handleSubmit(onSumbit)}>
					<VStack
						spacing='10px'
						align='flex-start'
						py={['8px', '12px', '20px']}
						px={['12px', '20px', '32px']}
						w={['100%', '80%', '75%', '60%']}
					>
						<HStack spacing={2}>
							<MainInputUI
								error={errors.first_name}
								input='first_name'
								name='First name'
								placeholder='Enter first name'
								register={register}
								type='text'
								forDashboard
								defaultValue={first_name}
							/>
							<MainInputUI
								error={errors.last_name}
								input='last_name'
								name='Last name'
								placeholder='Enter last name'
								register={register}
								type='text'
								forDashboard
								defaultValue={last_name}
							/>
						</HStack>
						<MainInputUI
							error={errors.bio}
							input='bio'
							name='Bio'
							as={TextareaAutosize}
							resize='none'
							overflow='hidden'
							py='8px'
							minH='72px'
							placeholder='Type your bio'
							register={register}
							type='text'
							forDashboard
							defaultValue={bio ?? ''}
						/>
						<FormControl>
							<Flex justify='space-between'>
								<FormLabel as='p' fontWeight='semibold' htmlFor='month'>
									Date of Birth
								</FormLabel>
								{(errors.year || errors.month || errors.day) && (
									<Tooltip
										hasArrow
										bg='red.500'
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
									>
										<WarningIcon
											mx='14px'
											color='red.500'
											fontSize='20px'
											bg={useColorModeValue('white', '#202020')}
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
									defaultValue={
										defaultMonths[parseInt(birthday.split('-')[1]) - 1]
									}
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
										defaultValue={parseInt(birthday.split('-')[2])}
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
										defaultValue={parseInt(birthday.split('-')[0])}
									>
										<Years />
									</Select>
								</HStack>
							</HStack>
						</FormControl>
						<FormControl>
							<FormLabel as='p' fontWeight='semibold' htmlFor='country'>
								Country
							</FormLabel>
							<Select
								size='lg'
								placeholder='Country'
								name='country'
								id='country'
								ref={register}
								isInvalid={!!errors.country}
								focusBorderColor='purple.500'
								defaultValue={country ?? ''}
							>
								<Country />
							</Select>
						</FormControl>
						<VStack spacing='10px' w='full' align='flex-start'>
							<Text as='p' fontWeight='semibold'>
								Social
							</Text>
							<Flex align='center' w='full'>
								<Icon
									as={FaFacebookSquare}
									boxSize='40px'
									color='#3b5999'
									mr='10px'
								/>
								<MainInputUI
									input='social.facebook'
									name=''
									placeholder='Enter your facebook information'
									register={register}
									type='text'
									forDashboard
									defaultValue={social?.facebook ?? ''}
								/>
							</Flex>
							<Flex align='center' w='full'>
								<Icon
									as={FaTwitterSquare}
									boxSize='40px'
									color='#55acee'
									mr='10px'
								/>
								<MainInputUI
									input='social.twitter'
									name=''
									placeholder='Enter your twitter information'
									register={register}
									type='text'
									forDashboard
									defaultValue={social?.twitter ?? ''}
								/>
							</Flex>
							<Flex align='center' w='full'>
								<Square boxSize='40px' mr='10px'>
									<chakra.img
										boxSize='35.5px'
										src='/instagram.svg'
										alt='Instagram Logo'
									/>
								</Square>
								<MainInputUI
									input='social.instagram'
									name=''
									placeholder='Enter your instagram information'
									register={register}
									type='text'
									forDashboard
									defaultValue={social?.instagram ?? ''}
								/>
							</Flex>
							<Flex align='center' w='full'>
								<Icon
									as={FaYoutubeSquare}
									boxSize='40px'
									color='#cd201f'
									mr='10px'
								/>
								<MainInputUI
									input='social.youtube'
									name=''
									placeholder='Enter your youtube information'
									register={register}
									type='text'
									forDashboard
									defaultValue={social?.youtube ?? ''}
								/>
							</Flex>
						</VStack>
						<Button type='submit' isLoading={loading}>
							Update Profile
						</Button>
					</VStack>
				</form>
			</GridItem>
		</>
	);
};
