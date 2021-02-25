import React from 'react';
import Meta from '../../components/Meta';
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
			<Meta title={`${quizdata?.quiz?.title}`} />

			<QuizHead data={quizdata?.quiz} quizLoading={quizLoading} />
			<Comments
				quiz_id={quizId}
				comments_count={quizdata?.quiz?.comments_count ?? 0}
			/>
		</MainContainer>
	);
};

export default withApollo({ ssr: true })(Quiz);
