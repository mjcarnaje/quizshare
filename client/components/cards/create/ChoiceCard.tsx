import React from "react";

import { ChoiceInput, QuestionInput, QuizInput } from "@generated/graphql";
import { RadioGroup } from "@headlessui/react";
import { classNames } from "@utils/index";
import {
  DeepMap,
  FieldArrayWithId,
  FieldError,
  UseFormRegister,
} from "react-hook-form";

import FormInput from "../../inputs/FormInput";

interface Props {
  choice: FieldArrayWithId<QuestionInput, "choices", "id">;
  questionIdx: number;
  choiceIdx: number;
  register: UseFormRegister<QuizInput>;
  isDisabled?: boolean;
  deleteChoice: () => void;
  errors?: DeepMap<ChoiceInput, FieldError>;
}

const ChoiceCard: React.FC<Props> = ({
  choice,
  questionIdx,
  choiceIdx,
  register,
  isDisabled,
  deleteChoice,
  errors,
}) => {
  return (
    <li className="col-span-1 overflow-hidden bg-white divide-y divide-gray-200 rounded-md shadow">
      <div className="bg-white">
        <div className="p-2">
          <FormInput
            version="auto-resize"
            placeholder="Type choice"
            error={errors?.text}
            {...register(`questions.${questionIdx}.choices.${choiceIdx}.text`, {
              required: true,
            })}
          />
        </div>
        <div className="flex justify-between px-2 py-1 mt-2 text-right bg-gray-100">
          <RadioGroup.Option
            key={choice.id}
            value={choice.id}
            as="button"
            className="flex items-center justify-between focus:outline-none"
            type="button"
          >
            {({ checked }) => (
              <>
                {checked ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-green-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                )}
                <p
                  className={classNames(
                    checked
                      ? "font-semibold ml-1 text-green-600"
                      : "ml-1 text-gray-500"
                  )}
                >
                  Correct Answer
                </p>
              </>
            )}
          </RadioGroup.Option>

          <button
            type="button"
            disabled={isDisabled}
            onClick={deleteChoice}
            className="p-1 rounded hover:bg-gray-200 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={` h-5 w-5 ${classNames(
                isDisabled ? "opacity-30" : ""
              )}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </li>
  );
};

export default ChoiceCard;
