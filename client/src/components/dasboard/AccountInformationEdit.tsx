import {
	AspectRatio,
	Avatar,
	Box,
	Button,
	Center,
	Divider,
	Flex,
	GridItem,
	Skeleton,
	Text,
	useColorModeValue,
	VStack,
} from '@chakra-ui/react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FiEdit } from 'react-icons/fi';
import { MdPhotoSizeSelectActual } from 'react-icons/md';
import {
	MeDocument,
	MeQuery,
	UpdateAccountInput,
	UserResponseFragment,
	useUpdateAccountMutation,
} from '../../generated/graphql';
import errorMapper from '../../utils/errorMapper';
import { uploadCloudinaryImage } from '../../utils/uploadImage';
import MainInputUI from '../custom-inputs/MainInputUI';

interface AccountInformationEditProps {
	accInfoProps: UserResponseFragment;
	setEditMode: (editMode: boolean) => void;
}

export const AccountInformationEdit: React.FC<AccountInformationEditProps> = ({
	accInfoProps: {
		email,
		avatar,
		username,
		cover_photo,
		profile: { name },
	},
	setEditMode,
}) => {
	const coverPhotoBg = useColorModeValue(
		'gray.50',
		'rgba(255, 255, 255, 0.04)'
	);

	const [coverPhoto, setCoverPhoto] = useState<string | 'loading'>();
	const [profilePhoto, setProfilePhoto] = useState<string | 'loading'>();

	const [updateAccount, { loading }] = useUpdateAccountMutation();

	const {
		register,
		handleSubmit,
		errors,
		setError,
	} = useForm<UpdateAccountInput>();

	const onSumbit = async (values: UpdateAccountInput) => {
		try {
			const { data } = await updateAccount({
				variables: {
					data: {
						...values,
						username: values.username === username ? null : values.username,
						email: values.email === email ? null : values.email,
						cover_photo: coverPhoto ?? null,
						avatar: profilePhoto ?? null,
					},
				},
				update: (cache, { data }) => {
					cache.writeQuery<MeQuery>({
						query: MeDocument,
						data: {
							__typename: 'Query',
							me: data?.updateAccount,
						},
					});
				},
			});
			if (data?.updateAccount) {
				setEditMode(false);
			}
		} catch (err) {
			errorMapper(err, setError);
		}
	};

	const uploadCoverPhoto = () => {
		uploadCloudinaryImage(
			(error: any, photos: { event: string; info: { url: string } }) => {
				if (!error && photos.event === 'queues-start') {
					setCoverPhoto('loading');
				} else if (!error && photos.event === 'success') {
					setCoverPhoto(photos.info.url);
				} else if (error) {
					console.error(error);
				}
			},
			16 / 5
		);
	};

	const uploadProfilePhoto = () => {
		uploadCloudinaryImage(
			(error: any, photos: { event: string; info: { url: string } }) => {
				if (!error && photos.event === 'queues-start') {
					setProfilePhoto('loading');
				} else if (!error && photos.event === 'success') {
					setProfilePhoto(photos.info.url);
				} else if (error) {
					console.error(error);
				}
			},
			1
		);
	};

	useEffect(() => {
		cover_photo && setCoverPhoto(cover_photo);
		avatar && setProfilePhoto(avatar);
	}, [cover_photo, avatar]);

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
				<Text px='16px'>Account Information</Text>
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
				<Divider />
			</GridItem>
			<GridItem colSpan={10}>
				<form onSubmit={handleSubmit(onSumbit)}>
					<Box p='5px' textAlign='center'>
						<Skeleton isLoaded={coverPhoto !== 'loading'}>
							<Box bg='gray.100'>
								<AspectRatio maxW='full' ratio={16 / 5}>
									{coverPhoto && coverPhoto !== 'loading' ? (
										<Image src={coverPhoto} alt='Cover Photo' layout='fill' />
									) : (
										<Center bg={coverPhotoBg}>
											<Button
												onClick={uploadCoverPhoto}
												leftIcon={<MdPhotoSizeSelectActual />}
												colorScheme='gray'
												variant='ghost'
											>
												Upload cover photo
											</Button>
										</Center>
									)}
								</AspectRatio>
							</Box>
						</Skeleton>

						{coverPhoto && (
							<Button
								mt='10px'
								onClick={uploadCoverPhoto}
								leftIcon={<MdPhotoSizeSelectActual />}
								colorScheme='gray'
								variant='ghost'
							>
								Upload cover photo
							</Button>
						)}
					</Box>
					<VStack pl='32px' spacing='10px' py='20px' align='flex-start' w='60%'>
						<VStack spacing='12px' align='flex-start'>
							<Text fontWeight='semibold'>Profile Image</Text>
							<Flex align='center'>
								<Skeleton isLoaded={profilePhoto !== 'loading'}>
									<Avatar name={name} size='xl' src={profilePhoto ?? ''} />
								</Skeleton>
								<Button
									ml='16px'
									size='sm'
									leftIcon={<MdPhotoSizeSelectActual />}
									colorScheme='gray'
									variant='ghost'
									onClick={uploadProfilePhoto}
								>
									Upload profile photo
								</Button>
							</Flex>
						</VStack>
						<MainInputUI
							error={errors.username}
							input='username'
							name='Username'
							placeholder='Enter new username'
							register={register}
							type='text'
							forDashboard
							defaultValue={username}
						/>
						<MainInputUI
							error={errors.email}
							input='email'
							name='Email'
							placeholder='Enter new email'
							register={register}
							type='text'
							forDashboard
							defaultValue={email}
						/>
						<MainInputUI
							error={errors.password}
							input='password'
							name='Password'
							placeholder='Enter new password (optional)'
							register={register}
							type='password'
							forDashboard
							helperText={[
								'Password must be at least 6 characters, and a combination of letters and numbers.',
								'Avoid using a password that you use with other websites or that might be easy for someone else to guess.',
							]}
						/>
						<MainInputUI
							error={errors.confirm_password}
							input='confirm_password'
							name='Confirm password'
							placeholder='Confirm new password (optional)'
							register={register}
							type='password'
							forDashboard
						/>
						<Button type='submit' isLoading={loading}>
							Update account
						</Button>
					</VStack>
				</form>
			</GridItem>
		</>
	);
};
