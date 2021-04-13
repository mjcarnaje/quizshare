import { UserInputError } from "apollo-server-errors";
import * as bcrypt from "bcryptjs";
import { Arg, Ctx, Mutation, Query, Resolver } from "type-graphql";
import { getConnection } from "typeorm";
import { User } from "../../entity/User";
import { MyContext } from "../../types/types";
import { SignUpInput } from "./userInputs";
import { validateSignUp } from "./userValidation";
import { userCheckIfExist } from "./userCheckIfExist";

@Resolver(User)
export class UserResolver {
  @Query(() => User, { nullable: true })
  async me(@Ctx() ctx: MyContext): Promise<User | undefined | null> {
    if (ctx.req.session.userId) {
      return null;
    }

    return User.findOne(ctx.req.session.userId);
  }

  @Mutation(() => User)
  async signUp(
    @Arg("signUpInput") signUpInput: SignUpInput,
    @Ctx() ctx: MyContext
  ): Promise<User> {
    const {
      email,
      username,
      password,
      firstName,
      lastName,
      birthday,
      gender,
    } = signUpInput;

    const { valid: validInputs, errors: errorInputs } = validateSignUp(
      signUpInput
    );

    if (!validInputs) {
      throw new UserInputError("Error", { errorInputs });
    }

    const { valid, errors } = await userCheckIfExist(signUpInput);

    if (!valid) {
      throw new UserInputError("Error", { errors });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await getConnection()
      .createQueryBuilder()
      .insert()
      .into(User)
      .values({
        username,
        email,
        password: hashedPassword,
        firstName,
        lastName,
        birthday,
        gender,
      })
      .returning("*")
      .execute();

    const user = result.raw[0];

    ctx.req.session.userId = user.id;

    return user;
  }
}
