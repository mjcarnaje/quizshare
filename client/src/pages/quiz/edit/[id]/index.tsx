import { Center, Spinner } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useQuizToUpdateQuery } from '../../../../generated/graphql';
import { MainContainer } from '../../../../layouts/MainContainer';
import { QuizContainer } from '../../../../layouts/QuizContainer';
import { fetchDataForEdit, resetQuizState } from '../../../../store/quizSlice';
import { withApollo } from '../../../../utils/withApollo';

function EditQuiz() {
	const dispatch = useDispatch();
	const router = useRouter();
	const id = parseInt(router.query.id as string);

	const { data } = useQuizToUpdateQuery({
		variables: {
			quiz_id: id,
		},
	});

	useEffect(() => {
		dispatch(resetQuizState());
	}, []);

	useEffect(() => {
		if (data?.quizToUpdate) {
			dispatch(fetchDataForEdit(data.quizToUpdate));
			router.push(`/quiz/edit/${id}/settings`, undefined, { shallow: true });
		}
	}, [data]);

	return (
		<MainContainer>
			<QuizContainer type='update' quizId={router.query?.id as string}>
				<Center w='full'>
					<Spinner />
				</Center>
			</QuizContainer>
		</MainContainer>
	);
}

export default withApollo({ ssr: false })(EditQuiz);
