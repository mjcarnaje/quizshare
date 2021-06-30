import React from "react";

import Container from "@components/ui/Container";
import MainContainer from "@components/ui/MainContainer";
import { useGetQuizQuery } from "@generated/graphql";
import withApollo from "@utils/withApollo";
import { useRouter } from "next/router";

interface Props {}

const EditQuiz: React.FC<Props> = () => {
  const router = useRouter();

  const { data, loading } = useGetQuizQuery({
    variables: {
      quizId: router.query.quizId as string,
      isInput: true,
    },
  });

  return (
    <MainContainer title={data?.getQuiz.title}>
      <Container>
        <div>
          {loading && !data && <p>Loading...</p>}
          {!loading && data && <p>{JSON.stringify(data, null, 2)}</p>}
        </div>
      </Container>
    </MainContainer>
  );
};

export default withApollo({ ssr: true })(EditQuiz);
