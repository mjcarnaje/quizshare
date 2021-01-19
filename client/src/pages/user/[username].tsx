import React from 'react';
import { MainContainer } from '../../layouts/MainContainer';
import { useRouter } from 'next/dist/client/router';
import { withApollo } from '../../utils/withApollo';

interface UserProps {}

const User: React.FC<UserProps> = ({}) => {
	const router = useRouter();
	return <MainContainer>{router.query.username}</MainContainer>;
};

export default withApollo({ ssr: true })(User);
