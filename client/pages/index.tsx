import MainContainer from "@components/ui/MainContainer";
import { useIsAuthenticated } from "@utils/useIsAuthenticated";

import { QuizCard } from "../components/cards/QuizCard";
import Container from "../components/ui/Container";
import { useQuizzesQuery } from "../generated/graphql";
import withApollo from "../lib/withApollo";

const IndexPage = () => {
  useIsAuthenticated();

  const { data } = useQuizzesQuery({
    variables: {
      queryQuizzesInput: {
        limit: 10,
        cursor: null,
        query: null,
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
                {data?.quizzes.quizzes.map(
                  ({ title, description, quizPhoto, createdAt }) => (
                    <QuizCard
                      {...{ title, description, quizPhoto, createdAt }}
                    />
                  )
                )}
              </div>
            </div>
          </div>
        </main>
      </Container>
    </MainContainer>
  );
};

export default withApollo({ ssr: true })(IndexPage);
