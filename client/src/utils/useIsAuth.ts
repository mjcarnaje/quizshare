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
		}
	}, [loading, data, router]);
};
