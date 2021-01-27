import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import Router from 'next/router';
import NProgress from 'nprogress';
import '../styles/nprogress.css';
import theme from '../theme';
import { QuizResultProvider } from '../store/context';

NProgress.configure({
	showSpinner: false,
});

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider resetCSS theme={theme}>
			<QuizResultProvider>
				<Component {...pageProps} />
			</QuizResultProvider>
		</ChakraProvider>
	);
}

export default MyApp;
