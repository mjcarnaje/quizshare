import React from "react";

import CommentCard from "@components/comments/CommentCard";

import { useGetCommentsQuery } from "../../generated/graphql";
import { useAppSelector } from "../../store/index";
import { getCursor } from "../../utils/index";

interface Props {
  quizId: string;
  authorId: string;
}

const Comments: React.FC<Props> = ({ quizId, authorId }) => {
  const commentId = useAppSelector((state) => state.commentInput.commentId);
  const { data, loading, fetchMore, variables } = useGetCommentsQuery({
    variables: {
      quizId,
      limit: 20,
      cursor: null,
    },
  });

  return (
    <>
      <ul className="space-y-3 ">
        {!data && loading && (
          <div className="my-10">
            <p>Loading...</p>
          </div>
        )}
        {data?.getComments.comments.map((comment) => (
          <CommentCard
            key={comment.id}
            quizId={quizId}
            comment={comment}
            isAuthor={comment.authorId === authorId}
            hideToEdit={comment.id === commentId}
          />
        ))}
      </ul>
      {data?.getComments.hasMore && (
        <button
          type="button"
          className="flex px-4 py-2 mx-auto my-2 text-base font-medium leading-4 rounded-md active:bg-gray-50 focus:outline-none"
          onClick={() => {
            fetchMore({
              variables: {
                quizId: variables?.quizId,
                limit: variables?.limit,
                cursor: getCursor(data?.getComments.comments),
              },
            });
          }}
        >
          {loading ? "Loading.." : "Load more"}
        </button>
      )}
    </>
  );
};

export default Comments;
