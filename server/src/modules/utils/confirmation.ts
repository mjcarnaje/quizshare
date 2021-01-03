import { v4 } from 'uuid';
import { forgotPasswordPrefix } from '../constant/redisPrefixes';
import { redis } from '../../redis';

// export const confirmationRegistration = async (user_id: number) => {
// 	const token = v4();

// 	await redis.set(confirmationPrefix + token, user_id, 'ex', 60 * 60 * 24);

// 	return `http://localhost:3000/user/confirm/${token}`;
// };

export const confirmationForgotPassword = async (user_id: number) => {
	const token = v4();

	await redis.set(forgotPasswordPrefix + token, user_id, 'ex', 60 * 60 * 24);

	return `http://localhost:3000/user/changepassword/${token}`;
};
