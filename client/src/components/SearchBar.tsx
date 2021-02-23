import { CloseIcon, SearchIcon } from '@chakra-ui/icons';
import {
	Flex,
	Input,
	InputGroup,
	InputRightElement,
	IconButton,
	MenuButton,
	Menu,
	MenuItem,
	MenuList,
	useColorModeValue,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { HiOutlineFilter } from 'react-icons/hi';

export const SearchBar: React.FC = () => {
	const router = useRouter();

	const [text, setText] = useState('');

	return (
		<Flex
			justify='center'
			align='center'
			w='full'
			h='25vh'
			bg={useColorModeValue('', '')}
			mb='10vh'
		>
			<Flex align='center' w='50%'>
				<form
					style={{ flex: 1 }}
					onSubmit={(e) => {
						e.preventDefault();
						router.push({
							pathname: '/',
							query: { q: text },
						});
					}}
				>
					<InputGroup size='lg' variant='outline'>
						<Input
							onChange={(e) => setText(e.target.value)}
							value={text}
							type='text'
							placeholder='Search...'
							borderRadius='lg'
							boxShadow='sm'
							fontFamily='poppins'
							background={useColorModeValue('#fff', 'rgb(38, 38, 38)')}
							_focus={{
								outline: 'none',
								boxShadow: 'md',
								background: useColorModeValue('#fff', 'rgb(38, 38, 38)'),
							}}
							_hover={{
								background: useColorModeValue('#fff', 'rgb(38, 38, 38)'),
							}}
							flex='1'
						/>
						<InputRightElement
							cursor={text.length === 0 ? '' : 'pointer'}
							onClick={() => {
								if (text.length === 0) return;
								setText('');
							}}
							children={
								text.length === 0 ? (
									<SearchIcon color='gray.300' />
								) : (
									<CloseIcon fontSize='14px' color='gray.300' />
								)
							}
						/>
					</InputGroup>
				</form>

				<Menu>
					<MenuButton
						as={IconButton}
						background={useColorModeValue('#fff', 'rgb(38, 38, 38)')}
						boxShadow='sm'
						color='gray.300'
						aria-label='Filter'
						borderRadius='lg'
						borderWidth='1px'
						icon={<HiOutlineFilter />}
						_focus={{
							outline: 'none',
							boxShadow: 'md',
							background: useColorModeValue('#fff', 'rgb(38, 38, 38)'),
						}}
						_hover={{
							background: useColorModeValue('#fff', 'rgb(38, 38, 38)'),
						}}
						_active={{
							background: useColorModeValue('#fff', 'rgb(38, 38, 38)'),
						}}
						size='lg'
						ml='15px'
					/>
					<MenuList w='232px'>
						<MenuItem>Users</MenuItem>
						<MenuItem>Quizzes</MenuItem>
					</MenuList>
				</Menu>
			</Flex>
		</Flex>
	);
};
