import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import Router from 'next/router';
import NProgress from 'nprogress';
import '../styles/nprogress.css';
import { UserProvider } from '../store/context';
import theme from '../theme';

NProgress.configure({
	showSpinner: false,
});

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

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
