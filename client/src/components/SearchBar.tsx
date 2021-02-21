import { SearchIcon } from '@chakra-ui/icons';
import {
	Box,
	Flex,
	Input,
	InputGroup,
	InputLeftElement,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

export const SearchBar: React.FC = () => {
	const router = useRouter();

	const [text, setText] = useState('');

	return (
		<Flex justify='center' align='center' w='full' h='30vh'>
			<Box w='50%'>
				<form
					onSubmit={(e) => {
						e.preventDefault();
						router.push({
							pathname: '/',
							query: { q: text },
						});
					}}
				>
					<InputGroup size='lg' variant='filled' borderRadius='md'>
						<InputLeftElement
							pointerEvents='none'
							children={<SearchIcon color='gray.300' />}
						/>
						<Input
							onChange={(e) => setText(e.target.value)}
							value={text}
							type='text'
							placeholder='Search'
							_focus={{ shadow: 'outline' }}
						/>
					</InputGroup>
				</form>
			</Box>
		</Flex>
	);
};
