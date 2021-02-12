import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { withApollo } from '../../../../utils/withApollo';
import { useQuizToUpdateQuery } from '../../../../generated/graphql';
import { removeTypename } from '../../../../utils/removeTypename';
import { useDispatch } from 'react-redux';
import {
	setQuestions,
	setResults,
	setSettings,
} from '../../../../store/quizSlice';

const EditQuiz: React.FC = () => {
	const router = useRouter();
	const id = parseInt(router.query.id as string);
	const dispatch = useDispatch();

	const { data, loading } = useQuizToUpdateQuery({
		variables: {
			quiz_id: id,
		},
	});

	if (loading && !data) {
		return <pre>loading...</pre>;
	}

	const toUpdateData = removeTypename(data?.quizToUpdate!);

	useEffect(() => {
		dispatch(
			setSettings({
				title: toUpdateData.title,
				description: toUpdateData.description,
				quiz_photo: toUpdateData?.quiz_photo,
			})
		);
		dispatch(setQuestions(toUpdateData.questions));
		dispatch(setResults(toUpdateData?.results));

		setTimeout(() => {
			router.push(`/quiz/edit/${id}/settings`);
		}, 3000);
	}, [toUpdateData]);

	return <div></div>;
};

export default withApollo({ ssr: true })(EditQuiz);
