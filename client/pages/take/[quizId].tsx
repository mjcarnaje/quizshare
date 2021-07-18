import React, { useRef, useState } from "react";

import ImageHolder from "@components/ImageHolder";
import Container from "@components/ui/Container";
import MainContainer from "@components/ui/MainContainer";
import withApollo from "@utils/withApollo";
import { isEqual } from "lodash";
import { useRouter } from "next/router";

import { AVATAR_FALLBACK_IMG } from "../../constant/index";
import { useGetQuizQuery } from "../../generated/graphql";
import { classNames } from "../../utils/index";

const Wrapper: React.FC<{ title?: string }> = ({ title, children }) => {
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

type IUserAnswer = {
  questionId: string;
  choiceId: string;
};

interface Props {}

const TakeQuiz: React.FC<Props> = () => {
  const router = useRouter();
  const quizId = router.query.quizId as string;

  const [userAnswers, setUserAnswers] = useState<IUserAnswer[]>([]);
  const questionRefs = useRef<Array<HTMLLIElement | null>>([]);

  const { data, loading, error } = useGetQuizQuery({
    variables: {
      quizId,
      isInput: false,
    },
  });

  const selectAnswer = (
    ids: IUserAnswer,
    isSelected: boolean,
    questionIdx: number
  ): void => {
    const existedIdx = userAnswers.findIndex(
      (answer) => answer.questionId === ids.questionId
    );

    if (existedIdx !== -1) {
      let copied = [...userAnswers];
      if (isSelected) {
        copied = copied.filter((copy) => !isEqual(copy, ids));
      } else {
        copied[existedIdx] = ids;
      }
      setUserAnswers(copied);
    } else {
      setUserAnswers((answer) => [...answer, ids]);
    }

    // SMOOTH SCROLL TO NEXT QUESTION
    if (questionRefs && questionRefs.current.length > questionIdx + 1) {
      questionRefs.current?.[questionIdx + 1]?.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  if (!data?.getQuiz) {
    return (
      <Wrapper>
        {loading && !error && <p>Loading...</p>}
        {!loading && error && <p>Error</p>}
      </Wrapper>
    );
  }

  const { title, author, questions } = data.getQuiz;

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
        <ul className="py-8 space-y-6">
          {questions.map((question, questionIdx) => (
            <li
              className="p-4 border rounded"
              key={question.id}
              ref={(refEl) => (questionRefs.current[questionIdx] = refEl)}
            >
              {question.questionPhoto && (
                <div className="w-2/3 mx-auto mb-6">
                  <ImageHolder image={question.questionPhoto} />
                </div>
              )}
              <div>
                <p className="mb-4 text-xl font-medium">{question.question}</p>
                <div className="grid grid-cols-2 gap-2">
                  {question.choices.map((choice) => {
                    const ids = {
                      questionId: question.id,
                      choiceId: choice.id,
                    };

                    const isSelected = userAnswers.some((answer) =>
                      isEqual(answer, ids)
                    );

                    return (
                      <div key={choice.id}>
                        <div
                          onClick={() =>
                            selectAnswer(ids, isSelected, questionIdx)
                          }
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
    </Wrapper>
  );
};

export default withApollo({ ssr: true })(TakeQuiz);
