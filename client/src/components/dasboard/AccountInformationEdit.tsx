import {
	Avatar,
	Box,
	Button,
	Divider,
	Flex,
	GridItem,
	Skeleton,
	Text,
	VStack,
} from '@chakra-ui/react';
import React, { useEffect } from 'react';
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
import { useUploadSinglePhoto } from '../../utils/useUploadPhoto';
import MainInputUI from '../custom-inputs/MainInputUI';
import ImageHolder from '../ImageHolder';

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
	const {
		image: coverPhoto,
		setImage: setCoverPhoto,
		uploadImage: uploadCoverPhoto,
	} = useUploadSinglePhoto({ cropRatio: 16 / 5 });
	const {
		image: profilePhoto,
		setImage: setProfilePhoto,
		uploadImage: uploadProfilePhoto,
	} = useUploadSinglePhoto({ cropRatio: 1 / 1 });

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
						<ImageHolder
							image={coverPhoto}
							ratio={16 / 5}
							initialHeight='200px'
							buttonText='Upload thumbnail'
							upload={uploadCoverPhoto}
						/>

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
					<VStack
						spacing='10px'
						align='flex-start'
						py={['8px', '12px', '20px']}
						px={['12px', '20px', '32px']}
						w={['100%', '80%', '75%', '60%']}
					>
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
