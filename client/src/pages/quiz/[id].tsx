import React from 'react';
import { Text } from '@chakra-ui/react';
import { useRouter } from 'next/dist/client/router';
import { Container } from '../../components/Container';
import { withApollo } from '../../utils/withApollo';

interface QuizProps {}

const Quiz: React.FC<QuizProps> = ({}) => {
	const router = useRouter();
	return (
		<Container>
			<Text>{router.query.id}</Text>
		</Container>
	);
};

export default withApollo({ ssr: true })(Quiz);
