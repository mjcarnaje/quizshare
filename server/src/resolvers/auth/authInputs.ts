import {
  IsBoolean,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  Length,
  MinLength,
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from "class-validator";
import { Field, InputType } from "type-graphql";
import { User } from "../../entity/User";
import { Gender } from "../../types/types";

@ValidatorConstraint({ async: true })
export class IsEmailAlreadyExistConstraint
  implements ValidatorConstraintInterface {
  validate(email: string) {
    return User.findOne({ where: { email } }).then((user) => {
      if (user) return false;
      return true;
    });
  }
}

function IsEmailAlreadyExist(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsEmailAlreadyExistConstraint,
    });
  };
}

@ValidatorConstraint({ async: true })
class IsUsernameAlreadyExistConstraint implements ValidatorConstraintInterface {
  validate(username: string) {
    return User.findOne({ where: { username } }).then((user) => {
      if (user) return false;
      return true;
    });
  }
}

function IsUsernameAlreadyExist(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsUsernameAlreadyExistConstraint,
    });
  };
}

@ValidatorConstraint({ name: "IsPasswordMatched" })
export class IsPasswordMatchedConstraint
  implements ValidatorConstraintInterface {
  validate(value: any, args: ValidationArguments) {
    const [relatedPropertyName] = args.constraints;
    const relatedValue = (args.object as any)[relatedPropertyName];
    return value === relatedValue;
  }
}

function IsPasswordMatched(
  property: string,
  validationOptions?: ValidationOptions
) {
  return (object: any, propertyName: string) => {
    registerDecorator({
      target: object.constructor,
      propertyName,
      options: validationOptions,
      constraints: [property],
      validator: IsPasswordMatchedConstraint,
    });
  };
}

@InputType()
export class SignUpInput {
  @Field()
  @Length(3, 72)
  @IsEmail()
  @IsEmailAlreadyExist({ message: "Email address is already taken" })
  email: string;

  @Field()
  @Length(3, 32)
  @IsUsernameAlreadyExist({ message: "Username is already taken" })
  username: string;

  @Field()
  @MinLength(6)
  password: string;

  @Field()
  @IsPasswordMatched("password")
  confirmPassword: string;

  @Field()
  @Length(3, 32)
  firstName: string;

  @Field()
  @Length(3, 32)
  lastName: string;

  @Field()
  @IsNotEmpty()
  birthday: string;

  @Field()
  @IsEnum(Gender, { message: "Gender is required" })
  gender: Gender;
}

@InputType()
export class SignInInput {
  @Field()
  @MinLength(3)
  usernameOrEmail: string;

  @Field()
  @MinLength(3)
  password: string;

  @Field()
  @IsBoolean()
  rememberMe: boolean;
}
