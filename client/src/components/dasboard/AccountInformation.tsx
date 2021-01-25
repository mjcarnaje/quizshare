import {
	AspectRatio,
	Avatar,
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
								Edit
							</Button>
						</Center>
					)}
				</AspectRatio>
			</GridItem>
			<GridItem colSpan={10}>
				<Divider mb='16px' />
			</GridItem>
			<GridItem
				colStart={1}
				colEnd={4}
				fontWeight='semibold'
				pl='32px'
				py='16px'
			>
				Profile Image
			</GridItem>
			<GridItem colStart={4} colEnd={11} color='purple' py='16px'>
				<Avatar name={name} size='xl' src={avatar || ''} />
			</GridItem>
			<GridItem
				colStart={1}
				colEnd={4}
				fontWeight='semibold'
				pl='32px'
				py='16px'
			>
				Username
			</GridItem>
			<GridItem colStart={4} colEnd={11} color='purple' py='16px'>
				{username}
			</GridItem>
			<GridItem
				colStart={1}
				colEnd={4}
				fontWeight='semibold'
				pl='32px'
				py='16px'
			>
				Email
			</GridItem>
			<GridItem colStart={4} colEnd={11} color='purple' py='16px'>
				{email}
			</GridItem>
			<GridItem
				colStart={1}
				colEnd={4}
				fontWeight='semibold'
				pl='32px'
				py='16px'
			>
				Password
			</GridItem>
			<GridItem colStart={4} colEnd={11} color='purple' py='16px'>
				******
			</GridItem>
		</>
	);
};
