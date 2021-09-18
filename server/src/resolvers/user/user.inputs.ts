import { Field, InputType, Int } from "type-graphql";
import { UserRole } from "../../types";
import { Maybe } from "../../types";

@InputType()
export class ChangeRoleInput {
  @Field(() => String)
  userId: string;

  @Field(() => UserRole)
  newRole: UserRole;
}

@InputType()
export class UsersInput {
  @Field(() => String, { nullable: true })
  search: Maybe<string>;

  @Field(() => Int)
  limit: number;

  @Field(() => String, { nullable: true })
  cursor: Maybe<string>;
}
