import React, { useEffect } from "react";

import AddCoverPhotoButton from "@components/buttons/AddCoverPhotoButton";
import ImageHolder from "@components/ImageHolder";
import Input from "@components/inputs/Input";
import TextareaAutoResize from "@components/inputs/TextareaAutoResize";
import QuestionInputs from "@components/quizzes/QuestionInputs";
import QuizTabs from "@components/quizzes/QuizTabs";
import ResultInputs from "@components/quizzes/ResultInputs";
import Container from "@components/ui/Container";
import MainContainer from "@components/ui/MainContainer";
import { QuizInput, useSaveQuizMutation } from "@generated/graphql";
import { SaveAsIcon } from "@heroicons/react/outline";
import errorMapper from "@utils/errorMapper";
import { useUploadPhoto } from "@utils/useUploadImage";
import withApollo from "@utils/withApollo";
import { useRouter } from "next/router";
import { FormProvider, useForm } from "react-hook-form";


const CreateQuiz: React.FC = () => {
  const router = useRouter();
  const tab = router.query.tab as string;
  const isQuestionsTab = tab === "questions" || tab == null;
  const isResultsTab = tab === "results";

  const [saveQuiz, { loading: savingQuiz }] = useSaveQuizMutation();
  const [uploadImage, { data: quizPhoto, loading: quizPhotoLoading }] =
    useUploadPhoto();

  const methods = useForm<QuizInput>({
    defaultValues: {
      title: "",
      description: "",
      quizPhoto: "",
      questions: [],
      results: [],
      tags: [],
    },
  });

  const {
    register,
    handleSubmit,
    setError,
    setValue,
    formState: { errors },
  } = methods;

  const onSubmit = async (data: QuizInput) => {
    try {
      const { data: quizData } = await saveQuiz({
        variables: { input: data },
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

  useEffect(() => {
    setValue("quizPhoto", quizPhoto);
  }, [quizPhoto]);

  const tabs = [
    {
      name: "Questions",
      href: `/create/quiz/?tab=questions`,
      index: true,
    },
    {
      name: "Results",
      href: `/create/quiz/?tab=results`,
      index: false,
    },
  ];

  return (
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
            </div>
          </div>
        }
      >
        <main className="relative flex-1 overflow-y-auto focus:outline-none">
          <div className="py-6">
            <div className="max-w-4xl px-4 mx-auto sm:px-6 md:px-8">
              <FormProvider {...methods}>
                <form>
                  <AddCoverPhotoButton
                    onClick={uploadImage}
                    text={quizPhoto ? "Replace" : "Add"}
                  />
                  <input type="hidden" {...register("quizPhoto")} />
                  <ImageHolder image={quizPhoto} loading={quizPhotoLoading} />
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

export default withApollo({ ssr: false })(CreateQuiz);
