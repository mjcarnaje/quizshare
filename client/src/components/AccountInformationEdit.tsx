import {
	AspectRatio,
	Avatar,
	Button,
	Center,
	Divider,
	Flex,
	Box,
	GridItem,
	Text,
	useColorModeValue,
	VStack,
} from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import { FiEdit } from 'react-icons/fi';
import { MdPhotoSizeSelectActual } from 'react-icons/md';
import { UserResponseFragment } from '../generated/graphql';
import { useForm } from 'react-hook-form';
import MainInputUI from './custom-inputs/MainInputUI';
import { Image } from 'cloudinary-react';
import { uploadCloudinaryImage } from '../utils/uploadImage';

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

	const { register, handleSubmit, errors } = useForm();

	const onSumbit = async (values: any) => {
		console.log(values);
	};

	const uploadCoverPhoto = () => {
		uploadCloudinaryImage(
			(error: any, photos: { event: string; info: { public_id: any } }) => {
				if (!error && photos.event === 'queues-start') {
					setCoverPhoto('loading');
				} else if (!error && photos.event === 'success') {
					setCoverPhoto(photos.info.public_id);
				} else if (error) {
					console.error(error);
				}
			},
			16 / 5
		);
	};

	const uploadProfilePhoto = () => {
		uploadCloudinaryImage(
			(error: any, photos: { event: string; info: { public_id: any } }) => {
				if (!error && photos.event === 'queues-start') {
					setProfilePhoto('loading');
				} else if (!error && photos.event === 'success') {
					setProfilePhoto(photos.info.public_id);
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
					<Box p='5px'>
						<AspectRatio maxW='full' ratio={16 / 5}>
							{coverPhoto ? (
								<Image publicId={coverPhoto} alt='cover photo' />
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
					<VStack pl='32px' spacing='10px' py='20px' align='flex-start' w='60%'>
						<VStack spacing='12px' align='flex-start'>
							<Text fontWeight='semibold'>Profile Image</Text>
							<Flex align='center'>
								<Avatar name={name} size='xl' src={profilePhoto || ''} />
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
							placeholder='Enter new password'
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
							placeholder='Confirm new password'
							register={register}
							type='password'
							forDashboard
						/>
						<Button>Update account</Button>
					</VStack>
				</form>
			</GridItem>
		</>
	);
};
