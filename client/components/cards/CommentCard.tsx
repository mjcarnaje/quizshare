import React, { Fragment } from "react";

import { CommentResponseFragment } from "@generated/graphql";
import { Menu, Transition } from "@headlessui/react";
import { TrashIcon } from "@heroicons/react/outline";
import { DotsVerticalIcon, PencilAltIcon } from "@heroicons/react/solid";
import { classNames, formatDate } from "@utils/index";

import { useDeleteCommentMutation } from "../../generated/graphql";

interface Props {
  quizId: string;
  comment: CommentResponseFragment;
  isAuthor: boolean;
}

const CommentCard: React.FC<Props> = ({
  quizId,
  comment: {
    id,
    text,
    author: { firstName, lastName, username, avatar },
    createdAt,
    isMine,
  },
  isAuthor,
}) => {
  const [deleteComment] = useDeleteCommentMutation();

  return (
    <li className="p-4 space-y-4 bg-white rounded-md shadow sm:px-6">
      <div className="flex space-x-3">
        <div className="flex-shrink-0">
          <img
            className="w-10 h-10 rounded-full"
            src={
              avatar ??
              "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            }
            alt={username}
          />
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
          {isMine && (
            <Menu as="div" className="relative z-30 inline-block text-left">
              {({ open }) => (
                <>
                  <div>
                    <Menu.Button className="flex items-center p-2 -m-2 text-gray-400 rounded-full hover:text-gray-600 focus:outline-none active:bg-gray-200">
                      <span className="sr-only">Open options</span>
                      <DotsVerticalIcon
                        className="w-5 h-5"
                        aria-hidden="true"
                      />
                    </Menu.Button>
                  </div>

                  <Transition
                    show={open}
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items
                      static
                      className="absolute right-0 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    >
                      <div className="py-1">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "group flex items-center px-4 py-2 text-sm"
                              )}
                            >
                              <PencilAltIcon
                                className="w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-500"
                                aria-hidden="true"
                              />
                              Edit
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              type="button"
                              onClick={async () => {
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
                              }}
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "group flex items-center px-4 py-2 text-sm w-full focus:outline-none"
                              )}
                            >
                              <TrashIcon
                                className="w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-500"
                                aria-hidden="true"
                              />
                              Delete
                            </button>
                          )}
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                </>
              )}
            </Menu>
          )}
        </div>
      </div>
      <p className="break-words whitespace-pre-line">{text}</p>
    </li>
  );
};

export default CommentCard;
