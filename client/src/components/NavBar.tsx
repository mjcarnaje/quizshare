import { useApolloClient } from '@apollo/client';
import { Button, Flex, Heading, HStack, useColorMode } from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';
import { useLogoutMutation, useMeQuery } from '../generated/graphql';
import { isServer } from '../utils/isServer';
import { DarkModeSwitch } from './DarkModeSwitch';

export const NavBar: React.FC = () => {
	const { colorMode } = useColorMode();

	const bgColor = { light: 'white', dark: 'gray.800' };
	const navBarShadow = { light: 'sm', dark: 'md' };
	const buttonColor = { light: 'purple', dark: 'gray' };
	const logoColor = { light: 'purple.500', dark: 'purple.300' };

	const [logout, { loading: logoutLoading }] = useLogoutMutation();

	const apolloClient = useApolloClient();

	const { data, loading } = useMeQuery({ skip: isServer() });

	let body;

	if (loading) {
	} else if (!data?.me) {
		body = (
			<>
				<NextLink href='login'>
					<Button
						size='sm'
						colorScheme={buttonColor[colorMode]}
						variant='ghost'
						fontSize={16}
					>
						Login
					</Button>
				</NextLink>
				<NextLink href='register'>
					<Button
						size='sm'
						colorScheme={buttonColor[colorMode]}
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
				<Button
					size='sm'
					colorScheme={buttonColor[colorMode]}
					variant='ghost'
					fontSize={16}
					onClick={() => {
						logout();
						apolloClient.resetStore();
					}}
					isLoading={logoutLoading}
				>
					Logout
				</Button>
			</>
		);
	}
	return (
		<Flex
			justify='space-between'
			w='full'
			py={4}
			px={16}
			bg={bgColor[colorMode]}
			boxShadow={navBarShadow[colorMode]}
		>
			<NextLink href='/'>
				<Heading
					as='h1'
					fontSize={28}
					fontWeight='sm'
					fontFamily='berkshire'
					color={logoColor[colorMode]}
					cursor='pointer'
				>
					QuizShare
				</Heading>
			</NextLink>
			<HStack spacing={4}>{body}</HStack>
			<DarkModeSwitch />
		</Flex>
	);
};
