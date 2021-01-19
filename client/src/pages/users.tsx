import { Heading } from '@chakra-ui/react';
import React from 'react';
import { MainContainer } from '../layouts/MainContainer';
import { withApollo } from '../utils/withApollo';

interface usersProps {}

const Users: React.FC<usersProps> = ({}) => {
	return (
		<MainContainer>
			<Heading>Users</Heading>
		</MainContainer>
	);
};

export default withApollo({ ssr: true })(Users);
