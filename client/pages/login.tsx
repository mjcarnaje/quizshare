import LoginInput from "@components/inputs/LoginInput";
import Layout from "@components/Layout";
import withApollo from "@lib/withApollo";
import { SignInInput } from "generated/graphql";
import { useRouter } from "next/dist/client/router";
import React from "react";
import { useForm } from "react-hook-form";
import { MeDocument, MeQuery, useSignInMutation } from "../generated/graphql";

const LoginPage = () => {
  const router = useRouter();
  const [signIn, { loading }] = useSignInMutation();
  const { register, handleSubmit } = useForm<SignInInput>();

  const onSubmit = async (values: SignInInput) => {
    try {
      const { data } = await signIn({
        variables: values,
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
      alert(JSON.stringify(err, null, 2));
    }
  };

  return (
    <Layout title="Login">
      <div className="flex items-center justify-center min-h-screen px-4 py-12 bg-gray-50 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h2 className="text-3xl font-extrabold text-center text-gray-900 ">
              Sign in to your account
            </h2>
          </div>
          <div className="py-16 mt-8 space-y-4 bg-white rounded-md shadow-md px-14">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
              <LoginInput
                name="usernameOrEmail"
                label="Email or username"
                type="text"
                register={register}
                required
              />
              <LoginInput
                name="password"
                label="Password"
                type="password"
                register={register}
                required
              />
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember_me"
                    name="remember_me"
                    type="checkbox"
                    className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                  />
                  <label
                    htmlFor="remember_me"
                    className="block ml-2 text-sm text-gray-900"
                  >
                    Remember me
                  </label>
                </div>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot your password?
                  </a>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="relative flex justify-center w-full px-4 py-2 mt-6 text-sm font-medium text-white bg-purple-600 border border-transparent rounded-md group hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                >
                  {loading ? "Loading..." : "Sign in"}
                </button>
              </div>
            </form>
            <div className="border" />
            <div className="space-y-2">
              <button className="flex items-center justify-center w-full px-3 py-2 bg-white border-2 border-gray-100 rounded-lg shadow focus:ring-offset-2 focus:outline-none focus:ring-2 focus:ring-purple-600">
                <img
                  className="w-6 h-6"
                  src="./google-logo.svg"
                  alt="google-logo"
                />
                <p className="ml-4 text-sm font-semibold">
                  Sign in with google
                </p>
              </button>
              <button className="flex items-center justify-center w-full px-3 py-2 bg-[#4267B2] rounded-lg shadow focus:ring-offset-2 focus:outline-none focus:ring-2 focus:ring-purple-600">
                <img
                  className="w-6 h-6"
                  src="./facebook-logo.svg"
                  alt="facebook-logo"
                />
                <p className="ml-4 text-sm font-semibold text-white">
                  Sign in with facebook
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default withApollo({ ssr: false })(LoginPage);
