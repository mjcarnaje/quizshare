import { User } from "../../entity";
import { Field, InputType, Int, ObjectType } from "type-graphql";
import { UserRole } from "../../types/roles";
import { PageInfo } from "../quiz/quiz.types";

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
  search?: string;

  @Field(() => Int)
  limit: number;

  @Field(() => String, { nullable: true })
  cursor?: string;
}

@ObjectType()
export class PaginatedUsers {
  @Field(() => [User])
  users: User[];

  @Field(() => PageInfo)
  pageInfo: PageInfo;
}
