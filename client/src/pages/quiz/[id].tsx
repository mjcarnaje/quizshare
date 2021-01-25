import { useRouter } from 'next/dist/client/router';
import React from 'react';
import { MainContainer } from '../../layouts/MainContainer';
import SingleQuizComments from '../../components/single-quiz/SingleQuizComments';
import SingleQuizHead from '../../components/single-quiz/SingleQuizHead';
import { useSingleQuizQuery } from '../../generated/graphql';
import { withApollo } from '../../utils/withApollo';

interface QuizProps {}

const Quiz: React.FC<QuizProps> = ({}) => {
	const router = useRouter();

	const {
		data: quizData,
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
			<SingleQuizHead data={quizData?.singleQuiz} quizLoading={quizLoading} />
			<SingleQuizComments quiz_id={parseInt(router.query.id as string)} />
		</MainContainer>
	);
};

export default withApollo({ ssr: true })(Quiz);
