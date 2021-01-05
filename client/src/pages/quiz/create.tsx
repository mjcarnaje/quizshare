import { Center } from '@chakra-ui/react';
import React from 'react';
import { Container } from '../../components/Container';
import { withApollo } from '../../utils/withApollo';

interface createQuizProps {}

const createQuiz: React.FC<createQuizProps> = ({}) => {
	return (
		<Container>
			<Center>Create sQuiz</Center>
		</Container>
	);
};

export default withApollo({ ssr: false })(createQuiz);
