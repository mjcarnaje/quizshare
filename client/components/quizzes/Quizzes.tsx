import React from "react";

import { PageInfoFragment, QuizCardFragment } from "@generated/graphql";
import Image from "next/image";

import { QuizCard } from "./QuizCard";
import QuizCardSkeleton from "./QuizCardSkeleton";

interface Props {
  quizzes?: QuizCardFragment[];
  pageInfo?: PageInfoFragment;
  loading: boolean;
  onLoadMore?: () => void;
  type: "timeline" | "me";
}

const Quizzes: React.FC<Props> = ({
  quizzes = [],
  pageInfo,
  loading,
  onLoadMore,
  type,
}) => {
  return (
    <>
      <ul className="mx-auto divide-y divide-gray-200 ">
        {!quizzes.length && loading && (
          <>
            {[...Array(3).keys()].map((idx) => (
              <QuizCardSkeleton key={idx} />
            ))}
          </>
        )}
        {quizzes.map((quiz) => (
          <QuizCard key={quiz.id} {...quiz} type={type} />
        ))}
        {quizzes.length > 0 && loading && (
          <>
            {[...Array(2).keys()].map((idx) => (
              <QuizCardSkeleton key={idx} />
            ))}
          </>
        )}
      </ul>
      {pageInfo?.hasNextPage && (
        <button
          type="button"
          className="flex px-4 py-2 mx-auto my-2 text-base font-medium leading-4 rounded-md active:bg-gray-50 focus:outline-none"
          onClick={onLoadMore}
        >
          {loading ? "Loading.." : "Load more"}
        </button>
      )}

      {!quizzes.length && !loading && (
        <div className="flex flex-col items-center justify-center h-64 max-w-3xl p-10 mt-10 text-center md:h-80 lg:h-96">
          <div className="relative w-full h-full">
            <Image src="/empty.svg" layout="fill" />
          </div>
          <p className="mt-4 lg:mt-12 font-mono">No quizzes found.</p>
        </div>
      )}
    </>
  );
};

export default Quizzes;
