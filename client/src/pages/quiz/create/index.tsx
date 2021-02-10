import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { withApollo } from '../../../utils/withApollo';

const CreateQuiz: React.FC = () => {
	const router = useRouter();
	useEffect(() => {
		router.replace('/quiz/create/settings');
	}, []);
	return null;
};

export default withApollo({ ssr: true })(CreateQuiz);
