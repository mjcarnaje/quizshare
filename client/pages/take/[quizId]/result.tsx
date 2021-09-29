import React, { useEffect, useState } from "react";

import { useApolloClient } from "@apollo/client";
import CommentInput from "@components/comments/CommentInput";
import Comments from "@components/comments/Comments";
import ImageHolder from "@components/ImageHolder";
import Layout from "@components/layout/Layout";
import NestedLayout from "@components/layout/NestedLayout";
import QuestionCard from "@components/take/QuestionCard";
import { AVATAR_FALLBACK_IMG } from "@constant/index";
import {
  ScoreResult,
  ScoreResultFragmentDoc,
  useGetQuizTakeQuery,
} from "@generated/graphql";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/solid";
import { useAppSelector } from "@store/index";
import { selectUserAnswer } from "@store/userAnswer";
import { useGetQuery } from "@utils/useGetQuery";
import { useUser } from "@utils/useUser";
import withApollo from "@utils/withApollo";
import { useRouter } from "next/router";

const Result: React.FC = () => {
  const { user } = useUser();
  const router = useRouter();
  const quizId = useGetQuery("quizId");
  const client = useApolloClient();
  const { userAnswer } = useAppSelector(selectUserAnswer);

  const [showCorrectAnswers] = useState(false);
  const [showAnswers, setShowAnswers] = useState(false);

  const { data } = useGetQuizTakeQuery({
    variables: { quizId },
    fetchPolicy: "cache-only",
  });

  const scoreResult: ScoreResult | null = client.readFragment({
    id: `ScoreResult:${quizId}`,
    fragment: ScoreResultFragmentDoc,
  });

  useEffect(() => {
    if (!data || !scoreResult || !userAnswer) {
      router.push(`/take/${quizId}`);
    }
  }, [data, scoreResult, userAnswer]);

  if (!data || !scoreResult || !userAnswer) {
    return null;
  }

  if (!user) {
    return (
      <Layout>
        <NestedLayout>
          <p>Loading...</p>
        </NestedLayout>
      </Layout>
    );
  }

  const { title: quizTitle, authorId, author, questions } = data.getQuizTake;
  const { avatar, firstName, lastName } = author;
  const { score: _score, result } = scoreResult;
  const { score, totalItems, percentage } = _score;

  return (
    <Layout title={`Result | ${quizTitle}`}>
      <NestedLayout showSearchBar={false}>
        <div className="flex max-w-3xl px-4 mx-auto space-x-6 sm:px-6 md:px-8">
          <div className="flex-1">
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
                <h3 className="font-bold text-2xl">
                  {`${percentage.toFixed(2)}%`}
                </h3>
                <h2 className="font-medium text-lg">{`You answered ${score} out of ${totalItems} correctly.`}</h2>
                {!!result && (
                  <div className="my-3">
                    <h4 className="font-medium text-base">{result.title}</h4>
                    {!!result?.resultPhoto && (
                      <div className="my-2">
                        <ImageHolder image={result.resultPhoto} />
                      </div>
                    )}
                    <p className="text-base">{result.description}</p>
                  </div>
                )}
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
                  {questions.map((question, questionIdx) => (
                    <QuestionCard
                      key={question.id}
                      question={question}
                      questionIdx={questionIdx}
                      questionCount={totalItems}
                      answers={userAnswer}
                      showAnswers={showAnswers}
                      showCorrectAnswers={showCorrectAnswers}
                    />
                  ))}
                </ul>
              )}
            </div>
            <CommentInput
              quizId={quizId}
              userInfo={user}
              commentCount={data.getQuizTake.commentCount}
            />
            <Comments quizId={quizId} authorId={authorId} />
          </div>
        </div>
      </NestedLayout>
    </Layout>
  );
};

export default withApollo({ ssr: true })(Result);
