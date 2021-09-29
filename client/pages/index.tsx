import React from "react";

import Layout from "@components/layout/Layout";
import NestedLayout from "@components/layout/NestedLayout";
import Quizzes from "@components/quizzes/Quizzes";
import { QUIZZES_LIMIT } from "@constant/index";
import { useGetQuizzesQuery } from "@generated/graphql";
import { useUser } from "@utils/useUser";
import withApollo from "@utils/withApollo";
import { useRouter } from "next/router";

const IndexPage = () => {
  const router = useRouter();
  const { user } = useUser({ redirectTo: "/explore" });

  const { data, loading, fetchMore, variables } = useGetQuizzesQuery({
    variables: {
      input: {
        limit: QUIZZES_LIMIT,
        cursor: null,
        ...router.query,
      },
    },
  });

  if (!user) {
    return (
      <Layout>
        <NestedLayout>
          <div className="px-4 mx-auto mt-3 max-w-7xl sm:px-6 md:px-8">
            <div className="max-w-3xl overflow-hidden bg-white shadow sm:rounded-md">
              <Quizzes type="timeline" loading={loading} />
            </div>
          </div>
        </NestedLayout>
      </Layout>
    );
  }

  const quizzes = data?.getQuizzes.quizzes || [];
  const pageInfo = data?.getQuizzes.pageInfo;

  return (
    <Layout title="Home">
      <NestedLayout>
        <div className="px-4 mx-auto mt-3 max-w-7xl sm:px-6 md:px-8">
          <div className="max-w-3xl overflow-hidden bg-white shadow sm:rounded-md">
            <Quizzes
              type="timeline"
              quizzes={quizzes}
              pageInfo={pageInfo}
              loading={loading}
              fetchMore={() =>
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

export default withApollo({ ssr: true })(IndexPage);
