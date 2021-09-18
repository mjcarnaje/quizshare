import React from "react";

import LikeButton from "@components/buttons/LikeButton";
import TakeButton from "@components/buttons/TakeButton";
import BookmarkButton from "@components/buttons/BookmarkButton";
import CommentInput from "@components/comments/CommentInput";
import Comments from "@components/comments/Comments";
import ImageHolder from "@components/ImageHolder";
import Container from "@components/ui/Container";
import MainContainer from "@components/ui/MainContainer";
import { useGetQuizQuery } from "@generated/graphql";
import { CollectionIcon, EyeIcon } from "@heroicons/react/outline";
import { useIsAuth } from "@utils/useIsAuth";
import withApollo from "@utils/withApollo";
import { useRouter } from "next/router";
import Skeleton from "react-loading-skeleton";

const Wrapper: React.FC<{ title: string }> = ({ title, children }) => {
  return (
    <MainContainer title={`Quiz | ${title}`}>
      <Container showSearchBar={false}>
        <main className="relative flex-1 overflow-y-auto focus:outline-none">
          <div className="py-6">
            <div className="flex max-w-4xl px-4 mx-auto space-x-6 sm:px-6 md:px-8">
              <div className="flex-1 w-full space-y-3">{children}</div>
            </div>
          </div>
        </main>
      </Container>
    </MainContainer>
  );
};

interface Props {}

const QuizLanding: React.FC<Props> = () => {
  const me = useIsAuth();
  const router = useRouter();

  const quizId = router.query.quizId as string;

  const { data, loading, error } = useGetQuizQuery({
    variables: {
      quizId,
      isInput: false,
    },
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
            <div className="flex items-center justify-between w-full px-4 py-3 bg-white rounded-md shadow xl:flex-col xl:justify-around xl:px-1 xl:py-4 xl:w-20 xl:flex xl:fixed xl:bottom-24 xl:top-24 xl:right-8">
              <div className="hidden xl:block">
                <Skeleton circle height={28} width={28} />
              </div>
              <div className="space-x-2 text-center xl:space-y-4 xl:space-x-0">
                <Skeleton circle height={28} width={28} />
                <div className="inline-flex items-center px-3 py-2 text-base font-medium leading-4 text-gray-500 hover:text-yellow-500 rounded-2xl hover:bg-gray-100">
                  <Skeleton circle height={28} width={28} />
                </div>
                <div className="inline-flex items-center px-3 py-2 text-base font-medium leading-4 text-gray-500 hover:text-purple-500 rounded-2xl hover:bg-gray-100">
                  <Skeleton circle height={28} width={28} />
                </div>
              </div>
              <div className="flex justify-end space-x-2 xl:space-x-0">
                <div className="block xl:hidden">
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
      <div className="flex items-center justify-between w-full px-4 py-3 bg-white rounded-md shadow 2xl:flex-col 2xl:justify-around 2xl:px-1 2xl:py-4 2xl:w-20 2xl:flex 2xl:fixed 2xl:bottom-24 2xl:top-24 2xl:right-8">
        <div className="hidden 2xl:block">
          <BookmarkButton quizId={quizId} isBookmarked={isBookmarked!} />
        </div>
        <div className="space-x-2 text-center 2xl:space-y-4 2xl:space-x-0">
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
            <EyeIcon className="-ml-0.5 mr-2 h-6 w-6" aria-hidden="true" />0
          </div>
        </div>
        <div className="flex justify-end space-x-2 2xl:space-x-0">
          <div className="block 2xl:hidden">
            <BookmarkButton quizId={quizId} isBookmarked={isBookmarked!} />
          </div>
          <TakeButton quizId={quizId} />
        </div>
      </div>
      <CommentInput quizId={quizId} me={me} commentCount={commentCount} />
      <Comments quizId={quizId} authorId={authorId!} />
    </Wrapper>
  );
};

export default withApollo({ ssr: true })(QuizLanding);
