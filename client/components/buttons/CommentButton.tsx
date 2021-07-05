import React from "react";

import { ChatIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";

interface Props {
  quizId: string;
  commentCount: number;
}

const CommentButton: React.FC<Props> = ({ quizId, commentCount }) => {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => router.push(`/quiz/${quizId}`)}
      className={`inline-flex items-center px-3 py-2 text-base font-medium leading-4  border border-transparent text-gray-500 hover:text-green-500 rounded-2xl hover:bg-gray-100 focus:outline-none`}
    >
      <ChatIcon className="-ml-0.5 mr-2 h-6 w-6" aria-hidden="true" />
      {commentCount}
    </button>
  );
};

export default CommentButton;