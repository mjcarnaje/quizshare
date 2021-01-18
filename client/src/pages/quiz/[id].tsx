import { Box } from '@chakra-ui/react';
import { useRouter } from 'next/dist/client/router';
import React from 'react';
import { Container } from '../../components/Container';
import SingleQuizComments from '../../components/SingleQuizComments';
import SingleQuizHead from '../../components/SingleQuizHead';
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
		<Container>
			<SingleQuizHead data={quizData?.singleQuiz} quizLoading={quizLoading} />

			<Box mb='36px' w={['100%', '100%', '820px']}>
				<SingleQuizComments quiz_id={parseInt(router.query.id as string)} />
			</Box>
		</Container>
	);
};

export default withApollo({ ssr: true })(Quiz);
