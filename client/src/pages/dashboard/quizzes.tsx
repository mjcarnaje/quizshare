import React from 'react';
import { MainContainer } from '../../layouts/MainContainer';
import { DashboardContainer } from '../../layouts/DashboardContainer';
import { withApollo } from '../../utils/withApollo';
import { useMeQuizzesQuery } from '../../generated/graphql';
import { Button, Spinner, useColorModeValue } from '@chakra-ui/react';
import { QuizBox } from '../../components/QuizBox';

const Quizzes: React.FC = () => {
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
			<MainContainer
				flexGrow={1}
				display='flex'
				justifyContent='center'
				alignItems='center'
			>
				<DashboardContainer display='grid' justifyItems='center' w='full'>
					<Spinner color='purple.500' />;
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

export default withApollo({ ssr: true })(Quizzes);
