import React from "react";

import MainContainer from "@components/ui/MainContainer";
import { Menu } from "@headlessui/react";
import withApollo from "@utils/withApollo";
import Image from "next/image";
import { useRouter } from "next/router";

import { QuizCard } from "../../components/cards/QuizCard";
import MenuDropdown from "../../components/dropdowns/MenuDropdown";
import Container from "../../components/ui/Container";
import { useGetMyQuizzesQuery } from "../../generated/graphql";
import { useIsAuth } from "../../utils/useIsAuth";

interface Props {}

const PublishedPage: React.FC<Props> = () => {
  useIsAuth();

  const router = useRouter();

  const { data } = useGetMyQuizzesQuery({
    variables: {
      quizzesInput: {
        limit: 10,
        cursor: null,
        isPublished: true,
        ...router.query,
      },
    },
  });

  return (
    <MainContainer title="Home">
      <Container>
        <main className="relative flex-1 overflow-y-auto focus:outline-none">
          <div className="py-6">
            <div className="px-4 mx-auto mt-3 max-w-7xl sm:px-6 md:px-8">
              <div className="flex justify-end max-w-3xl mb-8 sm:rounded-md">
                <MenuDropdown
                  anchor={
                    <Menu.Button className="flex items-center px-4 py-1 text-white transition transform bg-gray-400 rounded active:scale-90 focus:outline-none hover:text-gray-200">
                      <p>Sort</p>
                    </Menu.Button>
                  }
                  type="array"
                  options={[
                    {
                      text: "Alphabetically",
                      onClick: () => {},
                    },
                    {
                      text: "Date",
                      onClick: () => {},
                    },
                    {
                      text: "Views",
                      onClick: () => {},
                    },
                    {
                      text: "Likes",
                      onClick: () => {},
                    },
                  ]}
                />
              </div>

              {data?.getMyQuizzes.quizzes.length === 0 && (
                <div className="flex flex-col items-center justify-center h-64 max-w-3xl p-10 text-center md:h-80 lg:h-96">
                  <div className="relative w-full h-full">
                    <Image src="/empty.svg" layout="fill" />
                  </div>
                  <p className="mt-4 lg:mt-12">No data found.</p>
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
