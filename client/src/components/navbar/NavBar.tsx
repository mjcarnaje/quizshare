import {
	Box,
	Button,
	Flex,
	Heading,
	HStack,
	List,
	Text,
	ListItem,
	useColorModeValue,
} from '@chakra-ui/react';
import { useRouter } from 'next/dist/client/router';
import NextLink from 'next/link';
import React from 'react';
import { useMeQuery } from '../../generated/graphql';
import { isServer } from '../../utils/isServer';
import { DarkModeSwitch } from '../DarkModeSwitch';
import { UserMenu } from './UserMenu';

interface MainNavLinkProps {
	href: string;
}

const MainNavLink: React.FC<MainNavLinkProps> = ({ href, children }) => {
	const { pathname } = useRouter();
	const [, path1, path2] = href.split('/');

	const active = pathname.includes(path1 || path2);

	return (
		<NextLink href={href} passHref>
			<Box
				bg={
					active
						? useColorModeValue('purple.50', 'rgba(255, 255, 255, 0.04)')
						: ''
				}
				rounded='lg'
				mx='10px'
				px='20px'
				_hover={{
					bg: useColorModeValue('purple.50', 'rgba(255, 255, 255, 0.04)'),
				}}
			>
				<Text
					cursor='pointer'
					as='a'
					fontSize='md'
					fontWeight={active ? 'semibold' : ''}
					transitionProperty='colors'
					transitionDuration='200ms'
					color={
						active ? useColorModeValue('purple.500', 'gray.100') : 'gray.500'
					}
					_hover={{ color: useColorModeValue('purple.500', 'gray.100') }}
					fontFamily='inter'
				>
					{children}
				</Text>
			</Box>
		</NextLink>
	);
};

const mainNavLinks = [
	{
		icon: null,
		href: '/quiz/create/settings',
		label: 'Create Quiz',
	},
	{
		icon: null,
		href: '/users',
		label: 'Users',
	},
];

export const NavBar: React.FC = () => {
	const { data } = useMeQuery({ skip: isServer() });

	let body;

	if (!data?.me) {
		body = (
			<>
				<NextLink href='login'>
					<Button
						size='sm'
						colorScheme={useColorModeValue('purple', 'gray')}
						variant='ghost'
						fontSize={16}
					>
						Login
					</Button>
				</NextLink>
				<NextLink href='register'>
					<Button
						size='sm'
						colorScheme={useColorModeValue('purple', 'gray')}
						variant='outline'
						fontSize={16}
					>
						Sign Up
					</Button>
				</NextLink>
			</>
		);
	} else {
		body = (
			<>
				<List display='flex'>
					{mainNavLinks.map((item) => (
						<ListItem key={item.label}>
							<MainNavLink href={item.href}>{item.label}</MainNavLink>
						</ListItem>
					))}
				</List>
				<UserMenu {...data.me} />
			</>
		);
	}

	return (
		<Flex
			justify='space-between'
			w='full'
			py={4}
			px={[3, 6, 12, 24]}
			bg={useColorModeValue('rgb(255, 255, 255, .90)', 'rgb(32, 32, 32, .90)')}
			boxShadow={useColorModeValue('xs', 'sm')}
			position='sticky'
			left='0'
			right='0'
			top='0'
			zIndex='2'
		>
			<NextLink href='/'>
				<Heading
					as='h1'
					fontSize={28}
					fontWeight='sm'
					fontFamily='berkshire'
					color={useColorModeValue('purple.500', 'purple.400')}
					cursor='pointer'
					lineHeight='22px'
					pb='6px'
					my='auto'
				>
					QuizShare
				</Heading>
			</NextLink>
			<HStack spacing={6}>
				<DarkModeSwitch
					aria-label='Toggle color mode'
					display={['none', 'none', 'inline-block']}
				/>
				{body}
			</HStack>
		</Flex>
	);
};
