import React, { useState } from "react";

import { MeQuery } from "@generated/graphql";
import errorMapper from "@utils/errorMapper";
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
        update: (cache) => {
          cache.modify({
            id: `Quiz:${quizId}`,
            fields: {
              commentCount() {
                return commentCount++;
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
      <div className="flex justify-between px-3 py-4 bg-white rounded-md shadow">
        <p>{`Comments (${commentCount})`}</p>
        <button onClick={toggleInput}>Add Comment</button>
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
              <button onClick={toggleInput} type="button">
                Cancel
              </button>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default CommentInput;
