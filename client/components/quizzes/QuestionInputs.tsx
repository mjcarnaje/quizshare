import React, { useEffect } from "react";

import { QuizInput } from "@generated/graphql";
import { PlusCircleIcon } from "@heroicons/react/solid";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import {
  FieldArrayMethodProps,
  useFieldArray,
  useFormContext,
} from "react-hook-form";
import { v4 as uuid } from "uuid";

import QuestionCard from "./QuestionCard";

interface Props {}

const QuestionInputs: React.FC<Props> = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext<QuizInput>();

  const {
    fields: questions,
    append,
    remove,
    move,
  } = useFieldArray({
    control,
    name: "questions",
  });

  const addQuestion = (options?: FieldArrayMethodProps) => {
    append(
      {
        id: uuid(),
        question: "",
        choices: [],
        answer: undefined,
        explanation: "",
        hint: "",
      },
      options
    );
  };

  useEffect(() => {
    if (questions.length === 0) {
      addQuestion({ shouldFocus: false });
    }
  }, []);

  return (
    <>
      <DragDropContext
        onDragEnd={({ source, destination }) => {
          if (destination) {
            move(source.index, destination.index);
          }
        }}
      >
        <Droppable droppableId="drag-list" type="field">
          {(providedDroppable) => (
            <div
              role="list"
              ref={providedDroppable.innerRef}
              {...providedDroppable.droppableProps}
              className="my-4 space-y-4"
            >
              {questions.map((question, questionIdx) => {
                return (
                  <QuestionCard
                    key={question.id}
                    question={question}
                    questionIdx={questionIdx}
                    questions={questions}
                    questionRemove={() => {
                      remove(questionIdx);
                    }}
                    errors={errors.questions?.[questionIdx]}
                  />
                );
              })}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <button
        type="button"
        onClick={() => addQuestion({ shouldFocus: true })}
        className="fixed bottom-6 right-6 p-2 flex items-center justify-center rounded-xl bg-black hover:bg-[#1d1d1d] active:opacity-80 text-white focus:outline-none"
      >
        <PlusCircleIcon className="w-8 h-8" />
      </button>
    </>
  );
};

export default QuestionInputs;
