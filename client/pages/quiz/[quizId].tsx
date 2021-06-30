import React from "react";

import Container from "@components/ui/Container";
import MainContainer from "@components/ui/MainContainer";
import { useGetQuizQuery } from "@generated/graphql";
import withApollo from "@utils/withApollo";
import { useRouter } from "next/router";

interface Props {}

const SingleQuizPage: React.FC<Props> = () => {
  const router = useRouter();

  const { data, loading } = useGetQuizQuery({
    variables: {
      quizId: router.query.quizId as string,
      isInput: false,
    },
  });

  return (
    <MainContainer title={data?.getQuiz.title}>
      <Container>
        <div>
          {loading && !data && <p>Loading...</p>}
          {!loading && data && <pre>{JSON.stringify(data, null, 2)}</pre>}
        </div>
      </Container>
    </MainContainer>
  );
};

export default withApollo({ ssr: true })(SingleQuizPage);
