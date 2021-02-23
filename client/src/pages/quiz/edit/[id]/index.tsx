import { Skeleton, AspectRatio, Box } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useQuizToUpdateQuery } from '../../../../generated/graphql';
import { MainContainer } from '../../../../layouts/MainContainer';
import { QuizContainer } from '../../../../layouts/QuizContainer';
import { SubContainer } from '../../../../layouts/SubContainer';
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
		if (data?.quiz_to_update) {
			dispatch(fetchDataForEdit(data.quiz_to_update));
			router.push(`/quiz/edit/${id}/settings`, undefined, { shallow: true });
		}
	}, [data]);

	return (
		<MainContainer>
			<QuizContainer type='update' quizId={router.query?.id as string}>
				<SubContainer w='764px' my='0'>
					<Skeleton opacity='.4' mb='20px'>
						<AspectRatio ratio={16 / 9} w='full'>
							<Box />
						</AspectRatio>
					</Skeleton>
					<Skeleton height='12px' w='85px' mb='8px' opacity='.3' />
					<Skeleton height='32px' w='full' mb='20px' opacity='.2' />
					<Skeleton height='12px' w='96px' mb='8px' opacity='.3' />
					<Skeleton height='100px' w='full' mb='20px' opacity='.2' />
					<Skeleton height='12px' w='98px' mb='8px' opacity='.3' />
					<Skeleton height='30px' w='full' mb='20px' opacity='.2' />
				</SubContainer>
			</QuizContainer>
		</MainContainer>
	);
}

export default withApollo({ ssr: false })(EditQuiz);
