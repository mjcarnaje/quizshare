import { MiddlewareFn } from 'type-graphql';
import { MyContext } from 'src/types/MyContext';

export const isAuthenticated: MiddlewareFn<MyContext> = async (
	{ context },
	next
) => {
	if (!context.req.session!.user_id) {
		throw new Error('Not Authorized');
	}
	return next();
};
