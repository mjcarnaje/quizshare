import React from 'react';
import { Container } from '../../components/Container';
import { useRouter } from 'next/dist/client/router';
import { withApollo } from '../../utils/withApollo';

interface UserProps {}

const User: React.FC<UserProps> = ({}) => {
	const router = useRouter();
	return <Container>{router.query.username}</Container>;
};

export default withApollo({ ssr: true })(User);
