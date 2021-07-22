import React from "react";

import Quizzes from "@components/quizzes/Quizzes";
import MainContainer from "@components/ui/MainContainer";
import withApollo from "@utils/withApollo";
import { useRouter } from "next/router";

import Container from "../../components/ui/Container";
import { QUIZZES_LIMIT } from "../../constant/index";
import { useGetQuizzesQuery } from "../../generated/graphql";
import { useIsAuth } from "../../utils/useIsAuth";

interface Props {}

const PublishedPage: React.FC<Props> = () => {
  useIsAuth();

  const router = useRouter();

  const { data, loading, fetchMore, variables } = useGetQuizzesQuery({
    variables: {
      isMine: true,
      isPublished: true,
      quizzesInput: {
        limit: QUIZZES_LIMIT,
        ...router.query,
      },
    },
  });

  const quizzes = data?.getQuizzes.quizzes;
  const pageInfo = data?.getQuizzes.pageInfo;

  return (
    <MainContainer title="Home">
      <Container>
        <main className="relative flex-1 overflow-y-auto focus:outline-none">
          <div className="py-6">
            <div className="px-4 mx-auto mt-3 max-w-7xl sm:px-6 md:px-8">
              <div className="max-w-3xl overflow-hidden bg-white shadow sm:rounded-md">
                <Quizzes
                  type="published"
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

export default withApollo({ ssr: true })(PublishedPage);
