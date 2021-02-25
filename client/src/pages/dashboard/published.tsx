import { Button, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { QuizzesCards } from '../../components/quiz-cards/QuizzesCards';
import { useMeQuizzesQuery } from '../../generated/graphql';
import { DashboardContainer } from '../../layouts/DashboardContainer';
import { MainContainer } from '../../layouts/MainContainer';
import { withApollo } from '../../utils/withApollo';
import Meta from '../../components/Meta';

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
			<Meta title='Published | Dashboard' />

			<DashboardContainer display='grid' justifyItems='center'>
				<QuizzesCards
					quizzes={data?.me_quizzes.me_quizzes}
					isLoading={loading}
					isError={error}
				/>
				{data && data.me_quizzes.meHasMore && (
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
										data.me_quizzes.me_quizzes[
											data.me_quizzes.me_quizzes.length - 1
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
