import Head from 'next/head';
import React from 'react';
import Comments from '../../components/quiz/Comments';
import QuizHead from '../../components/quiz/QuizHead';
import { useSingleQuizQuery } from '../../generated/graphql';
import { MainContainer } from '../../layouts/MainContainer';
import { useGetIntId } from '../../utils/useGetIntId';
import { withApollo } from '../../utils/withApollo';

interface QuizProps {}

const Quiz: React.FC<QuizProps> = ({}) => {
	const quizId = useGetIntId();

	const {
		data: quizdata,
		loading: quizLoading,
		error: quizError,
	} = useSingleQuizQuery({
		variables: {
			quiz_id: quizId,
		},
	});

	if (quizError) {
		return <p>{quizError.message}</p>;
	}

	return (
		<MainContainer>
			<Head>
				<title>{quizdata?.quiz?.title}</title>
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
			</Head>
			<QuizHead data={quizdata?.quiz} quizLoading={quizLoading} />
			<Comments
				quiz_id={quizId}
				comments_count={quizdata?.quiz?.comments_count ?? 0}
			/>
		</MainContainer>
	);
};

export default withApollo({ ssr: true })(Quiz);
