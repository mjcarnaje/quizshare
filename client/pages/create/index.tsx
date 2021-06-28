import React, { useEffect } from "react";

import QuestionCard from "@components/cards/create/QuestionCard";
import Container from "@components/ui/Container";
import MainContainer from "@components/ui/MainContainer";
import { QuizInput } from "@generated/graphql";
import { useUploadPhoto } from "@utils/useUploadImage";
import withApollo from "@utils/withApollo";
import { CloudinaryContext } from "cloudinary-react";
import Image from "next/image";
import {
  FieldArrayMethodProps,
  FormProvider,
  useFieldArray,
  useForm,
} from "react-hook-form";
import { v4 as uuid } from "uuid";

const CreateQuiz = () => {
  const [uploadImage, { data, loading }] = useUploadPhoto();

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

  const onSubmit = (data: QuizInput) => {
    alert(JSON.stringify(data.title, null, 2));
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
              <p>Saved</p>
            </div>
          }
        >
          <main className="relative flex-1 overflow-y-auto focus:outline-none">
            <div className="py-6">
              <div className="max-w-4xl px-4 mx-auto sm:px-6 md:px-8">
                <FormProvider {...methods}>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    {data && <Image src={data} alt="picture" layout="fill" />}
                    {loading && <p>Loading...</p>}
                    <button type="button" onClick={uploadImage}>
                      Upload Image
                    </button>
                    <textarea
                      maxLength={138}
                      placeholder="Title…"
                      className="w-full px-4 mt-2 mb-5 text-3xl font-bold leading-snug border-gray-300 rounded-md outline-none appearance-none resize-none"
                      {...register("title", { required: true })}
                    />
                    <textarea
                      maxLength={280}
                      placeholder="Description"
                      className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm min-h-[120px]"
                      {...register("description", { required: true })}
                    />

                    <div className="my-4 space-y-4">
                      {fields.map((question, idx) => {
                        return (
                          <QuestionCard
                            key={question.id}
                            {...{ question, control, register }}
                            isDisabled={fields.length < 2}
                            questionIdx={idx}
                            questionRemove={remove}
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
                        className="w-full px-4 py-3 text-white bg-black rounded-md focus:outline-none font-inter"
                      >
                        Save
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
