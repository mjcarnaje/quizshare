import { Grid } from '@chakra-ui/react';
import React from 'react';
import { AccountInformation } from '../../components/dasboard/AccountInformation';
import { ProfileInformation } from '../../components/dasboard/ProfileInformation';
import { DashboardContainer } from '../../layouts/DashboardContainer';
import { MainContainer } from '../../layouts/MainContainer';
import { withApollo } from '../../utils/withApollo';
import Head from 'next/head';

const Profile: React.FC = () => {
	return (
		<MainContainer>
			<Head>
				<title>Profile | Dashboard</title>
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
			</Head>
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
