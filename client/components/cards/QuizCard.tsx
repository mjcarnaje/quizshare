import React from "react";

import moment from "moment";
import Image from "next/image";

import { Quiz, QuizCardResponseFragment, User } from "../../generated/graphql";
import Avatar from "../ui/Avatar";

function truncateText(text: string, len: number = 320): string {
  if (text.length > len) {
    return `${text.slice(0, len)}...`;
  }
  return text;
}

function formatDate(date: string): string {
  const moreThanOneDay = moment(parseInt(date))
    .fromNow(true)
    .includes("day" || "week" || "month" || "year");

  if (moreThanOneDay) {
    return moment(parseInt(date)).format("ll");
  }

  return `${moment(parseInt(date)).fromNow(true)} ago`;
}

export const QuizCard: React.FC<QuizCardResponseFragment> = ({
  title,
  description,
  quizPhoto,
  questionsLength,
  createdAt,
  author,
}) => {
  const { firstName, lastName, avatar = "" } = author;

  return (
    <li className="p-4 overflow-hidden bg-white ">
      <Avatar name={`${firstName} ${lastName}`} img={avatar as string} />
      <div className="w-full p-2 mt-2 rounded-md cursor-pointer group md:flex ">
        <div className="w-full">
          <h2 className="text-3xl font-bold leading-tight tracking-tight">
            {title}
          </h2>
          <div className="flex gap-4 mb-4">
            <span className="flex items-center text-sm font-medium text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>

              {formatDate(createdAt)}
            </span>
            <span className="flex items-center text-sm font-medium text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
              0 Submitted
            </span>
            <span className="flex items-center text-sm font-medium text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
              {`${questionsLength} Questions`}
            </span>
          </div>
          <p className="mt-1 text-lg leading-snug tracking-tight break-words">
            {truncateText(description)}
          </p>
        </div>
        <div className="self-start flex-shrink-0 ml-8">
          {quizPhoto && (
            <div className="w-full overflow-hidden bg-gray-100 rounded-md md:w-60">
              <div className="relative w-full pb-[56.25%]">
                <Image
                  src={quizPhoto}
                  layout="fill"
                  objectFit="cover"
                  alt="thumbnail"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </li>
  );
};
