import {
	Button,
	Spinner,
	useBreakpointValue,
	useColorModeValue,
} from '@chakra-ui/react';
import moment from 'moment';
import React from 'react';
import { Container } from '../components/Container';
import { QuizBox } from '../components/QuizBox';
import { useQuizzesQuery } from '../generated/graphql';
import { useIsAuth } from '../utils/useIsAuth';
import { withApollo } from '../utils/withApollo';

const Index: React.FC = () => {
	const buttonColorScheme = useColorModeValue('purple', 'gray');
	const descriptionCharacter = useBreakpointValue({ base: 172, md: 250 });

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
			<Container h='100vh' justify='center'>
				<Spinner color='purple.500' />;
			</Container>
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
		<Container minH='100vh'>
			{data?.quizzes.quizzes.map((quiz) => {
				const { description, created_at, id } = quiz;

				let date, desc;

				const moreThan250Characters = description.length > 250;

				if (moreThan250Characters) {
					desc = `${description.slice(0, descriptionCharacter)}...`;
				} else {
					desc = description;
				}

				const parsedCreateAt = new Date(parseInt(created_at));

				const oneDayAgo = moment(parsedCreateAt)
					.fromNow(true)
					.includes('day' || 'week' || 'month' || 'year');

				if (oneDayAgo) {
					date = moment(parsedCreateAt).format('ll');
				} else {
					date = `${moment(parsedCreateAt).fromNow(true)} ago`;
				}

				return <QuizBox key={id} quiz={quiz} date={date} desc={desc} />;
			})}
			{data && data.quizzes.hasMore && (
				<Button
					size='sm'
					colorScheme={buttonColorScheme}
					variant='ghost'
					fontSize={16}
					my='20px'
					onClick={() => {
						fetchMore({
							variables: {
								limit: variables?.limit,
								cursor:
									data.quizzes.quizzes[data.quizzes.quizzes.length - 1]
										.created_at,
							},
						});
					}}
					isLoading={loading}
				>
					Load more
				</Button>
			)}
		</Container>
	);
};

export default withApollo({ ssr: true })(Index);
