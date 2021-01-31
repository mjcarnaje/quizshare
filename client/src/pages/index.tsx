import { Button, useColorModeValue } from '@chakra-ui/react';
import Head from 'next/head';
import React, { useState } from 'react';
import { QuizzesCards } from '../components/QuizzesCards';
import { SearchBar } from '../components/SearchBar';
import { useQuizzesQuery } from '../generated/graphql';
import { MainContainer } from '../layouts/MainContainer';
import { useIsAuth } from '../utils/useIsAuth';
import { withApollo } from '../utils/withApollo';

const Index: React.FC = () => {
	const [query, setQuery] = useState<string | null>(null);

	useIsAuth();

	const { data, loading, fetchMore, variables, error } = useQuizzesQuery({
		variables: {
			limit: 4,
			cursor: null,
		},
		notifyOnNetworkStatusChange: true,
	});

	return (
		<MainContainer display='grid' justifyItems='center'>
			<Head>
				<title>QuizShare</title>
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
			</Head>
			<SearchBar getQuery={setQuery} />
			<QuizzesCards
				quizzes={data?.quizzes.quizzes}
				isLoading={loading}
				isError={error}
			/>
			{data && data.quizzes.hasMore && (
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
									data.quizzes.quizzes[data.quizzes.quizzes.length - 1]
										.created_at,
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

export default withApollo({ ssr: true })(Index);
