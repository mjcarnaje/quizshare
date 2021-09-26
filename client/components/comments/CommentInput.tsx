import React, { useEffect, useRef, useState } from "react";

import {
  MeQuery,
  useAddCommentMutation,
  useEditCommentMutation,
} from "@generated/graphql";
import { resetCommentInput, selectCommentInput } from "@store/commentInput";
import { useAppDispatch, useAppSelector } from "@store/index";
import errorMapper from "@utils/errorMapper";
import { classNames } from "@utils/index";
import { useForm } from "react-hook-form";
import Skeleton from "react-loading-skeleton";

import TextareaAutoResizeWithRef from "../inputs/TextareaAutoResizeWithRef";
import Avatar from "../ui/Avatar";

interface Props {
  quizId: string;
  commentCount?: number | null;
  me?: MeQuery;
}

type IText = {
  text: string;
};

const CommentInput: React.FC<Props> = ({ quizId, me, commentCount }) => {
  const dispatch = useAppDispatch();
  const { commentId, text: commentText } = useAppSelector(selectCommentInput);

  const commentInputRef = useRef<HTMLTextAreaElement>(null);
  const [isFocused, setIsFocused] = useState(false);

  const [addComment] = useAddCommentMutation();
  const [editComment] = useEditCommentMutation();

  const {
    handleSubmit,
    register,
    setError,
    setValue,
    reset,
    watch,
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
          update: (cache) => {
            cache.modify({
              id: `Quiz:${quizId}`,
              fields: {
                commentCount: (existingCommentCount) => {
                  return existingCommentCount + 1;
                },
              },
            });
            cache.modify({
              id: "ROOT_QUERY",
              fields: {
                getComments: () => {},
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

  const cancelComment = () => {
    setValue("text", "");
    setIsFocused(false);
    dispatch(resetCommentInput());
  };

  useEffect(() => {
    if (commentText) {
      reset({ text: commentText });
      commentInputRef.current?.focus();
    }
  }, [commentText]);

  if (!me?.me) {
    return null;
  }

  const { firstName, avatar } = me.me;

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between my-4">
        <p className="inline-block text-base">
          {`${commentCount} Comments` ?? <Skeleton width={24} />}
        </p>
      </div>
      <div className="flex mb-4">
        <div className="mt-1 mr-4">
          <Avatar avatarUrl={avatar} alt={firstName[0]} />
        </div>
        <div className="flex-1">
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextareaAutoResizeWithRef<IText>
              name="text"
              placeholder="Add a comment"
              minRows={isFocused ? 3 : 1}
              error={errors.text}
              register={register}
              required
              ref={commentInputRef}
              onFocus={() => setIsFocused(true)}
              onBlur={() => console.log("UNFOCUSED")}
            />
            {isFocused && (
              <div className="space-x-2 text-right mt-4">
                <button
                  className="px-3 py-1 transition transform rounded-md active:scale-95 hover:bg-gray-50 focus:outline-none"
                  onClick={cancelComment}
                  type="button"
                >
                  Cancel
                </button>
                <button
                  className={classNames(
                    commentText === watch().text
                      ? "text-green-300 border border-green-300"
                      : "text-green-500 border border-green-500",
                    "transform active:scale-95 transition px-3 py-1 rounded-md focus:outline-none hover:bg-gray-50 "
                  )}
                  type="submit"
                  disabled={commentText === watch().text}
                >
                  Post
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default CommentInput;
