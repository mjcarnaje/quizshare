import {
	AspectRatio,
	Button,
	Center,
	Text,
	useColorModeValue,
} from '@chakra-ui/react';
import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { QuizzesCards } from '../components/quiz-cards/QuizzesCards';
import { useSearchedQuizzesQuery } from '../generated/graphql';
import { MainContainer } from '../layouts/MainContainer';
import { useIsAuth } from '../utils/useIsAuth';
import { withApollo } from '../utils/withApollo';

const Search: React.FC = () => {
	const {
		push,
		query: { q },
	} = useRouter();
	useIsAuth();
	const [query, setQuery] = useState<string>('');

	const {
		data,
		loading,
		fetchMore,
		variables,
		error,
	} = useSearchedQuizzesQuery({
		variables: {
			limit: 5,
			cursor: null,
			query: query ?? '',
		},
		notifyOnNetworkStatusChange: true,
	});

	useEffect(() => {
		if (q && typeof q === 'string') {
			setQuery(q);
		}
	}, [q]);

	return (
		<MainContainer display='grid' justifyItems='center' withSearchBar>
			<Head>
				<title>QuizShare</title>
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
			</Head>
			<QuizzesCards
				quizzes={data?.searched_quizzes.quizzes}
				isLoading={loading}
				isError={error}
			/>
			{!data?.searched_quizzes.has_more &&
				data?.searched_quizzes.quizzes.length === 0 && (
					<Center flexDirection='column' mt='20px' mb='60px'>
						<AspectRatio ratio={1} minW='320px'>
							<Image src={'/no-result.svg'} layout='fill' />
						</AspectRatio>
						<Text mb='10px' fontSize='24px' fontWeight='700'>
							No results found
						</Text>
						<Text mb='10px'>
							It seems we can’t find any results based on your search.
						</Text>
						<Button
							variant='ghost'
							colorScheme='purple'
							onClick={() => push('/')}
						>
							Go to home
						</Button>
					</Center>
				)}
			{data && data.searched_quizzes.has_more && (
				<Button
					size='sm'
					colorScheme={useColorModeValue('purple', 'gray')}
					variant='ghost'
					fontSize={16}
					my='20px'
					onClick={() =>
						fetchMore({
							variables: {
								limit: variables?.limit,
								cursor:
									data.searched_quizzes.quizzes[
										data.searched_quizzes.quizzes.length - 1
									].created_at,
							},
						})
					}
					isLoading={loading}
				>
					Load more
				</Button>
			)}
		</MainContainer>
	);
};

export default withApollo({ ssr: true })(Search);
