import React from "react";
import { useForm } from "react-hook-form";
import LoginInput from "../components/inputs/LoginInput";
import Layout from "../components/Layout";

export default function LoginPage() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    alert(JSON.stringify(data));
  };

  return (
    <Layout>
      <div className="flex items-center justify-center min-h-screen px-4 py-12 bg-gray-50 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-900">
              Sign in to your account
            </h2>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="p-4 mt-8 space-y-2 bg-white rounded-md shadow-md"
          >
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

            <div>
              <button
                type="submit"
                className="relative flex justify-center w-full px-4 py-2 mt-4 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md group hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}
