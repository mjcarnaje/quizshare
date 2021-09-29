import React from "react";

import Avatar from "@components/Avatar";
import Skeleton from "react-loading-skeleton";

interface Props {}

const CommentCardSkeleton: React.FC<Props> = () => {
  return (
    <li className="p-2 flex">
      <div className="mr-4">
        <Avatar loading />
      </div>
      <div className="flex-1">
        <div className="flex items-center">
          <div className="flex-1">
            <p className="text-sm font-medium">
              <Skeleton width={120} height={16} />
            </p>
          </div>
        </div>
        <div className="my-2">
          <p className="break-words whitespace-pre-line">
            <Skeleton count={2} />
          </p>
        </div>
      </div>
    </li>
  );
};

export default CommentCardSkeleton;
