import React from "react";

import ImageHolder from "@components/ImageHolder";
import { IUserAnswer } from "@customtypes/index";
import { QuestionFragment } from "@generated/graphql";
import { CheckIcon, XIcon } from "@heroicons/react/solid";
import { classNames } from "@utils/index";

interface Props {
  question: QuestionFragment;
  questionIdx: number;
  questionCount: number;
  answers: IUserAnswer;
  questionRefs?: React.MutableRefObject<(HTMLLIElement | null)[]>;
  selectAnswer?: (questionId: string, choiceId: string) => void;
  scrollToNextQuestion?: (questionIdx: number) => void;
  showAnswers?: boolean;
  showCorrectAnswers?: boolean;
}

const QuestionCard: React.FC<Props> = ({
  question,
  questionIdx,
  questionCount,
  questionRefs,
  answers,
  selectAnswer,
  scrollToNextQuestion,
  showAnswers,
  showCorrectAnswers,
}) => {
  return (
    <li
      className="p-4 rounded"
      key={question.id}
      ref={(refEl) => {
        if (questionRefs) {
          return (questionRefs.current[questionIdx] = refEl);
        }
      }}
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
              {questionCount}
            </span>
          </div>
          <p className="text-xl font-medium ">{question.question}</p>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {question.choices.map((choice) => {
            const isSelected = answers[question.id] === choice.id;

            let isCorrect: boolean | null = null;
            let isWrong: boolean | null = null;
            let correctAnswer: boolean | null = null;

            if (showAnswers) {
              if (showCorrectAnswers) {
                correctAnswer = choice.id === question.answer;
              }
              if (
                answers[question.id] === question.answer &&
                answers[question.id] === choice.id
              ) {
                isCorrect = true;
              } else if (
                answers[question.id] !== question.answer &&
                answers[question.id] === choice.id
              ) {
                isWrong = true;
              }
            }

            return (
              <div key={choice.id}>
                <div
                  onClick={() => {
                    if (selectAnswer && scrollToNextQuestion) {
                      selectAnswer(question.id, choice.id);
                      scrollToNextQuestion(questionIdx);
                    }
                  }}
                  className={classNames(
                    !showAnswers && isSelected
                      ? "bg-gray-200 shadow ring-2 ring-gray-400"
                      : isCorrect || correctAnswer
                      ? "bg-[#68AF15] shadow ring-2 ring-[#68AF15] bg-opacity-20"
                      : isWrong
                      ? "bg-[#D30000] shadow ring-2 ring-[#D30000] bg-opacity-20"
                      : !showAnswers
                      ? "transform active:scale-[.98] cursor-pointer hover:bg-gray-100 transition"
                      : "",
                    "p-2 border text-center rounded"
                  )}
                >
                  {choice.choicePhoto && (
                    <div className="mb-4">
                      <ImageHolder image={choice.choicePhoto} />
                    </div>
                  )}
                  <div className="relative">
                    <div>
                      <p className="break-all">{choice.text}</p>
                    </div>
                    {(isCorrect || isWrong) && (
                      <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                        {isCorrect ? (
                          <CheckIcon className="w-5  h-5 text-[#68AF15]" />
                        ) : isWrong ? (
                          <XIcon className="w-5 h-5 text-[#D30000]" />
                        ) : null}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </li>
  );
};

export default QuestionCard;
