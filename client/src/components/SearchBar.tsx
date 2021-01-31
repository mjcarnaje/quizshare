import React, { useState } from 'react';
import {
	Box,
	Input,
	InputGroup,
	InputLeftElement,
	useColorModeValue,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

interface SearchBarProps {
	getQuery: (text: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ getQuery }) => {
	const [text, setText] = useState('');

	return (
		<Box w='50%' my='30px'>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					getQuery(text);
				}}
			>
				<InputGroup
					size='lg'
					boxShadow='base'
					variant='ghost'
					borderRadius='md'
				>
					<InputLeftElement
						pointerEvents='none'
						children={<SearchIcon color='gray.300' />}
					/>
					<Input
						onChange={(e) => setText(e.target.value)}
						value={text}
						type='text'
						fontFamily='inter'
						placeholder='Search the quizzes'
						_focus={{ shadow: 'outline' }}
						bg={useColorModeValue('white', 'rgb(32, 32, 32)')}
					/>
				</InputGroup>
			</form>
		</Box>
	);
};
