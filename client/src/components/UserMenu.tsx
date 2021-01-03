import { useApolloClient } from '@apollo/client';
import {
	Avatar,
	Menu,
	MenuButton,
	MenuDivider,
	MenuItem,
	MenuList,
	Text,
	useColorModeValue,
	VStack,
} from '@chakra-ui/react';
import { useRouter } from 'next/dist/client/router';
import React from 'react';
import { FiLogOut } from 'react-icons/fi';
import { IoDocumentsOutline } from 'react-icons/io5';
import { useLogoutMutation, User } from '../generated/graphql';

export const UserMenu: React.FC<User> = ({
	email,
	avatar,
	profile: { name },
}) => {
	const bgColor = useColorModeValue(
		'rgb(255, 255, 255, .90)',
		'rgb(32, 32, 32, .90)'
	);
	const colorBody = useColorModeValue('gray.600', '#BDBDBD');
	const colorTitle = useColorModeValue('gray.800', 'white');

	const router = useRouter();

	const [logout] = useLogoutMutation();

	const apolloClient = useApolloClient();

	return (
		<Menu>
			<MenuButton>
				<Avatar size='sm' name={name} src={avatar || ''} />
			</MenuButton>
			<MenuList bg={bgColor} color={colorBody}>
				<MenuItem as={VStack} cursor='pointer'>
					<Avatar size='xl' name={name} src={avatar || undefined} m='5px' />
					<Text
						fontWeight='700'
						color={colorTitle}
						lineHeight='1'
						fontSize='18px'
					>
						{name}
					</Text>
					<Text lineHeight='10px' fontSize='15px'>
						{email}
					</Text>
				</MenuItem>
				<MenuDivider />
				<MenuItem icon={<IoDocumentsOutline fontSize='18px' color='inherit' />}>
					Quizzes
				</MenuItem>
				<MenuDivider />
				<MenuItem
					icon={<FiLogOut fontSize='18px' color='inherit' />}
					onClick={() => {
						logout();
						router.push('/login');
						apolloClient.clearStore();
					}}
				>
					Logout
				</MenuItem>
			</MenuList>
		</Menu>
	);
};
