import {
	Button,
	Flex,
	Heading,
	HStack,
	useColorModeValue,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';
import { useMeQuery } from '../generated/graphql';
import { isServer } from '../utils/isServer';
import { DarkModeSwitch } from './DarkModeSwitch';
import { UserMenu } from './UserMenu';

export const NavBar: React.FC = () => {
	const bgColor = useColorModeValue(
		'rgb(255, 255, 255, .90)',
		'rgb(32, 32, 32, .90)'
	);
	const navBarShadow = useColorModeValue('xs', 'sm');
	const buttonColorScheme = useColorModeValue('purple', 'gray');
	const logoColor = useColorModeValue('purple.500', 'purple.400');

	const { data } = useMeQuery({ skip: isServer() });

	let body;

	if (!data?.me) {
		body = (
			<>
				<NextLink href='login'>
					<Button
						size='sm'
						colorScheme={buttonColorScheme}
						variant='ghost'
						fontSize={16}
					>
						Login
					</Button>
				</NextLink>
				<NextLink href='register'>
					<Button
						size='sm'
						colorScheme={buttonColorScheme}
						variant='outline'
						fontSize={16}
					>
						Sign Up
					</Button>
				</NextLink>
			</>
		);
	} else {
		body = <UserMenu {...data.me} />;
	}
	return (
		<Flex
			justify='space-between'
			w='full'
			py={4}
			px={16}
			bg={bgColor}
			boxShadow={navBarShadow}
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
					color={logoColor}
					cursor='pointer'
					lineHeight='22px'
					pb='6px'
					my='auto'
				>
					QuizShare
				</Heading>
			</NextLink>
			<HStack spacing={4}>
				<DarkModeSwitch />
				{body}
			</HStack>
		</Flex>
	);
};
