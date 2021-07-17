import React, { useEffect } from "react";

import MainContainer from "@components/ui/MainContainer";
import withApollo from "@utils/withApollo";
import Image from "next/image";
import { useRouter } from "next/router";
import { useAppSelector } from "store";
import { selectQuery } from "store/query";

import { QuizCard } from "../../components/cards/QuizCard";
import Container from "../../components/ui/Container";
import { useGetMyQuizzesQuery } from "../../generated/graphql";
import { useIsAuth } from "../../utils/useIsAuth";

interface Props {}

const PublishedPage: React.FC<Props> = () => {
  useIsAuth();

  const router = useRouter();

  const query = useAppSelector(selectQuery);

  const { data } = useGetMyQuizzesQuery({
    variables: {
      quizzesInput: {
        limit: 10,
        cursor: null,
        query: query,
        isPublished: true,
      },
    },
  });

  useEffect(() => {
    if (query === "") {
      router.push("/me/published");
    } else {
      router.push({ pathname: "/me/published", query: { search: query } });
    }
  }, [query]);

  return (
    <MainContainer title="Home">
      <Container>
        <main className="relative flex-1 overflow-y-auto focus:outline-none">
          <div className="py-6">
            <div className="px-4 mx-auto mt-3 max-w-7xl sm:px-6 md:px-8">
              {data?.getMyQuizzes.quizzes.length === 0 && (
                <div className="flex flex-col items-center justify-center max-w-3xl text-center h-96">
                  <Image
                    src="/empty.svg"
                    layout="fixed"
                    width={500}
                    height={200}
                  />
                  <p className="mt-12">No data found.</p>
                </div>
              )}
              <div className="max-w-3xl overflow-hidden bg-white shadow sm:rounded-md">
                <ul className="mx-auto divide-y divide-gray-200 ">
                  {data?.getMyQuizzes.quizzes.map((quiz) => (
                    <QuizCard key={quiz.id} type="published" {...quiz} />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </main>
      </Container>
    </MainContainer>
  );
};

export default withApollo({ ssr: true })(PublishedPage);
