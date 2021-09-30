import React from "react";

import BookmarkButton from "@components/buttons/BookmarkButton";
import LikeButton from "@components/buttons/LikeButton";
import TakeButton from "@components/buttons/TakeButton";
import CommentInput from "@components/comments/CommentInput";
import Comments from "@components/comments/Comments";
import ImageHolder from "@components/ImageHolder";
import Layout from "@components/layout/Layout";
import NestedLayout from "@components/layout/NestedLayout";
import { useGetQuizQuery } from "@generated/graphql";
import { CollectionIcon, EyeIcon } from "@heroicons/react/outline";
import { useGetQuery } from "@utils/useGetQuery";
import { useUser } from "@utils/useUser";
import withApollo from "@utils/withApollo";
import Skeleton from "react-loading-skeleton";

const Wrapper: React.FC<{ title: string }> = ({ title, children }) => {
  return (
    <Layout title={`Quiz | ${title}`}>
      <NestedLayout showSearchBar={false}>
        <div className="flex max-w-3xl px-4 mx-auto space-x-6 sm:px-6 md:px-8">
          <div className="flex-1 w-full">{children}</div>
        </div>
      </NestedLayout>
    </Layout>
  );
};

interface Props {}

const QuizLanding: React.FC<Props> = () => {
  const quizId = useGetQuery("quizId");

  const { user } = useUser({ noRedirect: true });

  const { data, loading, error } = useGetQuizQuery({
    variables: { quizId },
  });

  if (!data) {
    return (
      <Wrapper title={loading ? "Loading.." : "Error"}>
        {loading && (
          <>
            <div className="p-2 bg-white rounded-md shadow">
              <ImageHolder loading />
              <div className="px-4 pt-4 pb-6">
                <h3 className="mb-4 text-4xl font-bold tracking-tight text-gray-900">
                  <Skeleton />
                </h3>
                <p className="break-words whitespace-pre-line">
                  <Skeleton count={5} />
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between w-full my-3 px-4 py-3 bg-white rounded-md shadow">
              <div className="space-x-2 text-center">
                <Skeleton circle height={28} width={28} />
                <div className="inline-flex items-center px-3 py-2 text-base font-medium leading-4 text-gray-500 hover:text-yellow-500 rounded-2xl hover:bg-gray-100">
                  <Skeleton circle height={28} width={28} />
                </div>
                <div className="inline-flex items-center px-3 py-2 text-base font-medium leading-4 text-gray-500 hover:text-purple-500 rounded-2xl hover:bg-gray-100">
                  <Skeleton circle height={28} width={28} />
                </div>
              </div>
              <div className="flex justify-end space-x-2">
                <div className="block">
                  <Skeleton circle height={28} width={28} />
                </div>
                <Skeleton circle height={28} width={28} />
              </div>
            </div>
          </>
        )}
        {error && <p>{`Error: ${error?.message}`}</p>}
      </Wrapper>
    );
  }

  const {
    title,
    description,
    quizPhoto,
    commentCount,
    isLiked,
    questionCount,
    likeCount,
    isBookmarked,
    takerCount,
    authorId,
  } = data.getQuiz;

  return (
    <Wrapper title={title}>
      <div className="p-2 bg-white rounded-md shadow">
        {quizPhoto && <ImageHolder loading={loading} image={quizPhoto} />}
        <div className="px-4 pt-4 pb-6">
          <h3 className="mb-4 text-4xl font-bold tracking-tight text-gray-900">
            {title}
          </h3>
          <p className="break-words whitespace-pre-line">{description}</p>
        </div>
      </div>
      <div className="flex items-center justify-between w-full my-3 px-4 py-3 bg-white rounded-md shadow">
        <div className="space-x-2 text-center">
          <LikeButton quizId={quizId} isLiked={isLiked} likeCount={likeCount} />
          <div className="inline-flex items-center px-3 py-2 text-base font-medium leading-4 text-gray-500 hover:text-yellow-500 rounded-2xl hover:bg-gray-100">
            <CollectionIcon
              className="-ml-0.5 mr-2 h-6 w-6"
              aria-hidden="true"
            />
            {questionCount}
          </div>
          <div className="inline-flex items-center px-3 py-2 text-base font-medium leading-4 text-gray-500 hover:text-purple-500 rounded-2xl hover:bg-gray-100">
            <EyeIcon className="-ml-0.5 mr-2 h-6 w-6" aria-hidden="true" />
            {takerCount}
          </div>
        </div>
        <div className="flex justify-end space-x-2">
          <div className="block">
            <BookmarkButton quizId={quizId} isBookmarked={isBookmarked} />
          </div>
          <TakeButton quizId={quizId} />
        </div>
      </div>
      <div className="flex items-center justify-between my-4">
        <p className="inline-block text-base">{`${commentCount} Comments`}</p>
      </div>
      <CommentInput quizId={quizId} userInfo={user} />
      <Comments quizId={quizId} authorId={authorId} />
    </Wrapper>
  );
};

export default withApollo({ ssr: true })(QuizLanding);
