import React, { useRef, useState } from "react";

import LikeButton from "@components/buttons/LikeButton";
import {
  CalendarIcon,
  CollectionIcon,
  EyeIcon,
  PencilIcon,
  TrashIcon,
} from "@heroicons/react/outline";
import { formatDate } from "@utils/index";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import {
  QuizCardResponseFragment,
  useDeleteQuizMutation,
} from "../../generated/graphql";
import BookmarkButton from "../buttons/BookmarkButton";
import CommentButton from "../buttons/CommentButton";
import DeleteQuizModal from "../modals/DeleteQuizModal";
import Avatar from "../ui/Avatar";

function truncateText(text: string, len: number = 320): string {
  if (text.length > len) {
    return `${text.slice(0, len)}...`;
  }
  return text;
}

interface Props extends QuizCardResponseFragment {
  type: "timeline" | "draft" | "published";
}

export const QuizCard: React.FC<Props> = ({
  id,
  title,
  description,
  quizPhoto,
  questionCount,
  createdAt,
  author,
  type,
  likeCount,
  commentCount,
  isMine,
  isLiked,
  isBookmarked,
}) => {
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const cancelButtonRef = useRef(null);

  const [deleteQuizMutation, { loading: deletingQuiz }] =
    useDeleteQuizMutation();

  const deleteQuiz = async () => {
    try {
      await deleteQuizMutation({
        variables: { quizId: id },
        update: (cache) => {
          cache.evict({ id: "Quiz:" + id });
        },
      });
    } catch (err) {
      console.error(err);
    }
  };

  const { firstName, lastName, avatar = "" } = author;

  return (
    <li className="p-4 overflow-hidden bg-white ">
      <DeleteQuizModal {...{ open, setOpen, deleteQuiz, cancelButtonRef }} />
      {type === "timeline" && (
        <div className="mb-2">
          <Avatar name={`${firstName} ${lastName}`} img={avatar as string} />
        </div>
      )}
      <div className="w-full p-2 rounded-md cursor-pointer group md:flex ">
        <div className="w-full">
          <Link href={`/quiz/${id}`}>
            <h2 className="text-3xl font-bold leading-tight tracking-tight break-all">
              {title}
            </h2>
          </Link>
          <div className="flex gap-4 mb-4">
            <span className="flex items-center text-sm font-medium text-gray-700">
              <CalendarIcon className="w-4 h-4 mr-1" />
              {formatDate(createdAt)}
            </span>
            <span className="flex items-center text-sm font-medium text-gray-700">
              <EyeIcon className="w-4 h-4 mr-1" />0 Submitted
            </span>
            <span className="flex items-center text-sm font-medium text-gray-700">
              <CollectionIcon className="w-4 h-4 mr-1" />
              {`${questionCount} Questions`}
            </span>
          </div>
          <Link href={`/quiz/${id}`}>
            <p className="mt-1 text-lg leading-snug tracking-tight break-words">
              {truncateText(description)}
            </p>
          </Link>
        </div>
        {quizPhoto && (
          <Link href={`/quiz/${id}`}>
            <div className="self-start flex-shrink-0 ml-6">
              <div className="w-full overflow-hidden bg-gray-100 rounded-md md:w-64">
                <div className="relative w-full pb-[56.25%]">
                  <Image
                    src={quizPhoto}
                    layout="fill"
                    objectFit="cover"
                    alt="thumbnail"
                  />
                </div>
              </div>
            </div>
          </Link>
        )}
      </div>
      <div className="flex justify-between w-full mt-2">
        {type !== "draft" ? (
          <div className="flex space-x-2">
            <LikeButton quizId={id} isLiked={isLiked} likeCount={likeCount} />
            <CommentButton quizId={id} commentCount={commentCount} />
          </div>
        ) : (
          <div />
        )}
        {type === "timeline" && (
          <BookmarkButton quizId={id} isBookmarked={isBookmarked} />
        )}

        {isMine && type !== "timeline" && (
          <div className="flex space-x-3">
            <button
              onClick={() => setOpen(true)}
              className="inline-flex items-center px-3 py-1.5 font-medium hover:bg-gray-200 rounded-md focus:outline-none"
            >
              <TrashIcon className="w-5 h-5 mr-1 -ml-1 text-gray-600" />
              {deletingQuiz ? "Deleting" : "Delete"}
            </button>

            <button
              onClick={() => router.push(`/me/drafts/${id}`)}
              className="inline-flex items-center px-3 py-1.5 font-medium border border-gray-600 hover:bg-gray-200  rounded-md focus:outline-none"
            >
              <PencilIcon className="w-5 h-5 mr-1 -ml-1 text-gray-600" />
              {type === "draft" ? "Continue" : "Edit"}
            </button>
          </div>
        )}
      </div>
    </li>
  );
};
