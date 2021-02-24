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
	Skeleton,
	Button,
	Text,
	Spacer,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { HiMenuAlt3, HiOutlineFilter } from 'react-icons/hi';

interface SearchBarProps {
	quizzes_count?: number;
	resultsLoading?: boolean;
}

export const SearchBar: React.FC<SearchBarProps> = ({
	quizzes_count,
	resultsLoading,
}) => {
	const router = useRouter();

	const [text, setText] = useState('');
	const [sortBy, setSortBy] = useState<'DESC' | 'ASC'>('DESC');

	useEffect(() => {
		if (text) {
			router.push({
				pathname: '/search/',
				query: { q: text, sort_by: sortBy },
			});
		}
	}, [sortBy]);

	useEffect(() => {
		if (router.query.q === '') {
			router.push('/');
		}

		if (router.query.q) {
			setText(router.query.q as string);
		}
	}, [router.query]);

	return (
		<>
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
								pathname: '/search/',
								query: { q: text, sort_by: sortBy },
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
			{quizzes_count && (
				<Flex w={['100%', '460px', '820px']} align='center'>
					<Skeleton isLoaded={!resultsLoading}>
						<Text>
							Found <strong>{quizzes_count}</strong> results
						</Text>
					</Skeleton>
					<Spacer />
					<Flex align='center'>
						<Menu>
							<MenuButton as={Button} leftIcon={<HiMenuAlt3 />}>
								Sort By
							</MenuButton>
							<MenuList>
								{([
									{ title: 'Descending', value: 'DESC' },
									{ title: 'Ascending', value: 'ASC' },
								] as {
									title: string;
									value: 'DESC' | 'ASC';
								}[]).map(({ title, value }, i) => (
									<MenuItem key={i} onClick={() => setSortBy(value)}>
										{title}
									</MenuItem>
								))}
							</MenuList>
						</Menu>
					</Flex>
				</Flex>
			)}
		</>
	);
};
