import React, { useEffect } from "react";

import QuestionCard from "@components/cards/create/QuestionCard";
import Container from "@components/ui/Container";
import MainContainer from "@components/ui/MainContainer";
import { QuizInput, useCreateQuizMutation } from "@generated/graphql";
import withApollo from "@utils/withApollo";
import { CloudinaryContext } from "cloudinary-react";
import { useRouter } from "next/dist/client/router";
import {
  FieldArrayMethodProps,
  FormProvider,
  useFieldArray,
  useForm,
} from "react-hook-form";
import { v4 as uuid } from "uuid";

import FormInput from "../../components/inputs/FormInput";
import errorMapper from "../../utils/errorMapper";

const CreateQuiz = () => {
  const router = useRouter();
  const [createQuiz, { loading }] = useCreateQuizMutation();
  const methods = useForm<QuizInput>({
    defaultValues: {
      questions: [],
      quizPhoto: "",
      results: [],
      tags: [],
    },
  });

  const {
    control,
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = methods;

  const { fields, append, remove } = useFieldArray({
    control,
    name: "questions",
  });

  const onSubmit = async (data: QuizInput) => {
    try {
      const { errors } = await createQuiz({
        variables: { quizInput: data },
        update: (cache) => {
          cache.evict({ fieldName: "quizzes" });
        },
      });

      if (!errors) {
        router.push("/");
      }
    } catch (err) {
      errorMapper(err, setError);
    }
  };

  const addQuestion = (options?: FieldArrayMethodProps) => {
    append(
      {
        id: uuid(),
        question: "",
        choices: [],
        answer: undefined,
        explanation: "",
        hint: "",
      },
      options
    );
  };

  useEffect(() => {
    if (fields.length === 0) {
      addQuestion({ shouldFocus: false });
    }
  }, []);

  return (
    <CloudinaryContext cloudName={process.env.CLOUDINARY_CLOUD_NAME}>
      <MainContainer title="Create Quiz">
        <Container
          showSearchBar={false}
          header={
            <div className="flex flex-row items-center justify-between flex-grow px-4">
              <h1>Create Quiz</h1>

              <button
                type="button"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:border-blue-300"
              >
                Publish
              </button>
            </div>
          }
        >
          <main className="relative flex-1 overflow-y-auto focus:outline-none">
            <div className="py-6">
              <div className="max-w-4xl px-4 mx-auto sm:px-6 md:px-8">
                <FormProvider {...methods}>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <FormInput
                      placeholder="Title..."
                      error={errors.title}
                      {...register("title", { required: true })}
                    />
                    <FormInput
                      version="auto-resize"
                      placeholder="Description..."
                      error={errors.description}
                      {...register("description", { required: true })}
                    />

                    <div className="my-4 space-y-4">
                      {fields.map((question, questionIdx) => {
                        return (
                          <QuestionCard
                            key={question.id}
                            {...{ question, questionIdx, control, register }}
                            isDisabled={fields.length < 2}
                            questionRemove={remove}
                            errors={errors.questions?.[questionIdx]}
                          />
                        );
                      })}
                    </div>
                    <div className="flex items-center justify-end">
                      <button
                        type="button"
                        onClick={() => addQuestion({ shouldFocus: true })}
                        className="flex px-2 py-1 rounded hover:bg-gray-200 focus:outline-none"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6 mr-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
                          />
                        </svg>
                        Add Question
                      </button>
                    </div>
                    <div className="mt-4">
                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full px-4 py-3 text-white bg-black rounded-md focus:outline-none font-inter"
                      >
                        {loading ? "...Loading" : "Save"}
                      </button>
                    </div>
                  </form>
                </FormProvider>
              </div>
            </div>
          </main>
        </Container>
      </MainContainer>
    </CloudinaryContext>
  );
};

export default withApollo({ ssr: false })(CreateQuiz);
