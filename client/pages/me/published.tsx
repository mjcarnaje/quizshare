import React from "react";

import Quizzes from "@components/quizzes/Quizzes";
import Container from "@components/ui/Container";
import MainContainer from "@components/ui/MainContainer";
import { QUIZZES_LIMIT } from "@constant/index";
import { useGetMeQuizzesQuery } from "@generated/graphql";
import { useUser } from "@utils/useUser";
import withApollo from "@utils/withApollo";
import { useRouter } from "next/router";

interface Props {}

const PublishedPage: React.FC<Props> = () => {
  const { user } = useUser();

  const router = useRouter();

  const { data, loading, fetchMore, variables } = useGetMeQuizzesQuery({
    variables: {
      input: {
        limit: QUIZZES_LIMIT,
        ...router.query,
      },
    },
  });

  if (!user) {
    return (
      <MainContainer>
        <Container>
          <p>Loading...</p>
        </Container>
      </MainContainer>
    );
  }

  const quizzes = data?.getMeQuizzes.quizzes;
  const pageInfo = data?.getMeQuizzes.pageInfo;

  return (
    <MainContainer title="Home">
      <Container>
        <main className="relative flex-1 overflow-y-auto focus:outline-none">
          <div className="py-6">
            <div className="px-4 mx-auto mt-3 max-w-7xl sm:px-6 md:px-8">
              <div className="max-w-3xl overflow-hidden bg-white shadow sm:rounded-md">
                <Quizzes
                  type="me"
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

export default withApollo({ ssr: true })(PublishedPage);
