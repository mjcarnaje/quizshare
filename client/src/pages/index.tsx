import { Container } from '../components/Container';
import { Hero } from '../components/Hero';
import { withApollo } from '../utils/withApollo';

const Index: React.FC = () => {
	return (
		<Container height='100vh'>
			<Hero />
		</Container>
	);
};

export default withApollo({ ssr: true })(Index);
