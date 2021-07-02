import React, { useEffect } from "react";

import QuestionCard from "@components/cards/create/QuestionCard";
import Container from "@components/ui/Container";
import MainContainer from "@components/ui/MainContainer";
import { QuizInput, useSaveQuizMutation } from "@generated/graphql";
import {
  PaperAirplaneIcon,
  SaveAsIcon,
  PlusCircleIcon,
} from "@heroicons/react/outline";
import withApollo from "@utils/withApollo";
import { CloudinaryContext } from "cloudinary-react";
import { useRouter } from "next/router";
import { Droppable, DragDropContext } from "react-beautiful-dnd";
import {
  FieldArrayMethodProps,
  FormProvider,
  useFieldArray,
  useForm,
} from "react-hook-form";
import { v4 as uuid } from "uuid";

import Input from "../../../components/inputs/Input";
import TextareaAutoResize from "../../../components/inputs/TextareaAutoResize";
import errorMapper from "../../../utils/errorMapper";

const CreateQuiz = () => {
  const router = useRouter();

  const [saveQuiz, { loading: savingQuiz }] = useSaveQuizMutation();

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

  const { fields, append, remove, move } = useFieldArray({
    control,
    name: "questions",
  });

  const onSubmit = async (data: QuizInput) => {
    try {
      const { data: quizData } = await saveQuiz({
        variables: { quizInput: data },
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
              <div />
              <div className="inline-flex space-x-2">
                <div />
                <button
                  type="button"
                  onClick={handleSubmit(onSubmit)}
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-[#222831] bg-white border border-transparent rounded-md  hover:bg-gray-100 focus:outline-none "
                >
                  <SaveAsIcon className="w-5 h-5 mr-2 -ml-1" />
                  {savingQuiz ? "Saving" : "Save"}
                </button>
                <button
                  type="button"
                  disabled
                  className="inline-flex  opacity-50 items-center px-4 py-2 text-sm font-medium border-[#222831] text-[#222831] bg-white border border-transparent rounded-md shadow-sm hover:bg-gray-200 focus:outline-none "
                >
                  <PaperAirplaneIcon className="w-5 h-5 mr-2 -ml-1" />
                  Publish
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
                      placeholder="Type you title"
                      register={register}
                      required
                      error={errors.title}
                    />

                    <TextareaAutoResize<QuizInput>
                      name="description"
                      placeholder="Type you description"
                      error={errors.description}
                      register={register}
                      required
                    />

                    <DragDropContext
                      onDragEnd={({ source, destination }) => {
                        if (destination) {
                          move(source.index, destination.index);
                        }
                      }}
                    >
                      <Droppable droppableId="drag-list" type="field">
                        {(providedDroppable) => (
                          <div
                            role="list"
                            ref={providedDroppable.innerRef}
                            {...providedDroppable.droppableProps}
                            className="my-4 space-y-4"
                          >
                            {fields.map((question, questionIdx) => {
                              return (
                                <QuestionCard
                                  key={question.id}
                                  {...{
                                    question,
                                    questionIdx,
                                    control,
                                    register,
                                  }}
                                  isDisabled={fields.length < 2}
                                  questionRemove={remove}
                                  errors={errors.questions?.[questionIdx]}
                                />
                              );
                            })}
                          </div>
                        )}
                      </Droppable>
                    </DragDropContext>
                    <button
                      type="button"
                      onClick={() => addQuestion({ shouldFocus: true })}
                      className="flex w-full py-2 bg-black rounded hover:bg-[#1d1d1d] text-white justify-center focus:outline-none"
                    >
                      <PlusCircleIcon className="w-6 h-6 mr-1" />
                      Add Question
                    </button>
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
