import { useRouter } from 'next/router';
import { useEffect } from 'react';

function usePreventRouteChangeIf(
	unsavedWork: boolean,
	onRouteChangePrevented: () => void
) {
	const router = useRouter();

	useEffect(() => {
		const routeChangeStart = (url: string) => {
			if (router.asPath !== url && unsavedWork) {
				router.events.emit('routeChangeError');
				onRouteChangePrevented && onRouteChangePrevented();
				throw `Route change to "${url}" was aborted (this error can be safely ignored).`;
			}
		};

		router.events.on('routeChangeStart', routeChangeStart);

		return () => {
			router.events.off('routeChangeStart', routeChangeStart);
		};
	}, [onRouteChangePrevented, router.asPath, router.events, unsavedWork]);
}

export default usePreventRouteChangeIf;
