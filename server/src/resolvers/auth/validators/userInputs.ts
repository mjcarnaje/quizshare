import { InputType, Field } from "type-graphql";
import { Gender } from "../../../types/types";

@InputType()
export class SignUpInput {
  @Field()
  email: string;

  @Field()
  username: string;

  @Field()
  password: string;

  @Field()
  confirmPassword: string;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  birthday: string;

  @Field()
  gender: Gender;
}
