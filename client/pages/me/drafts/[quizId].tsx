import React, { useEffect } from "react";

import QuestionCard from "@components/cards/create/QuestionCard";
import Container from "@components/ui/Container";
import MainContainer from "@components/ui/MainContainer";
import { QuizInput, useSaveQuizMutation } from "@generated/graphql";
import { PaperAirplaneIcon, SaveAsIcon } from "@heroicons/react/outline";
import { cleanTypeName } from "@utils/index";
import withApollo from "@utils/withApollo";
import { CloudinaryContext } from "cloudinary-react";
import { useRouter } from "next/router";
import {
  FieldArrayMethodProps,
  FormProvider,
  useFieldArray,
  useForm,
} from "react-hook-form";
import { v4 as uuid } from "uuid";

import Input from "../../../components/inputs/Input";
import TextareaAutoResize from "../../../components/inputs/TextareaAutoResize";
import {
  useGetQuizQuery,
  usePublishQuizMutation,
} from "../../../generated/graphql";
import errorMapper from "../../../utils/errorMapper";

interface Props {}

const DraftEditQuizPage: React.FC<Props> = () => {
  const router = useRouter();
  const quizId = router.query.quizId as string;

  const { data, loading: gettingInput } = useGetQuizQuery({
    variables: {
      quizId,
      isInput: true,
    },
  });

  const [saveQuiz, { loading: savingQuiz }] = useSaveQuizMutation();
  const [publishQuiz, { loading: publishingQuiz }] = usePublishQuizMutation();

  const methods = useForm<QuizInput>({
    defaultValues: {
      title: "",
      description: "",
      quizPhoto: null,
      questions: [],
      results: [],
      tags: [],
    },
  });

  const {
    control,
    register,
    handleSubmit,
    setError,
    reset,
    watch,
    formState: { errors },
  } = methods;

  const { fields, append, remove } = useFieldArray({
    control,
    name: "questions",
  });

  const onSubmit = async (data: QuizInput) => {
    try {
      const { data: quizData } = await saveQuiz({
        variables: { quizInput: data, quizId },
        update: (cache) => {
          cache.evict({ fieldName: "quizzes" });
        },
      });

      if (quizData?.saveQuiz.id) {
        router.replace(`/me/drafts/${quizData.saveQuiz.id}`);
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
    if (data?.getQuiz && !gettingInput) {
      reset(cleanTypeName(data.getQuiz) as QuizInput);
    }
  }, [data?.getQuiz, gettingInput]);

  console.log(watch());

  return (
    <CloudinaryContext cloudName={process.env.CLOUDINARY_CLOUD_NAME}>
      <MainContainer title={data?.getQuiz.title}>
        <Container
          showSearchBar={false}
          header={
            <div className="flex flex-row items-center justify-between flex-grow px-4">
              <div />
              <div className="inline-flex space-x-2">
                <div />
                <button
                  type="button"
                  onClick={handleSubmit(onSubmit)}
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-[#222831] bg-white border border-transparent rounded-md  hover:bg-gray-100 focus:outline-none "
                >
                  <SaveAsIcon className="w-5 h-5 mr-2 -ml-1" />
                  {savingQuiz ? "Saving" : "Save as draft"}
                </button>
                <button
                  type="button"
                  onClick={async () => {
                    try {
                      const { errors } = await publishQuiz({
                        variables: { quizId },
                      });

                      if (!errors) {
                        router.push("/");
                      }
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  className="inline-flex items-center px-4 py-2 text-sm font-medium border-[#222831] text-[#222831] bg-white border border-transparent rounded-md shadow-sm hover:bg-gray-200 focus:outline-none "
                >
                  <PaperAirplaneIcon className="w-5 h-5 mr-2 -ml-1" />
                  {publishingQuiz ? "Publishing" : "Publish"}
                </button>
              </div>
            </div>
          }
        >
          <main className="relative flex-1 overflow-y-auto focus:outline-none">
            <div className="py-6">
              <div className="max-w-4xl px-4 mx-auto sm:px-6 md:px-8">
                <FormProvider {...methods}>
                  <form>
                    <Input<QuizInput>
                      type="text"
                      name="title"
                      register={register}
                      required
                      error={errors.title}
                    />

                    <TextareaAutoResize<QuizInput>
                      name="description"
                      error={errors.description}
                      register={register}
                      required
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

export default withApollo({ ssr: true })(DraftEditQuizPage);
