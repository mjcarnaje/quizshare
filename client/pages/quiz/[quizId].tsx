import React from "react";

import CommentCard from "@components/cards/CommentCard";
import ImageHolder from "@components/cards/ImageHolder";
import CommentInput from "@components/CommentInput";
import Container from "@components/ui/Container";
import MainContainer from "@components/ui/MainContainer";
import { useGetCommentsQuery, useGetQuizQuery } from "@generated/graphql";
import { useIsAuth } from "@utils/useIsAuth";
import withApollo from "@utils/withApollo";
import { useRouter } from "next/router";

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

  const { data: commentData, loading: commentLoading } = useGetCommentsQuery({
    variables: {
      commentsInput: {
        quizId,
        cursor: null,
        limit: 9999,
      },
    },
  });

  if (!data?.getQuiz) {
    return <p>Loading</p>;
  }

  const { title, description, quizPhoto, commentCount } = data.getQuiz;

  return (
    <MainContainer title={title}>
      <Container>
        <main className="relative flex-1 overflow-y-auto focus:outline-none">
          <div className="py-6">
            <div className="flex max-w-4xl px-4 mx-auto space-x-6 sm:px-6 md:px-8">
              <div className="flex-1 space-y-3">
                <div className="p-2 bg-white rounded-md shadow">
                  {quizPhoto && (
                    <ImageHolder loading={loading} image={quizPhoto} />
                  )}
                  <div>
                    <h3 className="text-4xl font-bold tracking-tight text-gray-900">
                      {title}
                    </h3>
                    <p>{description}</p>
                  </div>
                </div>
                <CommentInput
                  quizId={quizId}
                  me={me}
                  commentCount={commentCount}
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
                      <CommentCard key={comment.id} {...comment} />
                    ))}
                </ul>
              </div>
              <div>hello</div>
            </div>
          </div>
        </main>
      </Container>
    </MainContainer>
  );
};

export default withApollo({ ssr: true })(SingleQuizPage);
