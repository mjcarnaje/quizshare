import React from 'react';
import { useRouter } from 'next/dist/client/router';
import {
	Button,
	Box,
	Text,
	Container as ChakraContainter,
} from '@chakra-ui/react';
import { MainContainer } from '../../../layouts/MainContainer';
import { withApollo } from '../../../utils/withApollo';

interface TakeQuizProps {}

const TakeQuiz: React.FC<TakeQuizProps> = ({}) => {
	const router = useRouter();
	return (
		<MainContainer>
			<ChakraContainter
				maxW={['100%', '100%', '820px']}
				boxShadow='md'
				borderRadius='md'
			>
				<Button onClick={() => router.push('/')}>Home</Button>
			</ChakraContainter>
		</MainContainer>
	);
};

export default withApollo({ ssr: true })(TakeQuiz);
