import React, { useEffect, useState } from "react";

import AddCoverPhotoButton from "@components/buttons/AddCoverPhotoButton";
import ImageHolder from "@components/ImageHolder";
import Input from "@components/inputs/Input";
import TextareaAutoResize from "@components/inputs/TextareaAutoResize";
import QuestionInputs from "@components/quizzes/QuestionInputs";
import QuizTabs from "@components/quizzes/QuizTabs";
import ResultInputs from "@components/quizzes/ResultInputs";
import Container from "@components/ui/Container";
import MainContainer from "@components/ui/MainContainer";
import {
  QuizInput,
  useGetQuizQuery,
  usePublishQuizMutation,
  useSaveQuizMutation,
} from "@generated/graphql";
import { PaperAirplaneIcon, SaveAsIcon } from "@heroicons/react/outline";
import { showAlert } from "@store/alert";
import { useAppDispatch } from "@store/index";
import errorMapper from "@utils/errorMapper";
import { classNames, cleanTypeName } from "@utils/index";
import { useGetQuery } from "@utils/useGetQuery";
import { useUploadPhoto } from "@utils/useUploadImage";
import withApollo from "@utils/withApollo";
import { isEqual } from "lodash";
import { useRouter } from "next/router";
import { FormProvider, useForm } from "react-hook-form";

const DraftEditQuizPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const quizId = useGetQuery("quizId");
  const tab = useGetQuery("tab");

  const isQuestionsTab = tab === "questions" || tab == null;
  const isResultsTab = tab === "results";

  const [quizInput, setQuizInput] = useState<QuizInput>();
  const [isSaved, setIsSaved] = useState(true);
  const [isDirty, setIsDirty] = useState(false);

  const { data } = useGetQuizQuery({
    variables: {
      quizId,
      isInput: true,
      isTake: false,
      isLanding: false,
    },
  });

  const [saveQuiz] = useSaveQuizMutation();
  const [publishQuiz, { loading: publishingQuiz }] = usePublishQuizMutation();
  const [uploadImage, { data: quizPhoto, loading: quizPhotoLoading }] =
    useUploadPhoto();

  const methods = useForm<QuizInput>();

  const {
    register,
    handleSubmit,
    setError,
    reset,
    watch,
    setValue,
    formState: { errors },
  } = methods;

  const watchValues = watch();

  const onSubmit = async (data: QuizInput) => {
    try {
      const { data: quizData } = await saveQuiz({
        variables: { input: data, quizId },
        update: (cache) => {
          cache.evict({ fieldName: "quizzes" });
        },
      });

      if (quizData?.saveQuiz) {
        const { id, ...rest } = quizData.saveQuiz;
        setQuizInput(rest);
        reset(cleanTypeName(rest));
        checkIfDirty(cleanTypeName(rest), watchValues);
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

  useEffect(() => {
    if (data?.getQuiz && !isDirty) {
      setQuizInput(data.getQuiz as QuizInput);
      reset(cleanTypeName(data.getQuiz as QuizInput));
    }
  }, [data?.getQuiz]);

  useEffect(() => {
    checkIfDirty(cleanTypeName(quizInput), watchValues);
  }, [quizInput, watchValues]);

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

  const tabs = [
    {
      name: "Questions",
      href: `/me/drafts/${quizId}?tab=questions`,
      index: true,
    },
    {
      name: "Results",
      href: `/me/drafts/${quizId}?tab=results`,
      index: false,
    },
  ];

  return (
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
                  <AddCoverPhotoButton
                    onClick={uploadImage}
                    text={quizPhoto ? "Replace" : "Add"}
                  />
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
                  <QuizTabs tabs={tabs} currentTab={tab} />
                  {isQuestionsTab && <QuestionInputs />}
                  {isResultsTab && <ResultInputs />}
                </form>
              </FormProvider>
            </div>
          </div>
        </main>
      </Container>
    </MainContainer>
  );
};

export default withApollo({ ssr: true })(DraftEditQuizPage);
