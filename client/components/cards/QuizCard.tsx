import React from "react";

import moment from "moment";
import Image from "next/image";

import { Quiz } from "../../generated/graphql";

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

export const QuizCard: React.FC<
  Pick<Quiz, "title" | "description" | "quizPhoto" | "createdAt">
> = ({ title, description, quizPhoto, createdAt }) => {
  return (
    <div className="w-full p-2 rounded-md cursor-pointer active:bg-gray-200 active:ring-1 ring-gray-300 group md:flex ">
      <div className="self-start flex-shrink-0 mr-4">
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
      <div className="w-full">
        <h2 className="text-xl font-bold">{title}</h2>
        <div className="flex gap-2">
          <span className="text-sm font-light">{formatDate(createdAt)}</span>
          <span className="text-sm font-light">30 Submitted</span>
          <span className="text-sm font-light">2 Questions</span>
        </div>
        <p className="mt-1">{truncateText(description)}</p>
      </div>
    </div>
  );
};
