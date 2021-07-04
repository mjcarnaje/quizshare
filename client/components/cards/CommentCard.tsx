import React from "react";

import { Comment, User } from "@generated/graphql";
import { formatDate } from "@utils/index";

type IComment = { __typename?: "Comment" } & Pick<
  Comment,
  "id" | "text" | "createdAt"
> & {
    author: { __typename?: "User" } & Pick<
      User,
      "id" | "avatar" | "firstName" | "lastName" | "email" | "username"
    >;
  };

interface Props extends IComment {}

const CommentCard: React.FC<Props> = ({
  text,
  author: { firstName, lastName, username, avatar },
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
        <p>{formatDate(createdAt)}</p>
      </div>
      <p className="break-words whitespace-pre-line ml-14">{text}</p>
    </li>
  );
};

export default CommentCard;
