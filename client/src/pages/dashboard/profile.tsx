import React from 'react';
import { MainContainer } from '../../layouts/MainContainer';
import { DashboardContainer } from '../../layouts/DashboardContainer';
import { withApollo } from '../../utils/withApollo';

const Profile: React.FC = () => {
	return (
		<MainContainer>
			<DashboardContainer>profile</DashboardContainer>
		</MainContainer>
	);
};

export default withApollo({ ssr: true })(Profile);
