import React, { useEffect, useState } from "react";

import { useApolloClient } from "@apollo/client";
import CommentInput from "@components/comments/CommentInput";
import Comments from "@components/comments/Comments";
import ImageHolder from "@components/ImageHolder";
import QuestionCard from "@components/take/QuestionCard";
import Container from "@components/ui/Container";
import MainContainer from "@components/ui/MainContainer";
import {
  ScoreResult,
  ScoreResultFragmentDoc,
  useGetQuizQuery,
} from "@generated/graphql";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/solid";
import { useAppSelector } from "@store/index";
import { selectUserAnswer } from "@store/userAnswer";
import { useGetQuery } from "@utils/useGetQuery";
import { useIsAuth } from "@utils/useIsAuth";
import withApollo from "@utils/withApollo";
import { AVATAR_FALLBACK_IMG } from "constant";
import { useRouter } from "next/router";

const Result: React.FC = () => {
  const me = useIsAuth();
  const router = useRouter();
  const quizId = useGetQuery("quizId");
  const client = useApolloClient();
  const { userAnswers } = useAppSelector(selectUserAnswer);

  const [showCorrectAnswers] = useState(false);
  const [showAnswers, setShowAnswers] = useState(false);

  const { data } = useGetQuizQuery({
    variables: {
      quizId,
      isInput: false,
      isTake: true,
      isLanding: false,
    },
    fetchPolicy: "cache-only",
  });

  const scoreResult: ScoreResult | null = client.readFragment({
    id: `ScoreResult:${quizId}`,
    fragment: ScoreResultFragmentDoc,
  });

  useEffect(() => {
    if (!data || !scoreResult || !userAnswers) {
      router.push(`/take/${quizId}`);
    }
  }, [data, scoreResult, userAnswers]);

  if (!data || !scoreResult || !userAnswers) {
    return null;
  }

  const { title: quizTitle, author, questions } = data.getQuiz;
  const { avatar, firstName, lastName } = author!;
  const { score: _score, result } = scoreResult;
  const { score, totalItems, percentage } = _score;
  const { title: resultTitle, description, resultPhoto } = result;

  return (
    <MainContainer title={`Result | ${quizTitle}`}>
      <Container showSearchBar={false}>
        <main className="relative flex-1 overflow-y-auto focus:outline-none">
          <div className="py-6">
            <div className="flex max-w-4xl px-4 mx-auto space-x-6 sm:px-6 md:px-8">
              <div className="flex-1 space-y-3">
                <div className="p-6 bg-white rounded-md shadow">
                  <div className="px-4 text-center">
                    <h1 className="text-2xl font-semibold text-gray-800">
                      {quizTitle}
                    </h1>
                    <div className="flex items-center justify-center mt4">
                      <img
                        className="w-6 h-6 rounded-full"
                        src={avatar || AVATAR_FALLBACK_IMG}
                        alt="author's avatar"
                      />
                      <p className="ml-2">{`${firstName} ${lastName}`}</p>
                    </div>
                  </div>
                  <div className="text-center my-8">
                    <h3 className="font-inter font-bold text-2xl">
                      {`${percentage.toFixed(2)}%`}
                    </h3>
                    <h2 className="font-medium text-lg">{`You answered ${score} out of ${totalItems} correctly.`}</h2>
                    <div className="my-3">
                      <h4 className="font-medium text-base">{resultTitle}</h4>
                      {!!resultPhoto && (
                        <div className="my-2">
                          <ImageHolder image={resultPhoto} />
                        </div>
                      )}
                      <p className="text-base">{description}</p>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <button
                      type="button"
                      className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      onClick={() => setShowAnswers(!showAnswers)}
                    >
                      Answers
                      {showAnswers ? (
                        <ChevronDownIcon className="w-5 h-5 ml-2" />
                      ) : (
                        <ChevronUpIcon className="w-5 h-5 ml-2" />
                      )}
                    </button>
                  </div>
                  {!!showAnswers && (
                    <ul className="py-8 space-y-10">
                      {questions!.map((question, questionIdx) => (
                        <QuestionCard
                          key={question.id}
                          question={question}
                          questionIdx={questionIdx}
                          questionCount={totalItems}
                          answers={userAnswers}
                          showAnswers={showAnswers}
                          showCorrectAnswers={showCorrectAnswers}
                        />
                      ))}
                    </ul>
                  )}
                </div>
                <CommentInput
                  quizId={quizId}
                  me={me}
                  commentCount={data.getQuiz.commentCount}
                />
                <Comments quizId={quizId} authorId={me.me?.id} />
              </div>
            </div>
          </div>
        </main>
      </Container>
    </MainContainer>
  );
};

export default withApollo({ ssr: true })(Result);
