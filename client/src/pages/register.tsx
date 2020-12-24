import React from 'react';
import { withApollo } from '../utils/withApollo';
import { Container } from '../components/Container';
import { Box, Text } from '@chakra-ui/react';

const Register: React.FC = () => {
	return (
		<Container height='100vh'>
			<Box>
				<Text>Register</Text>
			</Box>
		</Container>
	);
};

export default withApollo({ ssr: false })(Register);
