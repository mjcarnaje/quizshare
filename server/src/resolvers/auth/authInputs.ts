import {
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
import { User } from "../../entity/User";
import { InputType, Field } from "type-graphql";
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
  @IsEmailAlreadyExist()
  email: string;

  @Field()
  @Length(3, 32)
  @IsUsernameAlreadyExist()
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
  usernameOrEmail: string;

  @Field()
  password: string;

  @Field()
  rememberMe: boolean;
}
