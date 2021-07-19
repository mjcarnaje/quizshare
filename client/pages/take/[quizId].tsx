import React, { useEffect, useRef, useState } from "react";

import ImageHolder from "@components/ImageHolder";
import Container from "@components/ui/Container";
import MainContainer from "@components/ui/MainContainer";
import withApollo from "@utils/withApollo";
import { useRouter } from "next/router";

import { AVATAR_FALLBACK_IMG } from "../../constant/index";
import { useGetQuizQuery } from "../../generated/graphql";
import { classNames } from "../../utils/index";

const TakeQuizWrapper: React.FC<{ title?: string }> = ({ title, children }) => {
  return (
    <MainContainer title={title ? `Take | ${title}` : "Loading.."}>
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

type IUserAnswer = Record<string, string | null>;

interface Props {}

const TakeQuiz: React.FC<Props> = () => {
  const router = useRouter();
  const quizId = router.query.quizId as string;

  const [answers, setAnswers] = useState<IUserAnswer>({});
  const questionRefs = useRef<Array<HTMLLIElement | null>>([]);

  const { data, loading, error } = useGetQuizQuery({
    variables: {
      quizId,
      isInput: false,
    },
  });

  const selectAnswer = (questionId: string, choiceId: string): void => {
    const copied = { ...answers };
    if (copied[questionId] === choiceId) {
      copied[questionId] = null;
    } else {
      copied[questionId] = choiceId;
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

  if (!data?.getQuiz) {
    return (
      <TakeQuizWrapper>
        {loading && !error && <p>Loading...</p>}
        {!loading && error && <p>Error</p>}
      </TakeQuizWrapper>
    );
  }

  const { title, author, questions } = data.getQuiz;

  const { avatar, firstName, lastName } = author!;

  return (
    <TakeQuizWrapper title={title}>
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
            <li
              className="p-4 rounded"
              key={question.id}
              ref={(refEl) => (questionRefs.current[questionIdx] = refEl)}
            >
              {question.questionPhoto && (
                <div className="w-2/3 mx-auto mb-6">
                  <ImageHolder image={question.questionPhoto} />
                </div>
              )}
              <div>
                <div className="flex items-center px-4 py-2 mb-4 border rounded">
                  <div className="flex flex-col mr-4">
                    <span className="text-sm font-semibold leading-tight text-gray-900">
                      {questionIdx + 1}
                    </span>
                    <span className="text-sm leading-tight text-gray-800">
                      {questions.length}
                    </span>
                  </div>
                  <p className="text-xl font-medium ">{question.question}</p>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {question.choices.map((choice) => {
                    const isSelected = answers[question.id] === choice.id;

                    return (
                      <div key={choice.id}>
                        <div
                          onClick={() => {
                            selectAnswer(question.id, choice.id);
                            scrollToNextQuestion(questionIdx);
                          }}
                          className={classNames(
                            isSelected
                              ? "bg-gray-200 shadow ring-2 ring-gray-400"
                              : "",
                            "p-2 border text-center rounded cursor-pointer hover:bg-gray-100 transition duration-100 ease-out"
                          )}
                        >
                          {choice.choicePhoto && (
                            <div className="mb-4">
                              <ImageHolder image={choice.choicePhoto} />
                            </div>
                          )}
                          <div>
                            <p className="break-all">{choice.text}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </TakeQuizWrapper>
  );
};

export default withApollo({ ssr: true })(TakeQuiz);
