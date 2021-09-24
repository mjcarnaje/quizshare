import React from "react";

import Quizzes from "@components/quizzes/Quizzes";
import Container from "@components/ui/Container";
import MainContainer from "@components/ui/MainContainer";
import { QUIZZES_LIMIT } from "@constant/index";
import { useGetQuizzesQuery } from "@generated/graphql";
import withApollo from "@utils/withApollo";
import { useRouter } from "next/router";

const Explore = () => {
  const router = useRouter();

  const { data, loading, fetchMore, variables } = useGetQuizzesQuery({
    variables: {
      input: {
        limit: QUIZZES_LIMIT,
        cursor: null,
        ...router.query,
      },
    },
  });

  const quizzes = data?.getQuizzes.quizzes;
  const pageInfo = data?.getQuizzes.pageInfo;

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
                        input: {
                          ...variables?.input,
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

export default withApollo({ ssr: true })(Explore);
