import React from "react";

import Input from "@components/inputs/Input";
import Select from "@components/inputs/Select";
import MainContainer from "@components/ui/MainContainer";
import {
  MeDocument,
  MeQuery,
  SignUpInput,
  useSignUpMutation,
} from "@generated/graphql";
import errorMapper from "@utils/errorMapper";
import withApollo from "@utils/withApollo";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import { useForm } from "react-hook-form";

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
        variables: { signUpInput: values },
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
    <MainContainer title="Sign Up">
      <div className="flex items-center justify-center w-full px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex-1 max-w-md mx-auto space-y-8">
          <h2 className="text-4xl font-extrabold text-center text-gray-900 md:text-5xl ">
            Sign up to create your account
          </h2>
          <div className="p-6 mt-8 space-y-4 bg-white rounded-md shadow-md sm:p-8 md:p-14">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
              <Input<SignUpInput>
                type="email"
                label="Email"
                name="email"
                error={errors.email}
                register={register}
                required
              />
              <Input<SignUpInput>
                type="text"
                label="Username"
                name="username"
                error={errors.username}
                register={register}
                required
              />
              <Input<SignUpInput>
                type="password"
                label="Password"
                name="password"
                error={errors.password}
                register={register}
                required
              />
              <Input<SignUpInput>
                type="password"
                label="Confirm password"
                name="confirmPassword"
                error={errors.confirmPassword}
                register={register}
                required
              />
              <Input<SignUpInput>
                type="text"
                label="First name"
                name="firstName"
                error={errors.firstName}
                register={register}
                required
              />
              <Input<SignUpInput>
                type="text"
                label="Last name"
                name="lastName"
                error={errors.lastName}
                register={register}
                required
              />
              <Input<SignUpInput>
                type="date"
                label="Birthday"
                name="birthday"
                error={errors.birthday}
                register={register}
                required
              />
              <Select<SignUpInput>
                label="Gender"
                name="gender"
                options={["Male", "Female"]}
                register={register}
                required
              />

              <div>
                <button className="relative flex justify-center w-full px-4 py-2 mt-4 text-sm font-medium text-white bg-black border border-transparent rounded-md group hover:bg-gray-900 focus:outline-none">
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
              <Link href="https://api-quizshare.herokuapp.com/auth/google">
                <a className="flex items-center justify-center w-full px-3 py-2 bg-white rounded-lg shadow-md">
                  <img
                    className="w-6 h-6"
                    src="./google-logo.svg"
                    alt="google-logo"
                  />
                </a>
              </Link>
              <Link href="https://api-quizshare.herokuapp.com/auth/facebook">
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
    </MainContainer>
  );
};

export default withApollo({ ssr: false })(SignUpPage);
