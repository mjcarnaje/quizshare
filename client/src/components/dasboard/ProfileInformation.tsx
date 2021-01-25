import {
	GridItem,
	Button,
	Divider,
	VStack,
	Flex,
	Icon,
	Box,
	Center,
	chakra,
	Text,
	Spinner,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import {
	FaFacebookSquare,
	FaTwitterSquare,
	FaYoutubeSquare,
} from 'react-icons/fa';
import { FiEdit } from 'react-icons/fi';
import { useMeQuery } from '../../generated/graphql';
import { ProfileInformationEdit } from './ProfileInformationEdit';

interface ProfileInformationProps {}

export const ProfileInformation: React.FC<ProfileInformationProps> = ({}) => {
	const [editMode, setEditMode] = useState(false);

	const { data, loading, error } = useMeQuery();

	if (!data && loading) {
		return <Spinner />;
	}

	if (!data && !loading) {
		return <div>error: {error?.message}</div>;
	}

	if (editMode) {
		return (
			<ProfileInformationEdit
				profInfoProps={data!.me!}
				setEditMode={setEditMode}
			/>
		);
	}

	const {
		profile: { name, birthday, bio, country, social },
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
				<Text px='16px'>Profile Information</Text>
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
				<Divider mb='16px' />
			</GridItem>
			<GridItem
				colStart={1}
				colEnd={4}
				fontWeight='semibold'
				pl='32px'
				py='16px'
			>
				Name
			</GridItem>
			<GridItem colStart={4} colEnd={11} color='purple' py='16px'>
				{name}
			</GridItem>
			<GridItem
				colStart={1}
				colEnd={4}
				fontWeight='semibold'
				pl='32px'
				py='16px'
			>
				Bio
			</GridItem>
			<GridItem colStart={4} colEnd={11} color='purple' py='16px'>
				{bio ? (
					bio
				) : (
					<Button
						onClick={() => setEditMode(true)}
						variant='ghost'
						colorScheme='purple'
						size='sm'
					>
						Add bio
					</Button>
				)}
			</GridItem>
			<GridItem
				colStart={1}
				colEnd={4}
				fontWeight='semibold'
				pl='32px'
				py='16px'
			>
				Birthday
			</GridItem>
			<GridItem colStart={4} colEnd={11} color='purple' py='16px'>
				{birthday ?? ''}
			</GridItem>
			<GridItem
				colStart={1}
				colEnd={4}
				fontWeight='semibold'
				pl='32px'
				py='16px'
			>
				Country
			</GridItem>
			<GridItem colStart={4} colEnd={11} color='purple' py='16px'>
				{country ? (
					country
				) : (
					<Button
						onClick={() => setEditMode(true)}
						variant='ghost'
						colorScheme='purple'
						size='sm'
					>
						Add country
					</Button>
				)}
			</GridItem>
			<GridItem
				colStart={1}
				colEnd={4}
				fontWeight='semibold'
				pl='32px'
				py='16px'
			>
				Social
			</GridItem>
			<GridItem colStart={4} colEnd={11} py='16px'>
				<VStack spacing='16px' align='flex-start'>
					<Flex align='center'>
						<Icon as={FaFacebookSquare} boxSize='36px' color='#3b5999' />
						<Box ml='24px'>
							{social?.facebook ? (
								<Text>{social.facebook}</Text>
							) : (
								<Button
									onClick={() => setEditMode(true)}
									variant='ghost'
									colorScheme='purple'
									size='sm'
								>
									Add facebook information
								</Button>
							)}
						</Box>
					</Flex>
					<Flex align='center'>
						<Icon as={FaTwitterSquare} boxSize='36px' color='#55acee' />
						<Box ml='24px'>
							{social?.twitter ? (
								<Text>{social.twitter}</Text>
							) : (
								<Button
									onClick={() => setEditMode(true)}
									variant='ghost'
									colorScheme='purple'
									size='sm'
								>
									Add twitter information
								</Button>
							)}
						</Box>
					</Flex>
					<Flex align='center'>
						<Center boxSize='36px'>
							<chakra.img
								boxSize='31.5px'
								src='/instagram.svg'
								alt='Instagram Logo'
							/>
						</Center>
						<Box ml='24px'>
							{social?.instagram ? (
								<Text>{social.instagram}</Text>
							) : (
								<Button
									onClick={() => setEditMode(true)}
									variant='ghost'
									colorScheme='purple'
									size='sm'
								>
									Add instagram information
								</Button>
							)}
						</Box>
					</Flex>
					<Flex align='center'>
						<Icon as={FaYoutubeSquare} boxSize='36px' color='#cd201f' />
						<Box ml='24px'>
							{social?.youtube ? (
								<Text>{social.youtube}</Text>
							) : (
								<Button
									onClick={() => setEditMode(true)}
									variant='ghost'
									colorScheme='purple'
									size='sm'
								>
									Add youtube information
								</Button>
							)}
						</Box>
					</Flex>
				</VStack>
			</GridItem>
		</>
	);
};
