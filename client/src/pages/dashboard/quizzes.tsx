import React from 'react';
import { MainContainer } from '../../layouts/MainContainer';
import { DashboardContainer } from '../../layouts/DashboardContainer';
import { withApollo } from '../../utils/withApollo';

const Quizzes: React.FC = () => {
	return (
		<MainContainer>
			<DashboardContainer>Dashboard/Quizzes</DashboardContainer>
		</MainContainer>
	);
};

export default withApollo({ ssr: true })(Quizzes);
