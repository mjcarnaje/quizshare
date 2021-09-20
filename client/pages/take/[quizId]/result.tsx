import React from "react";

import { useApolloClient } from "@apollo/client";
import ImageHolder from "@components/ImageHolder";
import Container from "@components/ui/Container";
import MainContainer from "@components/ui/MainContainer";
import { ScoreResult, ScoreResultFragmentDoc, useGetQuizQuery } from "@generated/graphql";
import { useAppSelector } from "@store/index";
import { selectUserAnswer } from "@store/userAnswer";
import withApollo from "@utils/withApollo";
import { AVATAR_FALLBACK_IMG } from "constant";
import { useRouter } from "next/router";

const Result: React.FC = () => {
  const router = useRouter();
  const client = useApolloClient();
  const { userAnswers } = useAppSelector(selectUserAnswer)

  const quizId = router.query.quizId as string;

  const { data } = useGetQuizQuery({
    variables: {
      quizId,
      isInput: false,
      isTake: true,
      isLanding: false,
    },
    fetchPolicy: "cache-only"
  });



  const scoreResult: ScoreResult | null = client.readFragment({
    id: `ScoreResult:${quizId}`,
    fragment: ScoreResultFragmentDoc,
  });

  if (!data || !scoreResult || !userAnswers) {
    return null
  }


  const { title: quizTitle, author } = data.getQuiz;
  const { avatar, firstName, lastName } = author!;
  const { score: _score, result } = scoreResult;
  const { score, totalItems, percentage } = _score
  const { title: resultTitle, description, resultPhoto } = result

  return (
    <MainContainer title={`Result | title`}>
      <Container showSearchBar={false}>
        <main className="relative flex-1 overflow-y-auto focus:outline-none">
          <div className="py-6">
            <div className="flex max-w-4xl px-4 mx-auto space-x-6 sm:px-6 md:px-8">
              <div className="flex-1 space-y-3">
                <div className="p-2 bg-white rounded-md shadow">
                  <div className="px-4 pt-4">
                    <h1 className="text-2xl font-semibold text-gray-800">{quizTitle}</h1>
                    <div className="flex items-center">
                      <img
                        className="w-6 h-6 rounded-full"
                        src={avatar || AVATAR_FALLBACK_IMG}
                        alt="author's avatar"
                      />
                      <p className="ml-2">{`${firstName} ${lastName}`}</p>
                    </div>
                  </div>
                  <div>
                    <h3>{`${percentage}%`}</h3>
                    <p>{`You answered ${score} out of ${totalItems} correctly.`}</p>
                    <div>
                      <h3>{resultTitle}</h3>
                      {!!resultPhoto &&
                        (
                          <div>
                            <ImageHolder image={resultPhoto} />
                          </div>
                        )
                      }
                      <p>{description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </Container>
    </MainContainer>
  );
};

export default withApollo({ ssr: true })(Result);
