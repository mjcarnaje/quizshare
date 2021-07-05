import React, { useState } from "react";

import { CommentResponseFragmentDoc, MeQuery } from "@generated/graphql";
import { PencilIcon } from "@heroicons/react/outline";
import errorMapper from "@utils/errorMapper";
import { getCacheArg } from "@utils/index";
import { useForm } from "react-hook-form";

import { useAddCommentMutation } from "../generated/graphql";
import TextareaAutoResize from "./inputs/TextareaAutoResize";
import Avatar from "./ui/Avatar";

interface Props {
  quizId: string;
  commentCount: number;
  me: MeQuery;
}

type IText = {
  text: string;
};

const CommentInput: React.FC<Props> = ({ quizId, me, commentCount }) => {
  const [showInput, setShowInput] = useState(false);

  const [addComment] = useAddCommentMutation();

  const {
    handleSubmit,
    register,
    setError,
    setValue,
    formState: { errors },
  } = useForm<IText>();

  if (!me?.me) {
    return null;
  }

  const onSubmit = async (input: IText) => {
    try {
      await addComment({
        variables: {
          quizId: quizId,
          text: input.text,
        },
        update: (cache, { data }) => {
          cache.modify({
            id: `Quiz:${quizId}`,
            fields: {
              commentCount(old) {
                return old + 1;
              },
            },
          });

          cache.modify({
            id: `ROOT_QUERY`,
            fields: {
              getComments(old, { storeFieldName }) {
                const newComment = cache.writeFragment({
                  data: data?.addComment,
                  fragment: CommentResponseFragmentDoc,
                });

                const args = getCacheArg(storeFieldName);

                if (args.quizId !== quizId) {
                  return old;
                }

                return {
                  hasMore: commentCount > old.comments.length,
                  comments: [...old.comments, newComment],
                };
              },
            },
          });

          setValue("text", "");
        },
      });
    } catch (err) {
      errorMapper(err, setError);
    }
  };

  const toggleInput = () => {
    setShowInput(!showInput);
  };

  const { firstName, lastName, avatar } = me.me;

  return (
    <>
      <div className="flex items-center justify-between px-3 py-4 bg-white rounded-md shadow">
        <p>{`Comments (${commentCount})`}</p>
        <button
          className="flex px-3 py-1 text-green-500 border border-green-500 rounded-md focus:outline-none hover:bg-gray-50 "
          onClick={toggleInput}
        >
          <PencilIcon className="-ml-0.5 mr-2 h-6 w-6" aria-hidden="true" />
          Add Comment
        </button>
      </div>

      {showInput && (
        <div className="px-3 py-4 bg-white rounded-md shadow-md">
          <div className="mb-4">
            <Avatar name={`${firstName} ${lastName}`} img={avatar as string} />
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextareaAutoResize<IText>
              name="text"
              placeholder="Type your comment"
              minRows={3}
              error={errors.text}
              register={register}
              required
            />
            <div className="pt-4 space-x-2 text-right">
              <button
                className="px-3 py-1 rounded-md hover:bg-gray-50 focus:outline-none"
                onClick={toggleInput}
                type="button"
              >
                Cancel
              </button>
              <button
                className="px-3 py-1 text-green-500 border border-green-500 rounded-md focus:outline-none hover:bg-gray-50 "
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default CommentInput;
