import {
	AspectRatio,
	Avatar,
	Button,
	Divider,
	GridItem,
	Image,
	Spinner,
	Text,
} from '@chakra-ui/react';
import React from 'react';
import { FiEdit } from 'react-icons/fi';
import { useMeQuery } from '../generated/graphql';

interface AccountInformationProps {}

export const AccountInformation: React.FC<AccountInformationProps> = ({}) => {
	const { data, loading, error } = useMeQuery();

	if (!data && loading) {
		return <Spinner />;
	}

	if (!data && !loading) {
		return <div>error: {error?.message}</div>;
	}

	const {
		email,
		avatar,
		username,
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
				<Button rightIcon={<FiEdit />} colorScheme='purple' variant='ghost'>
					Edit
				</Button>
			</GridItem>
			<GridItem colSpan={10}>
				<Divider />
			</GridItem>
			<GridItem colSpan={10} p='5px'>
				<AspectRatio maxW='full' ratio={16 / 5}>
					<Image
						src='https://bit.ly/naruto-sage'
						alt='naruto'
						objectFit='cover'
					/>
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
				Example
			</GridItem>
		</>
	);
};
