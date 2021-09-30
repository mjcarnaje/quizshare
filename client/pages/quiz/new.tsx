import React from "react";

import Input from "@components/inputs/Input";
import Layout from "@components/layout/Layout";
import NestedLayout from "@components/layout/NestedLayout";
import { useCreateQuizMutation } from "@generated/graphql";
import { useUser } from "@utils/useUser";
import withApollo from "@utils/withApollo";
import { useRouter } from "next/dist/client/router";
import { SubmitHandler, useForm } from "react-hook-form";

type ITitle = { title: string };

const NewQuiz: React.FC = () => {
  const { user } = useUser();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ITitle>();

  const [createQuiz] = useCreateQuizMutation();

  const onSubmit: SubmitHandler<ITitle> = async (data) => {
    try {
      const { data: _data } = await createQuiz({
        variables: {
          title: data.title,
        },
      });
      if (_data?.createQuiz) {
        router.push(`/quiz/${_data.createQuiz.id}`);
      }
    } catch (err) {
      console.error(err);
    }
  };

  if (!user) {
    return (
      <Layout>
        <NestedLayout>
          <p>Loading...</p>
        </NestedLayout>
      </Layout>
    );
  }

  return (
    <Layout title="Create quiz">
      <NestedLayout>
        <div className="flex max-w-2xl px-4 mx-auto space-x-6 sm:px-6 md:px-8">
          <div className="flex-1 w-full">
            <div className="my-4 text-center">
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Create Quiz
              </h2>
              <p className="mt-4 text-lg leading-6 text-gray-500">
                Create a meaningful quiz.
              </p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input<ITitle>
                name="title"
                label="Title"
                placeholder="title.."
                register={register}
                error={errors.title}
                required
              />
            </form>
            <div className="mt-5 sm:mt-6 flex space-x-3">
              <button
                type="button"
                className="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 text-base font-medium text-red-500 hover:bg-gray-50 focus:outline-none sm:text-sm"
                onClick={() => router.push("/")}
                disabled={isSubmitting}
              >
                Cancel
              </button>
              <button
                type="button"
                className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
                onClick={handleSubmit(onSubmit)}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Loading" : "Create"}
              </button>
            </div>
          </div>
        </div>
      </NestedLayout>
    </Layout>
  );
};

export default withApollo({ ssr: true })(NewQuiz);
