import React from "react";

import MainContainer from "@components/ui/MainContainer";
import { useIsAuthenticated } from "@utils/useIsAuthenticated";
import { selectQuery } from "store/globalState";

import { QuizCard } from "../components/cards/QuizCard";
import Container from "../components/ui/Container";
import { useQuizzesQuery } from "../generated/graphql";
import withApollo from "../lib/withApollo";
import { useAppSelector } from "../store/index";

const IndexPage = () => {
  const query = useAppSelector(selectQuery);
  useIsAuthenticated();

  const { data } = useQuizzesQuery({
    variables: {
      queryQuizzesInput: {
        limit: 10,
        cursor: null,
        query: query,
      },
    },
  });

  return (
    <MainContainer title="Home">
      <Container>
        <main className="relative flex-1 overflow-y-auto focus:outline-none">
          <div className="py-6">
            <div className="px-4 mx-auto mt-3 max-w-7xl sm:px-6 md:px-8">
              <div className="max-w-2xl mx-auto space-y-4">
                {data?.quizzes.quizzes.map(({ id, ...props }) => (
                  <QuizCard key={id} {...props} />
                ))}
              </div>
            </div>
          </div>
        </main>
      </Container>
    </MainContainer>
  );
};

export default withApollo({ ssr: true })(IndexPage);
