import React, { useEffect, useRef, useState } from "react";

import Layout from "@components/layout/Layout";
import NestedLayout from "@components/layout/NestedLayout";
import QuestionCard from "@components/take/QuestionCard";
import { AVATAR_FALLBACK_IMG } from "@constant/index";
import { IUserAnswer } from "@customtypes/index";
import {
  useSubmitAnswersMutation,
  useGetQuizTakeQuery,
} from "@generated/graphql";
import { useAppDispatch } from "@store/index";
import { setUserAnswer } from "@store/userAnswer";
import { useGetQuery } from "@utils/useGetQuery";
import withApollo from "@utils/withApollo";
import { useRouter } from "next/router";

const Wrapper: React.FC<{ title: string }> = ({ title, children }) => {
  return (
    <Layout title={`Take | ${title}`}>
      <NestedLayout showSearchBar={false}>
        <div className="flex max-w-3xl px-4 mx-auto space-x-6 sm:px-6 md:px-8">
          <div className="flex-1 space-y-3">
            <div className="p-2 bg-white rounded-md shadow">{children}</div>
          </div>
        </div>
      </NestedLayout>
    </Layout>
  );
};

const TakeQuiz: React.FC = () => {
  const router = useRouter();
  const quizId = useGetQuery("quizId");
  const dispatch = useAppDispatch();

  const [answers, setAnswers] = useState<IUserAnswer>({});
  const [OK, setOK] = useState(false);
  const questionRefs = useRef<Array<HTMLLIElement | null>>([]);

  const { data, loading, error } = useGetQuizTakeQuery({
    variables: { quizId },
  });
  const [submitAnswers] = useSubmitAnswersMutation();

  const selectAnswer = (questionId: string, choiceId: string): void => {
    const _answers = { ...answers };
    if (_answers[questionId] === choiceId) {
      _answers[questionId] = null;
    } else {
      _answers[questionId] = choiceId;
    }

    if (Object.values(_answers).every((ans) => ans)) {
      setOK(true);
    } else {
      setOK(false);
    }

    setAnswers(_answers);
  };

  const scrollToNextQuestion = (questionIdx: number) => {
    const idx = questionIdx + 1;

    if (questionRefs && questionRefs.current.length > idx) {
      questionRefs.current?.[idx]?.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const _submitAnswers = async () => {
    if (!OK) {
      alert("Are you sure?");
    } else {
      try {
        await submitAnswers({
          variables: {
            input: { quizId, answers },
          },
        });
        dispatch(setUserAnswer(answers));
        router.replace(`/take/${quizId}/result`);
      } catch (err) {
        console.error(err);
      }
    }
  };

  useEffect(() => {
    const questions = data?.getQuizTake.questions;

    if (questions) {
      const initialize = questions.reduce((answers: IUserAnswer, question) => {
        const questionId = question.id;
        answers[questionId] = null;
        return answers;
      }, {});

      setAnswers(initialize);
    }
  }, [data]);

  if (!data) {
    return (
      <Wrapper title={loading ? "Loading.." : "Error"}>
        {loading && !error && <p>Loading...</p>}
        {!loading && error && <p>{error.message}</p>}
      </Wrapper>
    );
  }

  const { title, author, questions, questionCount } = data.getQuizTake;

  const { avatar, firstName, lastName } = author;

  return (
    <Wrapper title={title}>
      <div className="px-4 pt-4">
        <h1 className="text-2xl font-semibold text-gray-800">{title}</h1>
        <div className="flex items-center">
          <img
            className="w-6 h-6 rounded-full"
            src={avatar || AVATAR_FALLBACK_IMG}
            alt="author's avatar"
          />
          <p className="ml-2">{`${firstName} ${lastName}`}</p>
        </div>
      </div>
      <div className="px-4 pb-4">
        <ul className="py-8 space-y-10">
          {questions.map((question, questionIdx) => (
            <QuestionCard
              key={question.id}
              question={question}
              questionIdx={questionIdx}
              questionCount={questionCount}
              answers={answers}
              questionRefs={questionRefs}
              selectAnswer={selectAnswer}
              scrollToNextQuestion={scrollToNextQuestion}
            />
          ))}
        </ul>
        <div className="flex justify-center">
          <button
            type="button"
            onClick={_submitAnswers}
            className="inline-flex justify-center w-1/3 px-4 py-2 text-base font-medium text-white transition transform bg-indigo-600 border border-transparent rounded-md shadow-sm active:scale-95 hover:bg-indigo-700 focus:outline-none sm:col-start-2 sm:text-sm"
          >
            Submit
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

export default withApollo({ ssr: true })(TakeQuiz);
