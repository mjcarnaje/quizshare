import {
	Button,
	Flex,
	Heading,
	HStack,
	Text,
	useColorModeValue,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import React, { useEffect } from 'react';
import { useMeQuery } from '../generated/graphql';
import { isServer } from '../utils/isServer';
import { DarkModeSwitch } from './DarkModeSwitch';
import { UserMenu } from './UserMenu';
import { useRouter } from 'next/dist/client/router';

export const NavBar: React.FC = () => {
	const router = useRouter();

	const bgColor = useColorModeValue(
		'rgb(255, 255, 255, .90)',
		'rgb(32, 32, 32, .90)'
	);
	const navBarShadow = useColorModeValue('xs', 'sm');
	const buttonColorScheme = useColorModeValue('purple', 'gray');
	const logoColor = useColorModeValue('purple.500', 'purple.400');

	const linkColorHover = useColorModeValue('#000', '#fff');

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
		body = (
			<>
				{[
					{
						path: '/quiz/create',
						name: 'Create Quiz',
					},
					{ path: '/users', name: 'Users', icon: 'FaUsers' },
				].map(({ path, name }, i) => {
					return (
						<NextLink href={path} key={i}>
							<Text
								_hover={{
									color: router.pathname == path ? '' : linkColorHover,
								}}
								px='10px'
								transition='ease-in-out'
								transitionDuration='.1s'
								cursor='pointer'
								fontWeight={router.pathname == path ? 'semibold' : ''}
								color={router.pathname == path ? logoColor : ''}
								display={['none', 'none', 'inline-block']}
							>
								{name}
							</Text>
						</NextLink>
					);
				})}
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
