import React, { useEffect, useRef, useState } from "react";

import { CommentResponseFragmentDoc, MeQuery } from "@generated/graphql";
import { PencilIcon } from "@heroicons/react/outline";
import errorMapper from "@utils/errorMapper";
import { getKeyArgs } from "@utils/index";
import { useForm } from "react-hook-form";
import { useAppSelector } from "store";

import {
  useAddCommentMutation,
  useEditCommentMutation,
} from "../../generated/graphql";
import {
  selectCommentInput,
  resetCommentInput,
} from "../../store/commentInput";
import { useAppDispatch } from "../../store/index";
import TextareaAutoResizeWithRef from "../inputs/TextareaAutoResizeWithRef";
import Avatar from "../ui/Avatar";

interface Props {
  quizId: string;
  commentCount: number;
  me: MeQuery;
}

type IText = {
  text: string;
};

const CommentInput: React.FC<Props> = ({ quizId, me, commentCount }) => {
  const dispatch = useAppDispatch();
  const { commentId, text: commentText } = useAppSelector(selectCommentInput);
  const [showInput, setShowInput] = useState(false);
  const commentInputRef = useRef<HTMLTextAreaElement>(null);

  const [addComment] = useAddCommentMutation();
  const [editComment] = useEditCommentMutation();

  const {
    handleSubmit,
    register,
    setError,
    setValue,
    reset,
    formState: { errors },
  } = useForm<IText>();

  const onSubmit = async (input: IText) => {
    try {
      setValue("text", "");

      if (commentText && commentId) {
        await editComment({
          variables: {
            quizId,
            commentId,
            text: input.text,
          },
          update: () => {
            dispatch(resetCommentInput());
          },
        });
      } else {
        await addComment({
          variables: {
            quizId: quizId,
            text: input.text,
          },
          update: (cache, { data }) => {
            cache.modify({
              id: `Quiz:${quizId}`,
              fields: {
                commentCount: (old) => old + 1,
              },
            });

            cache.modify({
              id: `ROOT_QUERY`,
              fields: {
                getComments: (old, { storeFieldName }) => {
                  const newComment = cache.writeFragment({
                    data: data?.addComment,
                    fragment: CommentResponseFragmentDoc,
                  });

                  const args = getKeyArgs(storeFieldName, "getComments");

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
          },
        });
        setValue("text", "");
      }
    } catch (err) {
      errorMapper(err, setError);
    }
  };

  useEffect(() => {
    if (commentText) {
      setShowInput(true);
      reset({ text: commentText });
    }
  }, [commentText]);

  useEffect(() => {
    if (showInput) commentInputRef?.current?.focus();
  }, [showInput, commentInputRef]);

  if (!me?.me) {
    return null;
  }

  const toggleInput = () => {
    setShowInput(!showInput);
    if (showInput && commentId) {
      dispatch(resetCommentInput());
    }
  };

  const { avatar } = me.me;

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
        <div className="flex p-5 bg-white rounded-md shadow-md">
          <Avatar avatarUrl={avatar} />
          <div className="flex-1 ml-2">
            <form onSubmit={handleSubmit(onSubmit)}>
              <TextareaAutoResizeWithRef<IText>
                name="text"
                placeholder="Type your comment"
                minRows={3}
                error={errors.text}
                register={register}
                required
                ref={commentInputRef}
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
        </div>
      )}
    </>
  );
};

export default CommentInput;
