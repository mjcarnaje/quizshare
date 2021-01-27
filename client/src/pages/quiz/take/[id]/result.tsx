import React, { useContext, useEffect } from 'react';
import { MainContainer } from '../../../../layouts/MainContainer';
import { QuizResultContext, QuizResultType } from '../../../../store/context';
import { withApollo } from '../../../../utils/withApollo';
import { Avatar, Heading, Spinner, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';

interface ResultProps {}

const Result: React.FC<ResultProps> = ({}) => {
	const router = useRouter();

	const [, , , id] = router.asPath.split('/');

	const { quizResult, setQuizResult } = useContext(
		QuizResultContext
	) as QuizResultType;

	useEffect(() => {
		if (!quizResult) {
			router.replace(`/quiz/take/${id}`);
		}
		return () => {
			setQuizResult(null);
		};
	}, []);

	if (!quizResult) {
		return (
			<MainContainer
				display='flex'
				alignItems='center'
				justifyContent='center'
				h='100vh'
			>
				<Spinner />
			</MainContainer>
		);
	}

	const {
		score,
		current_total_questions,
		taker: {
			username,
			email,
			avatar,
			profile: { name },
		},
	} = quizResult;

	const percentage = ((score / current_total_questions) * 100).toFixed(1);

	return (
		<MainContainer>
			<pre>{JSON.stringify(quizResult, null, 2)}</pre>
			<Avatar src={avatar ?? ''} name={name} alt={username} size='xl' />
			<Text>{username}</Text>
			<Text>{email}</Text>
			<Heading>{`${percentage}%`}</Heading>
			<Text>{`You answered ${score} out of ${current_total_questions} correctly`}</Text>
		</MainContainer>
	);
};
export default withApollo({ ssr: true })(Result);
