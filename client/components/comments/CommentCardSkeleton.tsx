import React from "react";

import Avatar from "@components/Avatar";
import Skeleton from "react-loading-skeleton";

interface Props {}

const CommentCardSkeleton: React.FC<Props> = () => {
  return (
    <div className="p-4 space-y-4 bg-white rounded-md shadow sm:px-6">
      <div className="flex space-x-3">
        <div className="flex-shrink-0">
          <Avatar loading />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium">
            <Skeleton width={120} height={12} />
          </p>
          <p className="text-sm text-gray-500">
            <Skeleton width={80} height={12} />
          </p>
        </div>
      </div>
      <p className="break-words whitespace-pre-line">
        <Skeleton count={2} />
      </p>
    </div>
  );
};

export default CommentCardSkeleton;
