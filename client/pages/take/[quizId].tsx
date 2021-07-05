import React from "react";

import Container from "@components/ui/Container";
import MainContainer from "@components/ui/MainContainer";
import withApollo from "@utils/withApollo";
import { useRouter } from "next/router";

import { useGetQuizQuery } from "../../generated/graphql";

interface Props {}

const TakeQuiz: React.FC<Props> = () => {
  const router = useRouter();
  const quizId = router.query.quizId as string;

  const { data, loading } = useGetQuizQuery({
    variables: {
      quizId,
      isInput: false,
    },
  });

  if (!data?.getQuiz) {
    if (loading) {
      return <p>Loading</p>;
    }
    return <p>There is an error</p>;
  }

  const { title } = data.getQuiz;

  return (
    <MainContainer title={`Take | ${title}`}>
      <Container showSearchBar={false}>
        <main className="relative flex-1 overflow-y-auto focus:outline-none">
          <div className="py-6">
            <div className="flex max-w-4xl px-4 mx-auto space-x-6 sm:px-6 md:px-8"></div>
          </div>
        </main>
      </Container>
    </MainContainer>
  );
};

export default withApollo({ ssr: true })(TakeQuiz);
