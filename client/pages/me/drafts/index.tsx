import React from "react";

import MainContainer from "@components/ui/MainContainer";
import withApollo from "@utils/withApollo";
import Image from "next/image";
import { useRouter } from "next/router";

import { QuizCard } from "../../../components/cards/QuizCard";
import Container from "../../../components/ui/Container";
import { useGetMyQuizzesQuery } from "../../../generated/graphql";
import { useIsAuth } from "../../../utils/useIsAuth";

interface Props {}

const DraftsPage: React.FC<Props> = () => {
  useIsAuth();

  const router = useRouter();

  const { data } = useGetMyQuizzesQuery({
    variables: {
      quizzesInput: {
        limit: 10,
        cursor: null,
        isPublished: false,
        ...router.query,
      },
    },
  });

  return (
    <MainContainer title="Home">
      <Container>
        <main className="relative flex-1 overflow-y-auto focus:outline-none">
          <div className="px-4 mx-auto mt-3 max-w-7xl sm:px-6 md:px-8">
            <div className="max-w-3xl px-4 py-8 mb-4 overflow-hidden text-center bg-white shadow sm:rounded-md">
              <h1 className="mb-1 text-3xl leading-snug tracking-tight text-gray-900 capitalize fon t-bold">
                Draft
              </h1>
              <p className="leading-snug tracking-tight text-gray-500">
                All your pending drafts are here
              </p>
            </div>
            {data?.getMyQuizzes.quizzes.length === 0 && (
              <div className="flex flex-col items-center justify-center h-64 max-w-3xl p-10 text-center md:h-80 lg:h-96">
                <div className="relative w-full h-full">
                  <Image src="/empty.svg" layout="fill" />
                </div>
                <p className="mt-4 lg:mt-12">No data found.</p>
              </div>
            )}
            <div className="relative max-w-3xl overflow-hidden bg-white shadow sm:rounded-md">
              <ul className="mx-auto divide-y divide-gray-200 ">
                {data?.getMyQuizzes.quizzes.map((quiz) => (
                  <QuizCard key={quiz.id} type="draft" {...quiz} />
                ))}
              </ul>
            </div>
          </div>
        </main>
      </Container>
    </MainContainer>
  );
};

export default withApollo({ ssr: true })(DraftsPage);
