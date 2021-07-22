import React from "react";

import Avatar from "@components/ui/Avatar";
import Skeleton from "react-loading-skeleton";

interface Props {}

const QuizCardSkeleton: React.FC<Props> = () => {
  return (
    <div className="p-4 overflow-hidden bg-white">
      <div className="flex space-x-3">
        <div className="flex-shrink-0">
          <Avatar loading />
        </div>
        <div className="flex items-center">
          <p className="text-sm font-medium">
            <Skeleton width={120} height={12} />
          </p>
        </div>
      </div>
      <div className="w-full p-2 rounded-md cursor-pointer group md:flex ">
        <div className="w-full">
          <h2 className="text-3xl font-bold leading-tight tracking-tight break-all sm:w-11/12 md:w-6/12">
            <Skeleton />
          </h2>
          <div className="flex gap-4 mt-1 mb-4">
            <span className="flex items-center space-x-1 text-sm font-medium text-gray-700">
              <Skeleton width={10} height={10} />
              <Skeleton width={40} height={10} />
            </span>
            <span className="flex items-center space-x-1 text-sm font-medium text-gray-700">
              <Skeleton width={10} height={10} />
              <Skeleton width={40} height={10} />
            </span>
            <span className="flex items-center space-x-1 text-sm font-medium text-gray-700">
              <Skeleton width={10} height={10} />
              <Skeleton width={40} height={10} />
            </span>
          </div>
          <p className="w-8/12 break-words whitespace-pre-line ">
            <Skeleton count={2} />
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuizCardSkeleton;
