import React from "react";

import MainContainer from "@components/ui/MainContainer";
import { useIsAuth } from "@utils/useIsAuth";
import { CloudinaryContext } from "cloudinary-react";
import { useRouter } from "next/router";

import { QuizCard } from "../components/cards/QuizCard";
import Container from "../components/ui/Container";
import { useGetPublishedQuizzesQuery } from "../generated/graphql";
import withApollo from "../utils/withApollo";

const Explore = () => {
  useIsAuth();

  const router = useRouter();

  const { data } = useGetPublishedQuizzesQuery({
    variables: {
      quizzesInput: {
        limit: 10,
        cursor: null,
        ...router.query,
      },
    },
  });

  return (
    <CloudinaryContext
      cloudName={process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}
    >
      <MainContainer title="Home">
        <Container>
          <main className="relative flex-1 overflow-y-auto">
            <div className="py-6">
              <div className="px-4 mx-auto mt-3 max-w-7xl sm:px-6 md:px-8">
                <div className="max-w-3xl overflow-hidden bg-white shadow sm:rounded-md">
                  <ul className="mx-auto divide-y divide-gray-200 ">
                    {data?.getPublishedQuizzes.quizzes.map((quiz) => (
                      <QuizCard key={quiz.id} type="timeline" {...quiz} />
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </main>
        </Container>
      </MainContainer>
    </CloudinaryContext>
  );
};

export default withApollo({ ssr: true })(Explore);
