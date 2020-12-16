import { MyContext } from 'src/types/MyContext';
import { MiddlewareFn } from 'type-graphql';

export const isAuthenticated: MiddlewareFn<MyContext> = async (
	{ context },
	next
) => {
	if (!context.req.session!.userId) {
		throw new Error('Not Authorized');
	}
	return next();
};
