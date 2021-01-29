import { Button, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { QuizBox } from '../components/QuizBox';
import { QuizBoxLoading } from '../components/QuizBoxLoading';
import { useQuizzesQuery } from '../generated/graphql';
import { MainContainer } from '../layouts/MainContainer';
import { useIsAuth } from '../utils/useIsAuth';
import { withApollo } from '../utils/withApollo';
import Head from 'next/head';

const Index: React.FC = () => {
	const buttonColorScheme = useColorModeValue('purple', 'gray');

	useIsAuth();

	const { data, loading, fetchMore, variables, error } = useQuizzesQuery({
		variables: {
			limit: 4,
			cursor: null,
		},
		notifyOnNetworkStatusChange: true,
	});

	if (!data && loading) {
		return (
			<MainContainer display='grid' justifyItems='center'>
				<QuizBoxLoading />
				<QuizBoxLoading />
				<QuizBoxLoading />
			</MainContainer>
		);
	}

	if (!loading && !data) {
		return (
			<div>
				<div>you got query failed for some reason</div>
				<div>{error?.message}</div>
			</div>
		);
	}

	return (
		<MainContainer display='grid' justifyItems='center'>
			<Head>
				<title>QuizShare</title>
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
			</Head>
			{data?.quizzes.quizzes.map((quiz) => {
				return <QuizBox key={quiz.id} quiz={quiz} />;
			})}
			{loading && (
				<>
					<QuizBoxLoading />
					<QuizBoxLoading />
				</>
			)}
			{data && data.quizzes.hasMore && (
				<Button
					size='sm'
					colorScheme={buttonColorScheme}
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
