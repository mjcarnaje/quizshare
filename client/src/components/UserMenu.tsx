import { useApolloClient } from '@apollo/client';
import { HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import {
	Avatar,
	Menu,
	MenuButton,
	MenuDivider,
	MenuItem,
	MenuList,
	Text,
	useColorMode,
	useColorModeValue,
	VStack,
} from '@chakra-ui/react';
import { useRouter } from 'next/dist/client/router';
import React from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { FiLogOut, FiUsers } from 'react-icons/fi';
import { IoDocumentsOutline } from 'react-icons/io5';
import { TiDocumentAdd } from 'react-icons/ti';
import { useLogoutMutation, User } from '../generated/graphql';

export const UserMenu: React.FC<User> = ({
	email,
	avatar,
	profile: { name },
}) => {
	const { colorMode, toggleColorMode } = useColorMode();
	const isDark = colorMode === 'dark';
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
				<Avatar
					size='sm'
					name={name}
					src={avatar || ''}
					display={['none', 'none', 'inline-block']}
				/>
				<HamburgerIcon
					display={['inline-block', 'inline-block', 'none']}
					w='25px'
					h='25px'
				/>
			</MenuButton>
			<MenuList bg={bgColor} color={colorBody} w='232px'>
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
					<Text
						lineHeight='14px'
						fontSize='15px'
						wordBreak='break-all'
						textAlign='center'
						px='8px'
					>
						{`@${email.split('@')[0]}`}
					</Text>
				</MenuItem>
				<MenuDivider display={['block', 'block', 'none']} />
				<MenuItem
					display={['inline-flex', 'inline-flex', 'none']}
					icon={
						isDark ? (
							<MoonIcon fontSize='18px' color='inherit' />
						) : (
							<SunIcon fontSize='18px' color='inherit' />
						)
					}
					onClick={toggleColorMode}
				>
					{isDark ? 'Light mode' : 'Dark mode'}
				</MenuItem>
				{[
					{
						path: '/quiz/create',
						name: 'Create Quiz',
						icon: <TiDocumentAdd fontSize='18px' color='inherit' />,
					},
					{
						path: '/users',
						name: 'Users',
						icon: <FiUsers fontSize='18px' color='inherit' />,
					},
				].map(({ path, name, icon }, i) => (
					<MenuItem
						key={i}
						onClick={() => router.push(path)}
						display={['inline-flex', 'inline-flex', 'none']}
						icon={icon}
					>
						{name}
					</MenuItem>
				))}
				<MenuDivider />
				{[
					{
						path: '/dashboard/quizzes',
						name: 'Quizzes',
						icon: <IoDocumentsOutline fontSize='18px' color='inherit' />,
					},
					{
						path: '/dashboard/profile',
						name: 'Profile',
						icon: <AiOutlineUser fontSize='18px' color='inherit' />,
					},
				].map(({ path, name, icon }, i) => (
					<MenuItem key={i} onClick={() => router.push(path)} icon={icon}>
						{name}
					</MenuItem>
				))}
				<MenuDivider />
				<MenuItem
					icon={<FiLogOut fontSize='18px' color='inherit' />}
					onClick={async () => {
						await logout();
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
