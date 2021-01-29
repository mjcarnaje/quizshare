import {
	AspectRatio,
	Avatar,
	Box,
	Button,
	Center,
	Divider,
	GridItem,
	Spinner,
	Text,
	useColorModeValue,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { FiEdit } from 'react-icons/fi';
import { MdPhotoSizeSelectActual } from 'react-icons/md';
import { useMeQuery } from '../../generated/graphql';
import { AccountInformationEdit } from './AccountInformationEdit';
import Image from 'next/image';

interface AccountInformationProps {}

export const AccountInformation: React.FC<AccountInformationProps> = ({}) => {
	const [editMode, setEditMode] = useState(false);

	const coverPhotoBg = useColorModeValue(
		'gray.50',
		'rgba(255, 255, 255, 0.04)'
	);

	const { data, loading, error } = useMeQuery();

	if (!data && loading) {
		return <Spinner />;
	}

	if (!data && !loading) {
		return <div>error: {error?.message}</div>;
	}

	if (editMode) {
		return (
			<AccountInformationEdit
				accInfoProps={data!.me!}
				setEditMode={setEditMode}
			/>
		);
	}

	const {
		email,
		avatar,
		username,
		cover_photo,
		profile: { name },
	} = data!.me!;

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
					onClick={() => setEditMode(true)}
					rightIcon={<FiEdit />}
					colorScheme='purple'
					variant='ghost'
				>
					Edit
				</Button>
			</GridItem>
			<GridItem colSpan={10}>
				<Divider />
			</GridItem>
			<GridItem colSpan={10} p='5px'>
				<Box bg='gray.100'>
					<AspectRatio maxW='full' ratio={16 / 5}>
						{cover_photo ? (
							<Image src={cover_photo} alt='Cover Photo' layout='fill' />
						) : (
							<Center bg={coverPhotoBg}>
								<Button
									onClick={() => setEditMode(true)}
									leftIcon={<MdPhotoSizeSelectActual />}
									colorScheme='gray'
									variant='ghost'
								>
									Add Cover Photo
								</Button>
							</Center>
						)}
					</AspectRatio>
				</Box>
			</GridItem>
			<GridItem colSpan={10}>
				<Divider mb='16px' />
			</GridItem>
			<GridItem
				fontWeight='semibold'
				colSpan={[10, 3]}
				px={['12px', '32px']}
				py={['8px', '16px']}
			>
				Profile Image
			</GridItem>
			<GridItem
				color='purple'
				colSpan={[10, 7]}
				py={['8px', '16px']}
				px={['12px', '0']}
			>
				<Avatar name={name} size='xl' src={avatar || ''} />
			</GridItem>
			<GridItem
				fontWeight='semibold'
				colSpan={[10, 3]}
				px={['12px', '32px']}
				py={['8px', '16px']}
			>
				Username
			</GridItem>
			<GridItem
				color='purple'
				colSpan={[10, 7]}
				py={['8px', '16px']}
				px={['12px', '0']}
			>
				{username}
			</GridItem>
			<GridItem
				fontWeight='semibold'
				colSpan={[10, 3]}
				px={['12px', '32px']}
				py={['8px', '16px']}
			>
				Email
			</GridItem>
			<GridItem
				color='purple'
				colSpan={[10, 7]}
				py={['8px', '16px']}
				px={['12px', '0']}
			>
				{email}
			</GridItem>
			<GridItem
				fontWeight='semibold'
				colSpan={[10, 3]}
				px={['12px', '32px']}
				py={['8px', '16px']}
			>
				Password
			</GridItem>
			<GridItem
				color='purple'
				colSpan={[10, 7]}
				py={['8px', '16px']}
				px={['12px', '0']}
			>
				******
			</GridItem>
		</>
	);
};
