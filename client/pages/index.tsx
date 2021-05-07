import React from "react";

import { QuizCard } from "@components/cards/QuizCard";
import Layout from "@components/Layout";
import { useQuizzesQuery } from "@generated/graphql";
import withApollo from "@lib/withApollo";
import { useIsAuthenticated } from "@utils/useIsAuthenticated";

const IndexPage = () => {
  useIsAuthenticated();

  const { data, loading } = useQuizzesQuery({
    variables: {
      queryQuizzesInput: {
        limit: 10,
        cursor: null,
        query: null,
      },
    },
  });

  return (
    <Layout title="Home | Next.js + TypeScript Example">
      {!data?.quizzes.quizzes && loading && (
        <div>
          <p>loading..</p>
        </div>
      )}
      {data?.quizzes.quizzes && !loading && (
        <div className="flex flex-col items-center w-full space-y-4">
          {data.quizzes.quizzes.map((quiz) => (
            <QuizCard key={quiz.createdAt} {...quiz} />
          ))}
        </div>
      )}
    </Layout>
  );
};

export default withApollo({ ssr: true })(IndexPage);
