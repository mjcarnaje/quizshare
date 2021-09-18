import React, { useEffect, useRef, useState } from "react";

import QuestionCard from "@components/take/QuestionCard";
import Container from "@components/ui/Container";
import MainContainer from "@components/ui/MainContainer";
import withApollo from "@utils/withApollo";
import { useRouter } from "next/router";

import { AVATAR_FALLBACK_IMG } from "../../constant/index";
import {
  useCheckAnswerMutation,
  useGetQuizQuery,
} from "../../generated/graphql";

const Wrapper: React.FC<{ title: string }> = ({ title, children }) => {
  return (
    <MainContainer title={`Take | ${title}`}>
      <Container showSearchBar={false}>
        <main className="relative flex-1 overflow-y-auto focus:outline-none">
          <div className="py-6">
            <div className="flex max-w-4xl px-4 mx-auto space-x-6 sm:px-6 md:px-8">
              <div className="flex-1 space-y-3">
                <div className="p-2 bg-white rounded-md shadow">{children}</div>
              </div>
            </div>
          </div>
        </main>
      </Container>
    </MainContainer>
  );
};

export type IUserAnswer = Record<string, string | null>;

interface Props {}

const TakeQuiz: React.FC<Props> = () => {
  const router = useRouter();
  const quizId = router.query.quizId as string;

  const [answers, setAnswers] = useState<IUserAnswer>({});
  const [OK, setOK] = useState(false);
  const questionRefs = useRef<Array<HTMLLIElement | null>>([]);

  const { data, loading, error } = useGetQuizQuery({
    variables: {
      quizId,
      isInput: false,
    },
  });
  const [checkAnswers] = useCheckAnswerMutation();

  const selectAnswer = (questionId: string, choiceId: string): void => {
    const copied = { ...answers };
    if (copied[questionId] === choiceId) {
      copied[questionId] = null;
    } else {
      copied[questionId] = choiceId;
    }

    if (Object.values(copied).every((ans) => ans)) {
      setOK(true);
    } else {
      setOK(false);
    }

    setAnswers(copied);
  };

  const scrollToNextQuestion = (questionIdx: number) => {
    if (questionRefs && questionRefs.current.length > questionIdx + 1) {
      questionRefs.current?.[questionIdx + 1]?.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const submitAnswers = async () => {
    if (!OK) {
      alert("Are you sure?");
    } else {
      await checkAnswers({
        variables: {
          checkAnswerInput: {
            quizId,
            answers,
          },
        },
      });
    }
  };

  useEffect(() => {
    const questions = data?.getQuiz.questions;

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
        {!loading && error && <p>Error</p>}
      </Wrapper>
    );
  }

  const { title, author, questions, questionCount } = data.getQuiz;

  const { avatar, firstName, lastName } = author!;

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
              questionCount={questionCount!}
              questionRefs={questionRefs}
              answers={answers}
              selectAnswer={selectAnswer}
              scrollToNextQuestion={scrollToNextQuestion}
            />
          ))}
        </ul>
        <div className="flex justify-center">
          <button
            type="button"
            onClick={submitAnswers}
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
