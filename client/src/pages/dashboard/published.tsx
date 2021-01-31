import { Button, useColorModeValue } from '@chakra-ui/react';
import Head from 'next/head';
import React from 'react';
import { QuizzesCards } from '../../components/QuizzesCards';
import { useMeQuizzesQuery } from '../../generated/graphql';
import { DashboardContainer } from '../../layouts/DashboardContainer';
import { MainContainer } from '../../layouts/MainContainer';
import { withApollo } from '../../utils/withApollo';

const Published: React.FC = () => {
	const buttonColorScheme = useColorModeValue('purple', 'gray');

	const { data, loading, fetchMore, variables, error } = useMeQuizzesQuery({
		variables: {
			limit: 4,
			cursor: null,
		},
		notifyOnNetworkStatusChange: true,
	});

	return (
		<MainContainer>
			<Head>
				<title>Published | Dashboard</title>
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
			</Head>
			<DashboardContainer display='grid' justifyItems='center'>
				<QuizzesCards
					quizzes={data?.meQuizzes.meQuizzes}
					isLoading={loading}
					isError={error}
				/>
				{data && data.meQuizzes.meHasMore && (
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
										data.meQuizzes.meQuizzes[
											data.meQuizzes.meQuizzes.length - 1
										].created_at,
								},
							})
						}
						isLoading={loading}
					>
						Load more
					</Button>
				)}
			</DashboardContainer>
		</MainContainer>
	);
};

export default withApollo({ ssr: true })(Published);
