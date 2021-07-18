import React from "react";

import LikeButton from "@components/buttons/LikeButton";
import TakeButton from "@components/buttons/TakeButton";
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

import BookmarkButton from "../../components/buttons/BookmarkButton";

const SingleQuizWrapper: React.FC<{ title?: string }> = ({
  title,
  children,
}) => {
  return (
    <MainContainer title={title ? `Quiz | ${title}` : "Loading.."}>
      <Container showSearchBar={false}>
        <main className="relative flex-1 overflow-y-auto focus:outline-none">
          <div className="py-6">
            <div className="flex max-w-4xl px-4 mx-auto space-x-6 sm:px-6 md:px-8">
              <div className="flex-1 space-y-3">{children}</div>
            </div>
          </div>
        </main>
      </Container>
    </MainContainer>
  );
};

interface Props {}

const SingleQuiz: React.FC<Props> = () => {
  const me = useIsAuth();
  const router = useRouter();

  const quizId = router.query.quizId as string;

  const { data, loading } = useGetQuizQuery({
    variables: {
      quizId,
      isInput: false,
    },
  });

  if (!data?.getQuiz) {
    return (
      <SingleQuizWrapper>
        <div className="flex items-center justify-center">
          {loading ? <p>Loading..</p> : <p>Error..</p>}
        </div>
      </SingleQuizWrapper>
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
    <SingleQuizWrapper>
      <div className="p-2 bg-white rounded-md shadow">
        {quizPhoto && <ImageHolder loading={loading} image={quizPhoto} />}
        <div className="px-4 pt-4 pb-6">
          <h3 className="mb-4 text-4xl font-bold tracking-tight text-gray-900">
            {title}
          </h3>
          <p className="break-words whitespace-pre-line">{description}</p>
        </div>
      </div>
      <div className="flex items-center justify-between w-full px-4 py-3 bg-white rounded-md shadow xl:flex-col xl:justify-around xl:px-1 xl:py-4 xl:w-20 xl:flex xl:fixed xl:bottom-24 xl:top-24 xl:right-8">
        <div className="hidden xl:block">
          <BookmarkButton quizId={quizId} isBookmarked={isBookmarked!} />
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
            <EyeIcon className="-ml-0.5 mr-2 h-6 w-6" aria-hidden="true" />0
          </div>
        </div>
        <div className="flex justify-end space-x-2 xl:space-x-0">
          <div className="block xl:hidden">
            <BookmarkButton quizId={quizId} isBookmarked={isBookmarked!} />
          </div>
          <TakeButton quizId={quizId} />
        </div>
      </div>
      <CommentInput quizId={quizId} me={me} commentCount={commentCount!} />
      <Comments quizId={quizId} authorId={authorId!} />
    </SingleQuizWrapper>
  );
};

export default withApollo({ ssr: true })(SingleQuiz);
