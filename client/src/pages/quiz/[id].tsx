import { useRouter } from 'next/dist/client/router';
import React from 'react';
import { MainContainer } from '../../layouts/MainContainer';
import Comments from '../../components/single-quiz/Comments';
import SingleQuizHead from '../../components/single-quiz/SingleQuizHead';
import { useSingleQuizQuery } from '../../generated/graphql';
import { withApollo } from '../../utils/withApollo';

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
			<SingleQuizHead data={quizdata?.singleQuiz} quizLoading={quizLoading} />
			<Comments
				quiz_id={parseInt(router.query.id as string)}
				commentsCount={quizdata?.singleQuiz?.commentsCount ?? 0}
			/>
		</MainContainer>
	);
};

export default withApollo({ ssr: true })(Quiz);
