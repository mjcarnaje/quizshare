import { Text } from '@chakra-ui/react';
import React from 'react';
import { withApollo } from '../../../../utils/withApollo';

interface ResultProps {}

const Result: React.FC<ResultProps> = ({}) => {
	return <Text>Result</Text>;
};
export default withApollo({ ssr: true })(Result);
