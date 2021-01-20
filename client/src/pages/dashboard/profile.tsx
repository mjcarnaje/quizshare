import { Grid } from '@chakra-ui/react';
import React from 'react';
import { AccountInformation } from '../../components/AccountInformation';
import { ProfileInformation } from '../../components/ProfileInformation';
import { DashboardContainer } from '../../layouts/DashboardContainer';
import { MainContainer } from '../../layouts/MainContainer';
import { withApollo } from '../../utils/withApollo';

const Profile: React.FC = () => {
	return (
		<MainContainer>
			<DashboardContainer>
				<Grid
					templateColumns='repeat(10, 1fr)'
					my='32px'
					boxShadow='md'
					borderRadius='8px'
					borderWidth='1px'
				>
					<AccountInformation />
				</Grid>
				<Grid
					templateColumns='repeat(10, 1fr)'
					my='32px'
					boxShadow='md'
					borderRadius='8px'
					borderWidth='1px'
				>
					<ProfileInformation />
				</Grid>
			</DashboardContainer>
		</MainContainer>
	);
};

export default withApollo({ ssr: true })(Profile);
