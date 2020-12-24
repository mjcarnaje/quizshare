import React from 'react';
import { withApollo } from '../utils/withApollo';
import { Container } from '../components/Container';
import { Box, Text } from '@chakra-ui/react';

const Login: React.FC = () => {
	return (
		<Container height='100vh'>
			<Box>
				<Text>Login</Text>
			</Box>
		</Container>
	);
};

export default withApollo({ ssr: false })(Login);
