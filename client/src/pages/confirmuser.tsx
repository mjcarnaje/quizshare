import { Box, Heading } from '@chakra-ui/react';
import React from 'react';
import { Container } from '../components/Container';
import { withApollo } from '../utils/withApollo';

const ConfirmUser: React.FC = () => {
	return (
		<Container h='100vh'>
			<Box>
				<Heading>Check your email</Heading>
			</Box>
		</Container>
	);
};

export default withApollo({ ssr: false })(ConfirmUser);
