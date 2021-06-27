import React from "react";

import FormInput from "@components/inputs/FormInput";
import MainContainer from "@components/ui/MainContainer";
import {
  MeDocument,
  MeQuery,
  SignInInput,
  useSignInMutation,
} from "@generated/graphql";
import withApollo from "@lib/withApollo";
import errorMapper from "@utils/errorMapper";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import { useForm } from "react-hook-form";

import { FormErrors } from "../constant/index";

const LoginPage = () => {
  const router = useRouter();
  const [signIn, { loading }] = useSignInMutation();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<SignInInput & FormErrors>();

  const onSubmit = async (values: SignInInput) => {
    try {
      const { data } = await signIn({
        variables: { ...values, rememberMe: true },
        update: (cache, { data }) => {
          cache.writeQuery<MeQuery>({
            query: MeDocument,
            data: {
              __typename: "Query",
              me: data?.signIn,
            },
          });
        },
      });

      if (data?.signIn) {
        router.push("/");
      }
    } catch (err) {
      errorMapper(err, setError);
    }
  };

  return (
    <MainContainer title="Login">
      <div className="flex items-center justify-center w-full min-h-screen px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex-1 max-w-md mx-auto space-y-8">
          <h2 className="text-4xl font-extrabold text-center text-gray-900 md:text-5xl ">
            Sign in to your account
          </h2>
          <div className="p-6 mt-8 space-y-4 bg-white rounded-md shadow-md sm:p-8 md:p-14">
            {errors.GENERAL_ERROR && (
              <div className="flex items-center justify-center py-2 border border-red-500 rounded-md bg-red-50">
                <p className="block">{errors.GENERAL_ERROR.message}</p>
              </div>
            )}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
              <FormInput
                type="text"
                label="Email or username"
                error={errors.usernameOrEmail}
                {...register("usernameOrEmail", { required: true })}
              />
              <FormInput
                type="password"
                label="Password"
                error={errors.password}
                {...register("password", { required: true })}
              />
              <div className="flex items-center justify-between">
                <div />
                <div>
                  <a className="text-xs font-medium text-black hover:text-gray-900">
                    Forgot your password?
                  </a>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="relative flex justify-center w-full px-4 py-2 mt-4 text-sm font-medium text-white bg-black border border-transparent rounded-md group hover:bg-gray-900 focus:outline-none"
                >
                  {loading ? "Loading..." : "Sign in"}
                </button>
              </div>
            </form>
            <div className="flex items-center justify-center flex-nowrap">
              <hr className="flex-grow" />
              <p className="mx-4 text-center">or sign in with</p>
              <hr className="flex-grow " />
            </div>
            <div className="flex space-x-2">
              <Link href="http://localhost:4000/auth/google">
                <a className="flex items-center justify-center w-full px-3 py-2 bg-white rounded-lg shadow-md">
                  <img
                    className="w-6 h-6"
                    src="./google-logo.svg"
                    alt="google-logo"
                  />
                </a>
              </Link>
              <Link href="http://localhost:4000/auth/facebook">
                <a className="flex items-center justify-center w-full px-3 py-2 bg-[#4267B2] rounded-lg shadow-md">
                  <img
                    className="w-6 h-6"
                    src="./facebook-logo.svg"
                    alt="facebook-logo"
                  />
                </a>
              </Link>
            </div>
            <div className="flex justify-center">
              <p className="text-sm">
                Don't have an account yet?{" "}
                <Link href="/signup">
                  <a className="font-semibold">Sign up</a>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </MainContainer>
  );
};

export default withApollo({ ssr: false })(LoginPage);
