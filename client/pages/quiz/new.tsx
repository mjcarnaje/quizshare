import React, { Fragment, useEffect, useState } from "react";

import Input from "@components/inputs/Input";
import { useCreateQuizMutation } from "@generated/graphql";
import { Dialog, Transition } from "@headlessui/react";
import { useIsAuth } from "@utils/useIsAuth";
import withApollo from "@utils/withApollo";
import { useRouter } from "next/dist/client/router";
import Image from "next/image";
import { useForm, SubmitHandler } from "react-hook-form";

type ITitle = { title: string };

const NewQuiz: React.FC = () => {
  useIsAuth();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ITitle>();

  const [createQuiz] = useCreateQuizMutation();

  const onSubmit: SubmitHandler<ITitle> = async (data) => {
    try {
      const { data: _data } = await createQuiz({
        variables: {
          title: data.title,
        },
      });
      if (_data?.createQuiz) {
        router.push(`/quiz/${_data.createQuiz.id}`);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    setOpen(true);
  }, []);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        onClose={setOpen}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
              <div>
                <div className="mt-3 sm:mt-5">
                  <header className="flex space-x-4 items-center">
                    <Image
                      src="/create-quiz.jpg"
                      height={52}
                      width={52}
                      className="rounded-xl"
                    />
                    <Dialog.Title as="h2" className="font-medium text-xl">
                      Create a quiz
                    </Dialog.Title>
                  </header>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mt-2">
                      <div className="w-full">
                        <Input<ITitle>
                          name="title"
                          label="Title"
                          placeholder="title.."
                          register={register}
                          error={errors.title}
                          required
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="mt-5 sm:mt-6 flex space-x-3">
                <button
                  type="button"
                  className="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 text-base font-medium text-red-500 hover:bg-gray-50 focus:outline-none sm:text-sm"
                  onClick={() => router.push("/")}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
                  onClick={handleSubmit(onSubmit)}
                >
                  Create
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default withApollo({ ssr: true })(NewQuiz);
