import React, { useEffect } from "react";

import { QuizInput } from "@generated/graphql";
import { RadioGroup } from "@headlessui/react";
import { classNames } from "@utils/index";
import {
  Control,
  Controller,
  FieldArrayWithId,
  useFieldArray,
  UseFormRegister,
} from "react-hook-form";
import { v4 as uuid } from "uuid";

import ChoiceCard from "./ChoiceCard";

interface Props {
  question: FieldArrayWithId<QuizInput, "questions", "id">;
  questionIdx: number;
  register: UseFormRegister<QuizInput>;
  questionRemove: (index?: number | number[] | undefined) => void;
  control: Control<QuizInput>;
  deleteButtonDisabled?: boolean;
}

const QuestionCard: React.FC<Props> = ({
  question,
  questionIdx,
  register,
  questionRemove,
  control,
  deleteButtonDisabled,
}) => {
  const {
    fields: choiceFields,
    append: choiceAppend,
    remove: choiceRemove,
  } = useFieldArray({
    control,
    name: `questions.${questionIdx}.choices`,
  });

  const addChoice = (shouldFocus: boolean) => {
    choiceAppend(
      {
        id: uuid(),
        text: "",
      },
      { shouldFocus }
    );
  };

  useEffect(() => {
    if (choiceFields.length === 0) {
      addChoice(false);
    }
  }, []);

  return (
    <div
      key={question.id}
      className="overflow-hidden bg-white rounded-md shadow-md"
    >
      <div className="p-4">
        <input
          type="hidden"
          defaultValue={question.id}
          {...register(`questions.${questionIdx}.id`)}
        />
        <input
          type="text"
          className="block w-full"
          {...register(`questions.${questionIdx}.question`)}
          placeholder="Question"
        />
        <Controller
          control={control}
          name={`questions.${questionIdx}.answer`}
          rules={{ required: true }}
          render={({ field: { value, onChange } }) => (
            <RadioGroup value={value} onChange={onChange}>
              <ul className="grid grid-cols-1 gap-6 mt-2 lg:grid-cols-2">
                {choiceFields.map((choice, idx) => (
                  <ChoiceCard
                    choice={choice}
                    questionIdx={questionIdx}
                    choiceIdx={idx}
                    register={register}
                    deleteButtonDisabled={choiceFields.length < 2}
                    deleteChoice={() => {
                      if (value === choiceFields[idx].id) {
                        onChange(null);
                      }
                      choiceRemove(idx);
                    }}
                  />
                ))}
              </ul>
            </RadioGroup>
          )}
        />
      </div>

      <div className="flex items-center justify-end px-3 py-1 bg-gray-100 sm:px-6">
        <button
          type="button"
          onClick={() => addChoice(true)}
          className="flex items-center px-2 py-1 mr-2 rounded hover:bg-gray-200 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/200 focus:outline-none0/svg"
            className="w-5 h-5 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          <p>Add Choice</p>
        </button>

        <button
          disabled={deleteButtonDisabled}
          type="button"
          onClick={() => questionRemove(questionIdx)}
          className="p-2 rounded hover:bg-gray-200 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={` h-6 w-6 ${classNames(
              deleteButtonDisabled ? "opacity-30" : ""
            )}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default QuestionCard;
