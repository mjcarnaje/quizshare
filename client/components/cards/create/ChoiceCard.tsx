import React from "react";

import { ChoiceInput, QuestionInput, QuizInput } from "@generated/graphql";
import { RadioGroup } from "@headlessui/react";
import {
  CheckCircleIcon as CheckCircleIconOutline,
  TrashIcon,
} from "@heroicons/react/outline";
import { CheckCircleIcon as CheckCircleIconSolid } from "@heroicons/react/solid";
import { classNames } from "@utils/index";
import {
  DeepMap,
  FieldArrayWithId,
  FieldError,
  UseFormRegister,
} from "react-hook-form";

import TextareaAutoResize from "../../inputs/TextareaAutoResize";

interface Props {
  answer: string;
  choice: FieldArrayWithId<QuestionInput, "choices", "id">;
  questionIdx: number;
  choiceIdx: number;
  register: UseFormRegister<QuizInput>;
  isDisabled?: boolean;
  deleteChoice: () => void;
  errors?: DeepMap<ChoiceInput, FieldError>;
}

const ChoiceCard: React.FC<Props> = ({
  answer,
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
        <input
          type="hidden"
          defaultValue={choice.id}
          {...register(`questions.${questionIdx}.choices.${choiceIdx}.id`)}
        />
        <div className="p-2">
          <TextareaAutoResize<QuizInput>
            name={`questions.${questionIdx}.choices.${choiceIdx}.text`}
            placeholder="Type your choice"
            error={errors?.text}
            register={register}
            required
          />
        </div>
        <div className="flex justify-between px-2 py-1 mt-2 text-right bg-gray-100">
          <RadioGroup.Option
            key={choice.id}
            value={choice.id}
            as="button"
            className="flex items-center justify-between focus:outline-none"
            type="button"
            defaultValue={answer}
          >
            {({ checked }) => (
              <>
                {checked ? (
                  <CheckCircleIconSolid className="w-5 h-5 text-green-600" />
                ) : (
                  <CheckCircleIconOutline className="w-5 h-5 text-gray-500" />
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
            <TrashIcon
              className={` h-5 w-5 ${classNames(
                isDisabled ? "opacity-30" : ""
              )}`}
            />
          </button>
        </div>
      </div>
    </li>
  );
};

export default ChoiceCard;
