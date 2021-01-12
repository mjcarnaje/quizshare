import { ChakraProvider } from '@chakra-ui/react';
import theme from '../theme';
import { AppProps } from 'next/app';
import { UserProvider } from '../context/context';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider resetCSS theme={theme}>
			<UserProvider>
				<Component {...pageProps} />
			</UserProvider>
		</ChakraProvider>
	);
}

export default MyApp;
