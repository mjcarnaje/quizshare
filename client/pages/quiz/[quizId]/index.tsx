import React, { useEffect, useState } from "react";

import ImageHolder from "@components/ImageHolder";
import Input from "@components/inputs/Input";
import TextareaAutoResize from "@components/inputs/TextareaAutoResize";
import Layout from "@components/layout/Layout";
import NestedLayout from "@components/layout/NestedLayout";
import QuestionInputs from "@components/quizzes/QuestionInputs";
import ResultInputs from "@components/quizzes/ResultInputs";
import {
  QuizInput,
  useGetQuizInputQuery,
  usePublishQuizMutation,
  useSaveQuizMutation,
} from "@generated/graphql";
import {
  AnnotationIcon,
  CogIcon,
  CollectionIcon,
  SaveIcon,
  UploadIcon,
} from "@heroicons/react/outline";
import { showAlert } from "@store/alert";
import { useAppDispatch } from "@store/index";
import errorMapper from "@utils/errorMapper";
import { classNames, cleanTypeName } from "@utils/index";
import { useGetQuery } from "@utils/useGetQuery";
import { useUploadPhoto } from "@utils/useUploadImage";
import { useUser } from "@utils/useUser";
import withApollo from "@utils/withApollo";
import { useRouter } from "next/router";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

type IActiveNav = "settings" | "questions" | "results";

const EditQuiz: React.FC = () => {
  const { user } = useUser();
  const dipatch = useAppDispatch();
  const router = useRouter();
  const quizId = useGetQuery("quizId");

  const [activeNav, setActiveNav] = useState<IActiveNav>("settings");

  const [uploadImage, { data: quizPhoto, loading: quizPhotoLoading }] =
    useUploadPhoto();

  const [saveQuiz] = useSaveQuizMutation();
  const [publishQuiz] = usePublishQuizMutation();
  const { data } = useGetQuizInputQuery({
    variables: { quizId },
  });

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

  const { register, handleSubmit, setError, reset, setValue, formState } =
    methods;

  const { errors } = formState;

  useEffect(() => {
    setValue("quizPhoto", quizPhoto);
  }, [quizPhoto]);

  const onSubmit: SubmitHandler<QuizInput> = async (data) => {
    try {
      const { errors } = await saveQuiz({
        variables: { quizId, input: data },
      });
      if (!errors) {
        dipatch(
          showAlert({
            title: "Saved quiz",
            description: "Sucessfuly saved the quiz.",
            duration: 3000,
            isClosable: true,
            status: "success",
            withUndo: false,
          })
        );
      }
    } catch (err) {
      errorMapper(err, setError);
      dipatch(
        showAlert({
          title: "Cannot save.",
          description: "Check all your input.",
          duration: 3000,
          isClosable: true,
          status: "success",
          withUndo: false,
        })
      );
    }
  };

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
      {
        name: "Save draft & exit",
        icon: SaveIcon,
        onClick: async () => {
          try {
            await handleSubmit(onSubmit)();
            // router.push("/me/drafts");
          } catch (err) {
            console.error(err);
          }
        },
      },
      {
        name: "Publish",
        icon: UploadIcon,
        onClick: async () => {
          try {
            const { errors } = await publishQuiz({
              variables: { quizId },
            });
            if (!errors) {
              dipatch(
                showAlert({
                  title: "Published quiz",
                  description: "Successfuly published quiz",
                  duration: 3000,
                  isClosable: true,
                  status: "success",
                  withUndo: false,
                })
              );
              router.push("/");
            }
          } catch (err) {
            console.error(err);
          }
        },
      },
    ],
  ];

  useEffect(() => {
    if (data) {
      const { id, ...quizInput } = data?.getQuizInput;
      // Description is possible null from api
      // Description is required for input
      // @ts-expect-error
      reset(cleanTypeName(quizInput));
    }
  }, [data]);

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
    <Layout title="Edit quiz">
      <NestedLayout showSearchBar={false}>
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
                          {quizPhoto || data?.getQuizInput.quizPhoto ? (
                            <ImageHolder
                              image={quizPhoto || data?.getQuizInput.quizPhoto}
                              loading={quizPhotoLoading}
                            />
                          ) : (
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
                          )}
                        </div>
                        <input type="hidden" {...register("quizPhoto")} />
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
      </NestedLayout>
    </Layout>
  );
};

export default withApollo({ ssr: true })(EditQuiz);
