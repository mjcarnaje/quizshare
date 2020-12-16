import { v4 } from 'uuid';
import {
	confirmationPrefix,
	forgotPasswordPrefix,
} from '../constant/redisPrefixes';
import { redis } from './../../redis';

export const confirmationRegistration = async (userId: number) => {
	const token = v4();

	await redis.set(confirmationPrefix + token, userId, 'ex', 60 * 60 * 24);

	return `http://localhost:3000/user/confirm/${token}`;
};

export const confirmationForgotPassword = async (userId: number) => {
	const token = v4();

	await redis.set(forgotPasswordPrefix + token, userId, 'ex', 60 * 60 * 24);

	return `http://localhost:3000/user/changepassword/${token}`;
};
