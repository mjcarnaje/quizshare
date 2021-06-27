import React, { useEffect } from "react";

import QuestionCard from "@components/cards/create/QuestionCard";
import Container from "@components/ui/Container";
import MainContainer from "@components/ui/MainContainer";
import { QuizInput } from "@generated/graphql";
import withApollo from "@lib/withApollo";
import { FormProvider, useFieldArray, useForm } from "react-hook-form";
import { v4 as uuid } from "uuid";

const CreateQuiz = () => {
  const methods = useForm<QuizInput>({
    defaultValues: {
      title: "",
      description: "",
      questions: [],
      quizPhoto: "",
      results: [],
      tags: [],
    },
  });

  const { control, register, handleSubmit } = methods;

  const { fields, append, remove } = useFieldArray({
    control,
    name: "questions",
  });

  const onSubmit = (data: any) => {
    alert(JSON.stringify(data, null, 2));
  };

  const addQuestion = (shouldFocus: boolean) => {
    append(
      {
        id: uuid(),
        question: "",
        choices: [],
        answer: undefined,
        explanation: "",
        hint: "",
      },
      { shouldFocus }
    );
  };

  useEffect(() => {
    if (fields.length === 0) {
      addQuestion(false);
    }
  }, []);

  return (
    <MainContainer title="Create Quiz">
      <Container
        showSearchBar={false}
        headerJSX={
          <div className="flex flex-row items-center justify-between flex-grow px-4">
            <h1>Create Quiz</h1>
            <p>Saved</p>
          </div>
        }
      >
        <main className="relative flex-1 overflow-y-auto focus:outline-none">
          <div className="py-6">
            <div className="max-w-4xl px-4 mx-auto sm:px-6 md:px-8">
              <FormProvider {...methods}>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <textarea
                    maxLength={138}
                    placeholder="Title…"
                    className="w-full px-4 mt-2 mb-5 text-3xl font-bold leading-snug bg-transparent outline-none appearance-none resize-none"
                    {...register("title", { required: true })}
                  />
                  <input
                    type="text"
                    className="block w-full"
                    placeholder="Description"
                    {...register("description", { required: true })}
                  />

                  <div className="my-4 space-y-4">
                    {fields.map((question, idx) => {
                      return (
                        <QuestionCard
                          key={question.id}
                          {...{ question, control, register }}
                          deleteButtonDisabled={fields.length < 2}
                          questionIdx={idx}
                          questionRemove={remove}
                        />
                      );
                    })}
                  </div>
                  <button
                    type="button"
                    onClick={() => addQuestion(true)}
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
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
                      />
                    </svg>
                    Add Question
                  </button>
                </form>
              </FormProvider>
            </div>
          </div>
        </main>
      </Container>
    </MainContainer>
  );
};

export default withApollo({ ssr: false })(CreateQuiz);
