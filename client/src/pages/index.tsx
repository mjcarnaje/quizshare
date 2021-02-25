import { Button, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import Meta from '../components/Meta';
import { QuizzesCards } from '../components/quiz-cards/QuizzesCards';
import { SearchBar } from '../components/SearchBar';
import { useQuizzesQuery } from '../generated/graphql';
import { MainContainer } from '../layouts/MainContainer';
import { useIsAuth } from '../utils/useIsAuth';
import { withApollo } from '../utils/withApollo';

const Index: React.FC = () => {
	useIsAuth();

	const { data, loading, fetchMore, variables, error } = useQuizzesQuery({
		variables: {
			limit: 5,
			cursor: null,
		},
		notifyOnNetworkStatusChange: true,
	});

	return (
		<MainContainer display='grid' justifyItems='center'>
			<Meta title='Home | QuizShare' />

			<SearchBar />
			<QuizzesCards
				quizzes={data?.quizzes.quizzes}
				isLoading={loading}
				isError={error}
			/>
			{data && data.quizzes.has_more && (
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
