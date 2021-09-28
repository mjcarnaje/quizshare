import React from "react";

import Avatar from "@components/Avatar";
import MenuDropdown from "@components/dropdowns/MenuDropdown";
import { CommentFragment, useDeleteCommentMutation } from "@generated/graphql";
import { Menu } from "@headlessui/react";
import { TrashIcon } from "@heroicons/react/outline";
import { DotsHorizontalIcon, PencilAltIcon } from "@heroicons/react/solid";
import { setCommentInput } from "@store/commentInput";
import { classNames, formatDate } from "@utils/index";
import { useDispatch } from "react-redux";

interface Props {
  quizId: string;
  comment: CommentFragment;
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
        "w-full p-2 group flex"
      )}
    >
      <div className="mr-4">
        <Avatar avatarUrl={avatar} alt={firstName[0]} />
      </div>
      <div className="flex-1">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <p className="font-bold text-lg text-gray-800">{`${firstName} ${lastName}`}</p>
            {isAuthor && (
              <>
                <p className="mx-2 text-gray-700">&#8226;</p>
                <p className="text-purple-500 font-medium">Author</p>
              </>
            )}
          </div>
          <div>
            <div className="hidden group-hover:block">
              {isMine ? (
                <MenuDropdown
                  anchor={
                    <Menu.Button className="flex items-center p-2 -m-2 text-gray-400 transition transform rounded-full active:scale-90 focus:outline-none active:bg-gray-200 hover:text-gray-600">
                      <DotsHorizontalIcon
                        className="w-5 h-5"
                        aria-hidden="true"
                      />
                    </Menu.Button>
                  }
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
                                commentCount: (old) => {
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
              ) : null}
            </div>
          </div>
        </div>
        <div className="my-1">
          <p className="break-words whitespace-pre-line">{text}</p>
        </div>
        <div className="flex items-center">
          <p className="text-sm">
            {`${formatDate(createdAt)}${
              createdAt !== updatedAt ? " (edited)" : ""
            }`}
          </p>
        </div>
      </div>
    </li>
  );
};

export default CommentCard;
