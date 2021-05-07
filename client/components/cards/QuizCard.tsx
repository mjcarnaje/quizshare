import React from "react";

import moment from "moment";
import Image from "next/image";

import { QuizCardResponseFragment } from "../../generated/graphql";

interface QuizCardProps extends QuizCardResponseFragment {}

export const QuizCard: React.FC<QuizCardProps> = ({
  title,
  description,
  quizPhoto,
  createdAt,
}) => {
  return (
    <div className="flex w-6/12 p-5 space-x-8 rounded-md shadow-md">
      <div className="flex-grow">
        <h3>{title}</h3>
        <p>{description}</p>
        <p>{`${moment(new Date(parseInt(createdAt))).fromNow(true)} ago`}</p>
      </div>
      {quizPhoto && (
        <div className="overflow-hidden rounded-md w-60 ">
          <div className="relative w-full pb-[56.25%]">
            <Image
              src={quizPhoto}
              layout="fill"
              objectFit="contain"
              alt="thumbnail"
            />
          </div>
        </div>
      )}
    </div>
  );
};
