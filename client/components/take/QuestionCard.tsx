import React from "react";

import ImageHolder from "@components/ImageHolder";
import { QuestionFragment } from "@generated/graphql";

import { IUserAnswer } from "../../pages/take/[quizId]";
import { classNames } from "../../utils/index";

interface Props {
  question: QuestionFragment;
  questionIdx: number;
  questionCount: number;
  questionRefs: React.MutableRefObject<(HTMLLIElement | null)[]>;
  selectAnswer: (questionId: string, choiceId: string) => void;
  scrollToNextQuestion: (questionIdx: number) => void;
  answers: IUserAnswer;
}

const QuestionCard: React.FC<Props> = ({
  question,
  questionIdx,
  questionCount,
  questionRefs,
  answers,
  selectAnswer,
  scrollToNextQuestion,
}) => {
  return (
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
              {questionCount}
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
                    isSelected ? "bg-gray-200 shadow ring-2 ring-gray-400" : "",
                    "p-2 transform active:scale-[.98] border text-center rounded cursor-pointer hover:bg-gray-100 transition"
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
  );
};

export default QuestionCard;
