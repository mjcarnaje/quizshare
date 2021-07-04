import React from "react";

import ImageHolder from "@components/cards/ImageHolder";
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

  if (!data?.getQuiz) {
    return <p>Loading</p>;
  }

  const { title, description, quizPhoto } = data.getQuiz;

  return (
    <MainContainer title={title}>
      <Container>
        <main className="relative flex-1 overflow-y-auto focus:outline-none">
          <div className="py-6">
            <div className="flex max-w-4xl px-4 mx-auto space-x-6 sm:px-6 md:px-8">
              <div className="flex-1 p-2 bg-white rounded-md shadow-md">
                {quizPhoto && (
                  <ImageHolder loading={loading} image={quizPhoto} />
                )}
                <div>
                  <h3 className="text-4xl font-bold tracking-tight text-gray-900">
                    {title}
                  </h3>
                  <p>{description}</p>
                </div>
              </div>
              <div>hello</div>
            </div>
          </div>
        </main>
      </Container>
    </MainContainer>
  );
};

export default withApollo({ ssr: true })(SingleQuizPage);
