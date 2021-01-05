import { Heading } from '@chakra-ui/react';
import React from 'react';
import { Container } from '../components/Container';
import { withApollo } from '../utils/withApollo';

interface usersProps {}

const Users: React.FC<usersProps> = ({}) => {
	return (
		<Container>
			<Heading>Users</Heading>
		</Container>
	);
};

export default withApollo({ ssr: true })(Users);
