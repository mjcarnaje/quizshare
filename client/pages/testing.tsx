import React, { useEffect, useState } from "react";

import ImageHolder from "@components/ImageHolder";
import Input from "@components/inputs/Input";
import TextareaAutoResize from "@components/inputs/TextareaAutoResize";
import QuestionInputs from "@components/quizzes/QuestionInputs";
import ResultInputs from "@components/quizzes/ResultInputs";
import Container from "@components/ui/Container";
import MainContainer from "@components/ui/MainContainer";
import { QuizInput, useSaveQuizMutation } from "@generated/graphql";
import {
  AnnotationIcon,
  CogIcon,
  CollectionIcon,
  SaveIcon,
  UploadIcon,
} from "@heroicons/react/outline";
import errorMapper from "@utils/errorMapper";
import { classNames } from "@utils/index";
import { useUploadPhoto } from "@utils/useUploadImage";
import withApollo from "@utils/withApollo";
import { useRouter } from "next/router";
import { FormProvider, useForm } from "react-hook-form";

type IActiveNav = "settings" | "questions" | "results";

const Testing: React.FC = () => {
  const router = useRouter();

  const [activeNav, setActiveNav] = useState<IActiveNav>("settings");

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

  const subNavigation = [
    [
      {
        name: "Settings",
        icon: CogIcon,
        onClick: () => setActiveNav("settings"),
      },
      {
        name: "Questions",
        icon: CollectionIcon,
        onClick: () => setActiveNav("questions"),
      },
      {
        name: "Results",
        icon: AnnotationIcon,
        onClick: () => setActiveNav("results"),
      },
    ],
    [
      { name: "Save draft & exit", icon: SaveIcon, onClick: () => {} },
      { name: "Publish", icon: UploadIcon, onClick: () => {} },
    ],
  ];

  return (
    <MainContainer title="Testing">
      <Container showSearchBar={false}>
        <main className="py-6">
          <div className="max-w-screen-xl mx-auto pb-6 px-4 sm:px-6 lg:pb-16 lg:px-8">
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="divide-y divide-gray-200 lg:grid lg:grid-cols-12 lg:divide-y-0 lg:divide-x">
                <aside className="py-6 lg:col-span-3">
                  <nav>
                    <div className="space-y-1">
                      {subNavigation[0].map((item) => (
                        <button
                          key={item.name}
                          onClick={item.onClick}
                          className={classNames(
                            activeNav === item.name.toLowerCase()
                              ? "bg-teal-50 border-teal-500 text-teal-700 hover:bg-teal-50 hover:text-teal-700"
                              : "border-transparent text-gray-900 hover:bg-gray-50 hover:text-gray-900",
                            "group w-full border-l-4 px-3 py-2 flex items-center text-sm font-medium"
                          )}
                        >
                          <item.icon
                            className={classNames(
                              activeNav === item.name.toLowerCase()
                                ? "text-teal-500 group-hover:text-teal-500"
                                : "text-gray-400 group-hover:text-gray-500",
                              "flex-shrink-0 -ml-1 mr-3 h-6 w-6"
                            )}
                            aria-hidden="true"
                          />
                          <span className="truncate">{item.name}</span>
                        </button>
                      ))}
                    </div>
                    <div className="w-full border-t my-4 border-gray-300" />
                    <div className="space-y-1">
                      {subNavigation[1].map((item) => (
                        <button
                          key={item.name}
                          onClick={item.onClick}
                          className="w-full border-transparent text-gray-900 hover:bg-gray-50 hover:text-gray-900 group border-l-4 px-3 py-2 flex items-center text-sm font-medium"
                        >
                          <item.icon className="text-gray-400 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6" />
                          <span className="truncate">{item.name}</span>
                        </button>
                      ))}
                    </div>
                  </nav>
                </aside>

                <div className="divide-y divide-gray-200 lg:col-span-9 min-h-full">
                  <div className="relative py-6 px-4 sm:p-6 lg:pb-8">
                    <FormProvider {...methods}>
                      {activeNav === "settings" && (
                        <div className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700">
                              Cover photo
                            </label>
                            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                              <div className="space-y-1 text-center">
                                <svg
                                  className="mx-auto h-12 w-12 text-gray-400"
                                  stroke="currentColor"
                                  fill="none"
                                  viewBox="0 0 48 48"
                                  aria-hidden="true"
                                >
                                  <path
                                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                                <button
                                  onClick={uploadImage}
                                  className="text-sm rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                                >
                                  Upload image
                                </button>
                                <p className="text-xs text-gray-500">
                                  PNG, JPG up to 1MB
                                </p>
                              </div>
                            </div>
                          </div>
                          <input type="hidden" {...register("quizPhoto")} />
                          <ImageHolder
                            image={quizPhoto}
                            loading={quizPhotoLoading}
                          />
                          <Input<QuizInput>
                            type="text"
                            name="title"
                            label="Title"
                            placeholder="title.."
                            register={register}
                            required
                            error={errors.title}
                          />
                          <TextareaAutoResize<QuizInput>
                            name="description"
                            label="Description"
                            placeholder="about.."
                            register={register}
                            required
                            minRows={3}
                            error={errors.description}
                          />
                        </div>
                      )}
                      {activeNav === "questions" && <QuestionInputs />}
                      {activeNav === "results" && <ResultInputs />}
                    </FormProvider>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </Container>
    </MainContainer>
  );
};

export default withApollo({ ssr: true })(Testing);
