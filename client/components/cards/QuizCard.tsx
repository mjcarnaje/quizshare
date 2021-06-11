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
    <div className="p-2 bg-white rounded-md shadow-md md:flex">
      <div className="self-center flex-shrink-0 mr-4">
        {quizPhoto && (
          <div className="w-full overflow-hidden rounded-md md:w-60 ">
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
      <div>
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="mt-1">{description}</p>
        <span className="mt-1 text-sm">
          {`${moment(new Date(parseInt(createdAt))).fromNow(true)} ago`}
        </span>
      </div>
    </div>
  );
};

//  <div className="flex">
//    <div className="self-center flex-shrink-0 mr-4">
//      <svg
//        className="w-16 h-16 text-gray-300 bg-white border border-gray-300"
//        preserveAspectRatio="none"
//        stroke="currentColor"
//        fill="none"
//        viewBox="0 0 200 200"
//        aria-hidden="true"
//      >
//        <path
//          vectorEffect="non-scaling-stroke"
//          strokeWidth={1}
//          d="M0 0l200 200M0 200L200 0"
//        />
//      </svg>
//    </div>
//    <div>
//      <h4 className="text-lg font-bold">Lorem ipsum</h4>
//      <p className="mt-1">
//        Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam
//        expedita quia omnis voluptatem. Minus quidem ipsam quia iusto.
//      </p>
//    </div>
//  </div>;
