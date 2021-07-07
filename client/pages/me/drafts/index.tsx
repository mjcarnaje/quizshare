import React, { useEffect } from "react";

import MainContainer from "@components/ui/MainContainer";
import withApollo from "@utils/withApollo";
import { useRouter } from "next/router";
import { useAppSelector } from "store";
import { selectQuery } from "store/query";

import { QuizCard } from "../../../components/cards/QuizCard";
import Container from "../../../components/ui/Container";
import { useGetMyQuizzesQuery } from "../../../generated/graphql";
import { useIsAuth } from "../../../utils/useIsAuth";

interface Props {}

const DraftsPage: React.FC<Props> = () => {
  useIsAuth();

  const router = useRouter();

  const query = useAppSelector(selectQuery);

  const { data } = useGetMyQuizzesQuery({
    variables: {
      quizzesInput: {
        limit: 10,
        cursor: null,
        query: router.query.search as string,
        isPublished: false,
      },
    },
  });

  useEffect(() => {
    if (query === "") {
      router.push("/me/drafts");
    } else {
      router.push({ pathname: "/me/drafts", query: { search: query } });
    }
  }, [query]);

  return (
    <MainContainer title="Home">
      <Container>
        <main className="relative flex-1 overflow-y-auto focus:outline-none">
          <div className="px-4 mx-auto mt-3 max-w-7xl sm:px-6 md:px-8">
            <div className="max-w-3xl px-4 py-8 mb-4 overflow-hidden text-center bg-white shadow sm:rounded-md">
              <h1 className="mb-1 text-3xl font-bold leading-snug tracking-tight text-gray-900 capitalize">
                Draft
              </h1>
              <p className="leading-snug tracking-tight text-gray-500">
                All your pending drafts are here
              </p>
            </div>
            <div className="max-w-3xl overflow-hidden bg-white shadow sm:rounded-md">
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
