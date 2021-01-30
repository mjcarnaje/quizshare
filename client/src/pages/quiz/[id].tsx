import { useRouter } from 'next/dist/client/router';
import React from 'react';
import Comments from '../../components/single-quiz/Comments';
import SingleQuizHead from '../../components/single-quiz/SingleQuizHead';
import { useSingleQuizQuery } from '../../generated/graphql';
import { MainContainer } from '../../layouts/MainContainer';
import { withApollo } from '../../utils/withApollo';
import Head from 'next/head';

interface QuizProps {}

const Quiz: React.FC<QuizProps> = ({}) => {
	const router = useRouter();

	const {
		data: quizdata,
		loading: quizLoading,
		error: quizError,
	} = useSingleQuizQuery({
		variables: {
			quiz_id: parseInt(router.query.id as string),
		},
	});

	if (quizError) {
		return <pre>{quizError.message}</pre>;
	}

	return (
		<MainContainer>
			<Head>
				<title>{quizdata?.singleQuiz?.title}</title>
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
			</Head>
			<SingleQuizHead data={quizdata?.singleQuiz} quizLoading={quizLoading} />
			<Comments
				quiz_id={parseInt(router.query.id as string)}
				comments_count={quizdata?.singleQuiz?.comments_count ?? 0}
			/>
		</MainContainer>
	);
};

export default withApollo({ ssr: true })(Quiz);
