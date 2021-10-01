import React, { useEffect, useRef, useState } from "react";

import { IUser } from "@customtypes/index";
import {
  useAddCommentMutation,
  useEditCommentMutation,
} from "@generated/graphql";
import { resetCommentInput, selectCommentInput } from "@store/commentInput";
import { useAppDispatch, useAppSelector } from "@store/index";
import errorMapper from "@utils/errorMapper";
import { classNames } from "@utils/index";
import { useForm } from "react-hook-form";

import Avatar from "../Avatar";
import TextareaAutoResizeWithRef from "../inputs/TextareaAutoResizeWithRef";

interface Props {
  quizId: string;
  userInfo?: IUser | null;
}

type IText = {
  text: string;
};

const CommentInput: React.FC<Props> = ({ quizId, userInfo }) => {
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
          update: (cache, { data }) => {
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
                getComments: ({ pageInfo, comments }) => {
                  if (comments.quizId !== data?.addComment.quizId) return;
                  return {
                    pageInfo,
                    comments: [...comments, data?.addComment],
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

  if (!userInfo) {
    return null;
  }

  const { firstName, avatar } = userInfo;

  return (
    <div className="flex mb-12">
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
  );
};

export default CommentInput;
