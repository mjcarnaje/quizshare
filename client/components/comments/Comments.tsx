import React from "react";

import CommentCard from "@components/comments/CommentCard";
import Image from "next/image";

import { useGetCommentsQuery } from "@generated/graphql";
import { useAppSelector } from "../../store";
import CommentCardSkeleton from "./CommentCardSkeleton";

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
    notifyOnNetworkStatusChange: true,
  });

  const comments = data?.getComments.comments || [];
  const pageInfo = data?.getComments.pageInfo;

  return (
    <>
      <ul className="space-y-3 !list-none">
        {!comments.length && loading && (
          <>
            {[...Array(3).keys()].map((idx) => (
              <CommentCardSkeleton key={idx} />
            ))}
          </>
        )}
        {comments.map((comment) => (
          <CommentCard
            key={comment.id}
            quizId={quizId}
            comment={comment}
            isAuthor={comment.authorId === authorId}
            hideToEdit={comment.id === commentId}
          />
        ))}
        {comments.length > 0 && loading && (
          <>
            {[...Array(2).keys()].map((idx) => (
              <CommentCardSkeleton key={idx} />
            ))}
          </>
        )}
      </ul>
      {pageInfo?.hasNextPage && (
        <button
          type="button"
          className="flex px-4 py-2 mx-auto my-2 text-base font-medium leading-4 rounded-md active:bg-gray-50 focus:outline-none"
          onClick={() => {
            fetchMore({
              variables: {
                quizId: variables?.quizId,
                limit: variables?.limit,
                cursor: pageInfo.endCursor,
              },
            });
          }}
        >
          {loading ? "Loading.." : "Load more"}
        </button>
      )}

      {!comments.length && !loading && (
        <div className="flex flex-col items-center justify-center h-64 max-w-3xl p-10 mt-10 text-center md:h-80 lg:h-96">
          <div className="relative w-full h-full">
            <Image src="/empty.svg" layout="fill" />
          </div>
          <p className="mt-4 lg:mt-12">No comment found.</p>
        </div>
      )}
    </>
  );
};

export default Comments;
