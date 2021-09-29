import { AuthenticationError, UserInputError } from "apollo-server-express";
import * as bcrypt from "bcryptjs";
import { Arg, Ctx, Mutation, Resolver } from "type-graphql";
import { getConnection } from "typeorm";
import { User } from "../../entity";
import { IContext } from "../../types";
import { getRole } from "../../utils";
import { SignInInput, SignUpInput } from "./auth.inputs";

@Resolver(User)
export class AuthResolver {
  @Mutation(() => User)
  async signUp(
    @Arg("signUpInput") signUpInput: SignUpInput,
    @Ctx() ctx: IContext
  ): Promise<User> {
    const { email, username, password, firstName, lastName, birthday, gender } =
      signUpInput;

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
        birthday: new Date(birthday),
        gender,
        role: getRole(email),
      })
      .returning("*")
      .execute();

    const user = result.raw[0];

    ctx.req.session.userId = user.id;

    return user;
  }

  @Mutation(() => User, { nullable: true })
  async signIn(
    @Arg("SignInInput") { usernameOrEmail, password, rememberMe }: SignInInput,
    @Ctx() ctx: IContext
  ): Promise<User | null> {
    const user = await User.findOne(
      usernameOrEmail.includes("@")
        ? { email: usernameOrEmail }
        : { username: usernameOrEmail }
    );

    if (!user) {
      throw new AuthenticationError("User not found");
    }

    if (!user.password) {
      throw new AuthenticationError("User uses oauth login only");
    }

    const valid = await bcrypt.compare(password, user.password);

    if (!valid) {
      throw new UserInputError("Wrong Credentials");
    }

    ctx.req.session.userId = user.id;

    // if remember me ~ the cookie expires in 10 years
    if (rememberMe) {
      ctx.req.session.cookie.maxAge = 1000 * 60 * 60 * 24 * 365 * 10;
    }

    return user;
  }

  @Mutation(() => Boolean)
  async logout(@Ctx() ctx: IContext): Promise<Boolean> {
    return new Promise((res, rej) =>
      ctx.req.session.destroy((err) => {
        if (err) {
          console.error(err);
          return rej(false);
        }
        ctx.req.logout();

        ctx.res.clearCookie(process.env.SESSION_NAME as string);

        return res(true);
      })
    );
  }
}
