import { Request, Response } from 'express';

export interface MyContext {
	req: Request & {
		session: {
			user_id?: any;
		};
	};
	res: Response & {
		session: {
			user_id?: any;
		};
	};
}
