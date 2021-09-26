import React from "react";

import Quizzes from "@components/quizzes/Quizzes";
import Layout from "@components/ui/Layout";
import NestedLayout from "@components/ui/NestedLayout";
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
      <Layout>
        <NestedLayout>
          <p>Loading...</p>
        </NestedLayout>
      </Layout>
    );
  }

  const quizzes = data?.getMeQuizzes.quizzes;
  const pageInfo = data?.getMeQuizzes.pageInfo;

  return (
    <Layout title="Home">
      <NestedLayout>
        <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
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
      </NestedLayout>
    </Layout>
  );
};

export default withApollo({ ssr: true })(PublishedPage);
