import React from 'react';
import NextLink from 'next/link';
import { Flex, Heading, HStack, Button } from '@chakra-ui/react';

const NavBar = () => {
	return (
		<Flex
			justify='space-between'
			w='full'
			py={4}
			px={12}
			bg='white'
			boxShadow='sm'
		>
			<NextLink href='/'>
				<Heading
					as='h1'
					size='lg'
					fontWeight='sm'
					fontFamily='berkshire'
					color='purple.500'
				>
					QuizShare
				</Heading>
			</NextLink>
			<HStack spacing={4}>
				<NextLink href='register'>
					<Button colorScheme='purple' variant='outline'>
						Sign Up
					</Button>
				</NextLink>
				<NextLink href='login'>
					<Button colorScheme='purple' variant='outline'>
						Login
					</Button>
				</NextLink>
			</HStack>
		</Flex>
	);
};

export default NavBar;
