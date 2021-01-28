import { Button, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { QuizBox } from '../../components/QuizBox';
import { QuizBoxLoading } from '../../components/QuizBoxLoading';
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

	if (!data && loading) {
		return (
			<MainContainer display='grid' justifyItems='center'>
				<DashboardContainer display='grid' justifyItems='center' w='full'>
					<QuizBoxLoading />
					<QuizBoxLoading />
					<QuizBoxLoading />
				</DashboardContainer>
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
		<MainContainer>
			<DashboardContainer display='grid' justifyItems='center'>
				{data?.meQuizzes.meQuizzes.map((quiz) => {
					return <QuizBox key={quiz.id} quiz={quiz} />;
				})}
				{loading && (
					<>
						<QuizBoxLoading />
						<QuizBoxLoading />
					</>
				)}
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
