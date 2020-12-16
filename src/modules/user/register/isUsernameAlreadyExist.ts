import { User } from '../../../entity/User';
import {
	registerDecorator,
	ValidationOptions,
	ValidatorConstraint,
	ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ async: true })
export class isUsernameAlreadyExistConstraint
	implements ValidatorConstraintInterface {
	validate(username: string) {
		return User.findOne({ where: { username } }).then((user) => {
			if (user) return false;
			return true;
		});
	}
}

export function isUsernameAlreadyExist(validationOptions?: ValidationOptions) {
	return function (object: Object, propertyName: string) {
		registerDecorator({
			target: object.constructor,
			propertyName: propertyName,
			options: validationOptions,
			constraints: [],
			validator: isUsernameAlreadyExistConstraint,
		});
	};
}
