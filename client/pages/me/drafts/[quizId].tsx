import React, { useEffect } from "react";
import { useState } from "react";

import QuestionCard from "@components/quizzes/QuestionCard";
import Container from "@components/ui/Container";
import MainContainer from "@components/ui/MainContainer";
import { QuizInput, useSaveQuizMutation } from "@generated/graphql";
import {
  PaperAirplaneIcon,
  SaveAsIcon,
  PlusCircleIcon,
  PhotographIcon,
} from "@heroicons/react/outline";
import { classNames, cleanTypeName } from "@utils/index";
import { useUploadPhoto } from "@utils/useUploadImage";
import withApollo from "@utils/withApollo";
import { CloudinaryContext } from "cloudinary-react";
import { isEqual } from "lodash";
import { useRouter } from "next/router";
import { Droppable, DragDropContext } from "react-beautiful-dnd";
import {
  FieldArrayMethodProps,
  FormProvider,
  useFieldArray,
  useForm,
} from "react-hook-form";
import { useAppDispatch } from "store";
import { showAlert } from "store/alert";
import { v4 as uuid } from "uuid";

import ImageHolder from "../../../components/ImageHolder";
import Input from "../../../components/inputs/Input";
import TextareaAutoResize from "../../../components/inputs/TextareaAutoResize";
import {
  useGetQuizQuery,
  usePublishQuizMutation,
} from "../../../generated/graphql";
import errorMapper from "../../../utils/errorMapper";

interface Props {}

const DraftEditQuizPage: React.FC<Props> = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const quizId = router.query.quizId as string;

  const [quizInput, setQuizInput] = useState<QuizInput>();
  const [isSaved, setIsSaved] = useState(true);
  const [isDirty, setIsDirty] = useState(false);

  const { data } = useGetQuizQuery({
    variables: {
      quizId,
      isInput: true,
    },
  });

  const [saveQuiz] = useSaveQuizMutation();
  const [publishQuiz, { loading: publishingQuiz }] = usePublishQuizMutation();
  const [uploadImage, { data: quizPhoto, loading: quizPhotoLoading }] =
    useUploadPhoto();

  const methods = useForm<QuizInput>();

  const {
    control,
    register,
    handleSubmit,
    setError,
    reset,
    watch,
    setValue,
    formState: { errors },
  } = methods;

  const { fields, append, remove, move } = useFieldArray({
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

      if (quizData?.saveQuiz) {
        const { id, ...rest } = quizData.saveQuiz;
        setQuizInput(rest);
        reset(cleanTypeName(rest));
        checkIfDirty(cleanTypeName(rest), watch());
        setIsDirty(true);
        dispatch(
          showAlert({
            title: "Sucessfuly saved quiz",
            description: "Your quiz is successfuly updated",
            duration: 3000,
            isClosable: true,
            status: "success",
            withUndo: false,
          })
        );
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
    if (data?.getQuiz && !isDirty) {
      setQuizInput(data.getQuiz);
      reset(cleanTypeName(data.getQuiz));
    }
  }, [data?.getQuiz]);

  useEffect(() => {
    checkIfDirty(cleanTypeName(quizInput), watch());
  }, [quizInput, watch()]);

  useEffect(() => {
    setValue("quizPhoto", quizPhoto);
  }, [quizPhoto]);

  function checkIfDirty(oldObj?: QuizInput, newObj?: QuizInput): void {
    if (!isEqual(oldObj, newObj)) {
      setIsSaved(false);
      return;
    }
    setIsSaved(true);
  }

  const quizImage = quizPhoto || quizInput?.quizPhoto;

  return (
    <CloudinaryContext
      cloudName={process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}
    >
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
                  disabled={isSaved}
                  onClick={handleSubmit(onSubmit)}
                  className={`inline-flex items-center px-4 py-2 text-sm font-medium text-[#222831] bg-white border border-transparent rounded-md  hover:bg-gray-100 focus:outline-none ${classNames(
                    isSaved ? "opacity-50" : ""
                  )}`}
                >
                  <SaveAsIcon className="w-5 h-5 mr-2 -ml-1" />
                  {isSaved ? "Saved" : "Save"}
                </button>
                <button
                  type="button"
                  disabled={!isSaved}
                  onClick={async () => {
                    try {
                      const { errors } = await publishQuiz({
                        variables: { quizId },
                        update: (cache) => {
                          cache.evict({ fieldName: "quizzes" });
                        },
                      });
                      if (!errors) {
                        router.push("/");
                      }
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  className={`inline-flex items-center px-4 py-2 text-sm font-medium border-[#222831] text-[#222831] bg-white border border-transparent rounded-md shadow-sm hover:bg-gray-200 focus:outline-none ${classNames(
                    !isSaved ? "opacity-50" : ""
                  )}`}
                >
                  <PaperAirplaneIcon className="w-5 h-5 mr-2 -ml-1" />
                  {publishingQuiz ? "Publishing" : "Publish"}
                </button>
              </div>
            </div>
          }
        >
          <main className="relative flex-1 min-h-screen overflow-y-auto focus:outline-none">
            <div className="py-6">
              <div className="max-w-4xl px-4 mx-auto sm:px-6 md:px-8">
                <FormProvider {...methods}>
                  <form>
                    <div className="mb-2">
                      <button
                        type="button"
                        className="flex px-2 py-1 bg-gray-200 rounded-md focus:outline-none"
                        onClick={uploadImage}
                      >
                        <PhotographIcon className="w-6 h-6 mr-1" />
                        {`${quizImage ? "Replace" : "Add"} Cover Photo`}
                      </button>
                    </div>
                    <input type="hidden" {...register("quizPhoto")} />
                    <ImageHolder image={quizImage} loading={quizPhotoLoading} />
                    <Input<QuizInput>
                      type="text"
                      name="title"
                      placeholder="Type your title"
                      register={register}
                      required
                      error={errors.title}
                    />

                    <TextareaAutoResize<QuizInput>
                      name="description"
                      placeholder="Type your description"
                      minRows={3}
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
                                  {...{ question, questionIdx }}
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
                  </form>
                </FormProvider>
              </div>
            </div>
          </main>
        </Container>
        <button
          type="button"
          onClick={() => addQuestion({ shouldFocus: true })}
          className="fixed bottom-6 right-6 p-2 flex items-center justify-center rounded-xl bg-black hover:bg-[#1d1d1d] active:opacity-80 text-white focus:outline-none"
        >
          <PlusCircleIcon className="w-8 h-8" />
        </button>
      </MainContainer>
    </CloudinaryContext>
  );
};

export default withApollo({ ssr: true })(DraftEditQuizPage);
