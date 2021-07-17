import React from "react";

import { useRouter } from "next/router";

interface Props {
  quizId: string;
}

const TakeButton: React.FC<Props> = ({ quizId }) => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push(`/take/${quizId}`)}
      type="button"
      className="inline-flex items-center justify-center p-2 text-base font-medium leading-4 text-gray-500 border border-transparent hover:text-blue-500 rounded-2xl hover:bg-gray-100 focus:outline-none"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </button>
  );
};

export default TakeButton;
