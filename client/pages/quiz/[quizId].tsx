import React from "react";

import LikeButton from "@components/buttons/LikeButton";
import TakeButton from "@components/buttons/TakeButton";
import CommentCard from "@components/cards/CommentCard";
import ImageHolder from "@components/cards/ImageHolder";
import CommentInput from "@components/CommentInput";
import Container from "@components/ui/Container";
import MainContainer from "@components/ui/MainContainer";
import { useGetCommentsQuery, useGetQuizQuery } from "@generated/graphql";
import { EyeIcon, CollectionIcon } from "@heroicons/react/outline";
import { getLastItemDate } from "@utils/index";
import { useIsAuth } from "@utils/useIsAuth";
import withApollo from "@utils/withApollo";
import { useRouter } from "next/router";

import BookmarkButton from "../../components/buttons/BookmarkButton";

interface Props {}

const SingleQuizPage: React.FC<Props> = () => {
  const me = useIsAuth();
  const router = useRouter();

  const quizId = router.query.quizId as string;

  const { data, loading } = useGetQuizQuery({
    variables: {
      quizId,
      isInput: false,
    },
  });

  const {
    data: commentData,
    loading: commentLoading,
    fetchMore,
    variables,
  } = useGetCommentsQuery({
    variables: {
      quizId,
      limit: 5,
      cursor: null,
    },
  });

  if (!data?.getQuiz) {
    return <p>Loading</p>;
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
    authorId,
  } = data.getQuiz;

  return (
    <MainContainer title={`Quiz | ${title}`}>
      <Container showSearchBar={false}>
        <main className="relative flex-1 overflow-y-auto focus:outline-none">
          <div className="py-6">
            <div className="flex max-w-4xl px-4 mx-auto space-x-6 sm:px-6 md:px-8">
              <div className="flex-1 space-y-3">
                <div className="p-2 bg-white rounded-md shadow">
                  {quizPhoto && (
                    <ImageHolder loading={loading} image={quizPhoto} />
                  )}
                  <div className="px-4 pt-4 pb-6">
                    <h3 className="mb-4 text-4xl font-bold tracking-tight text-gray-900">
                      {title}
                    </h3>
                    <p className="break-words whitespace-pre-line">
                      {description}
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between w-full px-4 py-3 bg-white rounded-md shadow xl:flex-col xl:justify-around xl:px-1 xl:py-4 xl:w-20 xl:flex xl:fixed xl:bottom-24 xl:top-24 xl:right-8">
                  <div className="hidden xl:block">
                    <BookmarkButton
                      quizId={quizId}
                      isBookmarked={isBookmarked!}
                    />
                  </div>
                  <div className="space-x-2 text-center xl:space-y-4 xl:space-x-0">
                    <LikeButton
                      quizId={quizId}
                      isLiked={isLiked!}
                      likeCount={likeCount!}
                    />
                    <div className="inline-flex items-center px-3 py-2 text-base font-medium leading-4 text-gray-500 hover:text-yellow-500 rounded-2xl hover:bg-gray-100">
                      <CollectionIcon
                        className="-ml-0.5 mr-2 h-6 w-6"
                        aria-hidden="true"
                      />
                      {questionCount}
                    </div>
                    <div className="inline-flex items-center px-3 py-2 text-base font-medium leading-4 text-gray-500 hover:text-purple-500 rounded-2xl hover:bg-gray-100">
                      <EyeIcon
                        className="-ml-0.5 mr-2 h-6 w-6"
                        aria-hidden="true"
                      />
                      0
                    </div>
                  </div>
                  <div className="flex justify-end space-x-2 xl:space-x-0">
                    <div className="block xl:hidden">
                      <BookmarkButton
                        quizId={quizId}
                        isBookmarked={isBookmarked!}
                      />
                    </div>
                    <TakeButton quizId={quizId} />
                  </div>
                </div>
                <CommentInput
                  quizId={quizId}
                  me={me}
                  commentCount={commentCount!}
                />
                <ul className="space-y-3 ">
                  {!commentData && commentLoading && (
                    <div className="my-10">
                      <p>Loading...</p>
                    </div>
                  )}
                  {commentData &&
                    !commentLoading &&
                    commentData.getComments.comments.map((comment) => (
                      <CommentCard
                        key={comment.id}
                        isAuthor={comment.authorId === authorId}
                        {...comment}
                      />
                    ))}
                </ul>
                {commentData?.getComments.hasMore && (
                  <button
                    type="button"
                    className="flex px-2 py-1 mx-auto bg-white rounded-md shadow-sm active:bg-gray-50 focus:outline-none"
                    onClick={() => {
                      fetchMore({
                        variables: {
                          quizId: variables?.quizId,
                          limit: variables?.limit,
                          cursor: getLastItemDate(
                            commentData?.getComments.comments
                          ),
                        },
                      });
                    }}
                  >
                    {commentLoading ? "Loading.." : "Load more"}
                  </button>
                )}
              </div>
            </div>
          </div>
        </main>
      </Container>
    </MainContainer>
  );
};

export default withApollo({ ssr: true })(SingleQuizPage);
