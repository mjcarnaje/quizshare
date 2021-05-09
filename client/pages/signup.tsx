import React from "react";

import FormInput from "@components/inputs/FormInput";
import Layout from "@components/Layout";
import {
  MeDocument,
  MeQuery,
  SignUpInput,
  useSignUpMutation,
} from "@generated/graphql";
import withApollo from "@lib/withApollo";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import { useForm } from "react-hook-form";

import FormSelect from "../components/inputs/FormSelect";
import errorMapper from "../utils/errorMapper";

const SignUpPage = () => {
  const router = useRouter();
  const [signUp, { loading }] = useSignUpMutation();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<SignUpInput>();

  const onSubmit = async (values: SignUpInput) => {
    try {
      const { data } = await signUp({
        variables: {
          signUpInput: values,
        },
        update: (cache, { data }) => {
          cache.writeQuery<MeQuery>({
            query: MeDocument,
            data: {
              __typename: "Query",
              me: data?.signUp,
            },
          });
        },
      });
      if (data?.signUp) {
        router.push("/");
      }
    } catch (err) {
      errorMapper(err, setError);
    }
  };

  return (
    <Layout title="Login" header={false}>
      <div className="flex items-center justify-center min-h-screen px-4 py-12 bg-gray-50 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <h2 className="text-5xl font-extrabold text-center text-gray-900 ">
            Sign up
          </h2>
          <div className="mt-8 space-y-4 bg-white rounded-md shadow-md py-14 px-14">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
              <FormInput
                name="email"
                label="Email"
                type="text"
                register={register}
                error={errors.email}
              />
              <FormInput
                name="username"
                label="Username"
                type="text"
                register={register}
                error={errors.username}
              />
              <FormInput
                name="password"
                label="Password"
                type="password"
                register={register}
                error={errors.password}
              />
              <FormInput
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                register={register}
                error={errors.confirmPassword}
              />
              <FormInput
                name="firstName"
                label="First Name"
                type="text"
                register={register}
                error={errors.firstName}
              />
              <FormInput
                name="lastName"
                label="Last Name"
                type="text"
                register={register}
                error={errors.lastName}
              />
              <FormInput
                name="birthday"
                label="Birthday"
                type="date"
                register={register}
                error={errors.birthday}
              />

              <FormSelect
                name="gender"
                label="Gender"
                options={["Male", "Female"]}
                register={register}
                error={errors.gender}
              />

              <div>
                <button
                  type="submit"
                  className="relative flex justify-center w-full px-4 py-2 mt-4 text-sm font-medium text-white bg-black border border-transparent rounded-md group hover:bg-gray-900 focus:outline-none"
                >
                  {loading ? "Loading..." : "Sign up"}
                </button>
              </div>
            </form>
            <div className="flex items-center justify-center flex-nowrap">
              <hr className="flex-grow" />
              <p className="mx-4 text-center">or sign up with</p>
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
                Do you have an account already?{" "}
                <Link href="/login">
                  <a className="font-semibold">Sign in</a>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default withApollo({ ssr: false })(SignUpPage);
