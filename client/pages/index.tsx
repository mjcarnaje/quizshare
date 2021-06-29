import React, { useEffect } from "react";

import MainContainer from "@components/ui/MainContainer";
import { useIsAuth } from "@utils/useIsAuth";
import { CloudinaryContext } from "cloudinary-react";
import { useRouter } from "next/router";
import { selectQuery } from "store/globalState";

import { QuizCard } from "../components/cards/QuizCard";
import Container from "../components/ui/Container";
import { useQuizzesQuery } from "../generated/graphql";
import { useAppSelector } from "../store/index";
import withApollo from "../utils/withApollo";

const IndexPage = () => {
  useIsAuth();

  const query = useAppSelector(selectQuery);

  const router = useRouter();

  const { data } = useQuizzesQuery({
    variables: {
      quizzesInput: {
        limit: 10,
        cursor: null,
        query: router.query.search as string,
      },
    },
  });

  useEffect(() => {
    if (query === "") {
      router.push("/");
    } else {
      router.push({ pathname: "/", query: { search: query } });
    }
  }, [query]);

  return (
    <CloudinaryContext cloudName={process.env.CLOUDINARY_CLOUD_NAME}>
      <MainContainer title="Home">
        <Container>
          <main className="relative flex-1 overflow-y-auto focus:outline-none">
            <div className="py-6">
              <div className="px-4 mx-auto mt-3 max-w-7xl sm:px-6 md:px-8">
                <div className="max-w-3xl overflow-hidden bg-white shadow sm:rounded-md">
                  <ul className="mx-auto divide-y divide-gray-200 ">
                    {data?.quizzes.quizzes.map((quiz) => (
                      <QuizCard key={quiz.id} {...quiz} />
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

export default withApollo({ ssr: true })(IndexPage);
