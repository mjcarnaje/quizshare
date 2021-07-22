import React, { useEffect } from "react";

import Quizzes from "@components/quizzes/Quizzes";
import MainContainer from "@components/ui/MainContainer";
import { useIsAuth } from "@utils/useIsAuth";
import { useRouter } from "next/router";

import Container from "../components/ui/Container";
import { QUIZZES_LIMIT } from "../constant/index";
import { useGetQuizzesQuery } from "../generated/graphql";
import withApollo from "../utils/withApollo";

const IndexPage = () => {
  useIsAuth();

  const router = useRouter();

  const { data, loading, fetchMore, variables } = useGetQuizzesQuery({
    variables: {
      isMine: false,
      isPublished: true,
      quizzesInput: {
        limit: QUIZZES_LIMIT,
        cursor: null,
        ...router.query,
      },
    },
  });

  const quizzes = (data?.getQuizzes.quizzes || []).filter(
    (quiz) => quiz.author.isFollowed || quiz.isMine
  );
  const pageInfo = data?.getQuizzes.pageInfo;

  useEffect(() => {
    if (
      data &&
      pageInfo?.hasNextPage &&
      data.getQuizzes.quizzes.length > quizzes.length
    ) {
      fetchMore({
        variables: {
          ...variables,
          quizzesInput: {
            ...variables?.quizzesInput,
            cursor: pageInfo?.endCursor,
          },
        },
      });
    }
  }, [pageInfo, quizzes, data]);

  return (
    <MainContainer title="Home">
      <Container>
        <main className="relative flex-1 overflow-y-auto">
          <div className="py-6">
            <div className="px-4 mx-auto mt-3 max-w-7xl sm:px-6 md:px-8">
              <div className="max-w-3xl overflow-hidden bg-white shadow sm:rounded-md">
                <Quizzes
                  type="timeline"
                  quizzes={quizzes}
                  pageInfo={pageInfo}
                  loading={loading}
                  onLoadMore={() =>
                    fetchMore({
                      variables: {
                        ...variables,
                        quizzesInput: {
                          ...variables?.quizzesInput,
                          cursor: pageInfo?.endCursor,
                        },
                      },
                    })
                  }
                />
              </div>
            </div>
          </div>
        </main>
      </Container>
    </MainContainer>
  );
};

export default withApollo({ ssr: true })(IndexPage);
