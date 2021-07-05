import React from "react";

import { CommentResponseFragment } from "@generated/graphql";
import { formatDate } from "@utils/index";

interface Props extends CommentResponseFragment {
  isAuthor: boolean;
}

const CommentCard: React.FC<Props> = ({
  text,
  author: { firstName, lastName, username, avatar },
  isAuthor,
  createdAt,
}) => {
  return (
    <li className="p-3 bg-white rounded-md shadow">
      <div className="flex justify-between">
        <div className="flex items-center mb-2 space-x-4">
          <img
            className="inline-block w-10 h-10 rounded-full"
            src={
              avatar ??
              "https://images.pexels.com/photos/3722806/pexels-photo-3722806.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            }
            alt={username}
          />
          <p className="font-medium">{`${firstName} ${lastName}`}</p>
        </div>
        <div className="flex items-start">
          {isAuthor && (
            <span className="mr-2 inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-indigo-100 text-indigo-800">
              Author
            </span>
          )}
          <p>{formatDate(createdAt)}</p>
        </div>
      </div>
      <p className="break-words whitespace-pre-line ml-14">{text}</p>
    </li>
  );
};

export default CommentCard;
