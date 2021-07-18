import React from "react";

import MenuDropdown from "@components/buttons/MenuDropdown";
import Avatar from "@components/ui/Avatar";
import { CommentResponseFragment } from "@generated/graphql";
import { TrashIcon } from "@heroicons/react/outline";
import { PencilAltIcon } from "@heroicons/react/solid";
import { formatDate } from "@utils/index";
import { useDispatch } from "react-redux";
import { setCommentInput } from "store/commentInput";

import { useDeleteCommentMutation } from "../../generated/graphql";
import { classNames } from "../../utils/index";

interface Props {
  quizId: string;
  comment: CommentResponseFragment;
  isAuthor: boolean;
  hideToEdit: boolean;
}

const CommentCard: React.FC<Props> = ({
  quizId,
  comment: {
    id,
    text,
    author: { firstName, lastName, avatar },
    isMine,
    createdAt,
    updatedAt,
  },
  isAuthor,
  hideToEdit,
}) => {
  const dispatch = useDispatch();
  const [deleteComment] = useDeleteCommentMutation();

  return (
    <li
      className={classNames(
        hideToEdit ? "hidden" : "",
        "p-4 space-y-4 bg-white rounded-md shadow sm:px-6"
      )}
    >
      <div className="flex space-x-3">
        <div className="flex-shrink-0">
          <Avatar avatarUrl={avatar} alt="Your avatar" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-900">
            <a href="#" className="hover:underline">
              {firstName + lastName}
            </a>
          </p>
          <p className="text-sm text-gray-500">
            <a href="#" className="hover:underline">
              {formatDate(createdAt)}
            </a>
          </p>
        </div>
        <div className="flex self-center flex-shrink-0">
          {isAuthor && (
            <span className="mr-2 inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-indigo-100 text-indigo-800">
              Author
            </span>
          )}
          {createdAt !== updatedAt && (
            <span className="mr-2 inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-blue-100 text-blue-800">
              Edited
            </span>
          )}
          {isMine && (
            <MenuDropdown
              type="array"
              options={[
                {
                  icon: PencilAltIcon,
                  text: "Edit",
                  onClick: () => {
                    dispatch(setCommentInput({ commentId: id, text }));
                  },
                },
                {
                  icon: TrashIcon,
                  text: "Delete",
                  onClick: async () => {
                    await deleteComment({
                      variables: { quizId, commentId: id },
                      update: (cache) => {
                        cache.evict({
                          id: `Comment:${id}`,
                        });
                        cache.modify({
                          id: `Quiz:${quizId}`,
                          fields: {
                            commentCount(old) {
                              return old - 1;
                            },
                          },
                        });
                      },
                    });
                  },
                },
              ]}
            />
          )}
        </div>
      </div>
      <p className="break-words whitespace-pre-line">{text}</p>
    </li>
  );
};

export default CommentCard;
