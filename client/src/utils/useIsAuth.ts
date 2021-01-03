import { useMeQuery } from '../generated/graphql';
import { useRouter } from 'next/dist/client/router';
import { useEffect } from 'react';

export const useIsAuth = () => {
	const { data, loading } = useMeQuery();
	const router = useRouter();

	useEffect(() => {
		if (!loading && !data?.me) {
			router.replace('/login?next=' + router.pathname);
			// router.push('/login');
		} else if (!loading && !data?.me?.confirmed) {
			router.replace('/confirmuser?next=' + router.pathname);
		}
	}, [loading, data, router]);
};
