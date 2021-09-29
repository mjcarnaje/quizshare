import React, { useEffect } from "react";

import { ChoiceInput, QuestionInput, QuizInput } from "@generated/graphql";
import { RadioGroup } from "@headlessui/react";
import {
  CheckCircleIcon,
  PhotographIcon,
  TrashIcon,
} from "@heroicons/react/solid";
import { classNames } from "@utils/index";
import { useUploadPhoto } from "@utils/useUploadImage";
import { FieldArrayWithId, FieldErrors, useFormContext } from "react-hook-form";

import ImageHolder from "../ImageHolder";
import TextareaAutoResize from "../inputs/TextareaAutoResize";

interface Props {
  answer: string;
  choice: FieldArrayWithId<QuestionInput, "choices", "keyId">;
  questionIdx: number;
  choiceIdx: number;
  isDisabled?: boolean;
  deleteChoice: () => void;
  errors?: FieldErrors<ChoiceInput>;
}

const ChoiceCard: React.FC<Props> = ({
  answer,
  choice,
  questionIdx,
  choiceIdx,
  isDisabled,
  deleteChoice,
  errors,
}) => {
  const [uploadImage, { data: choicePhoto, loading: choicePhotoLoading }] =
    useUploadPhoto();

  const { register, setValue } = useFormContext<QuizInput>();

  useEffect(() => {
    if (choicePhoto) {
      setValue(
        `questions.${questionIdx}.choices.${choiceIdx}.choicePhoto`,
        choicePhoto
      );
    }
  }, [choicePhoto]);

  return (
    <li className="col-span-1 ">
      <div className="overflow-hidden bg-white rounded-md shadow-sm border">
        <input
          type="hidden"
          defaultValue={choice.id}
          {...register(`questions.${questionIdx}.choices.${choiceIdx}.id`)}
        />
        <div className="p-2">
          <input
            type="hidden"
            {...register(
              `questions.${questionIdx}.choices.${choiceIdx}.choicePhoto`
            )}
          />
          <ImageHolder
            image={choicePhoto || choice.choicePhoto}
            loading={choicePhotoLoading}
          />
          <TextareaAutoResize<QuizInput>
            name={`questions.${questionIdx}.choices.${choiceIdx}.text`}
            placeholder={`Answer option ${choiceIdx + 1}`}
            error={errors?.text}
            register={register}
            required
          />
        </div>
        <div className="flex justify-between px-2 py-1 mt-2 text-right bg-gray-50">
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
                <CheckCircleIcon
                  className={classNames(
                    checked ? "text-green-600" : "text-gray-400",
                    "w-5 h-5"
                  )}
                />
                <p
                  className={classNames(
                    checked ? "font-medium text-green-600" : "text-gray-400",
                    "ml-1 text-sm"
                  )}
                >
                  Correct Answer
                </p>
              </>
            )}
          </RadioGroup.Option>
          <div className="flex space-x-2">
            <button
              type="button"
              onClick={uploadImage}
              className="p-1 rounded focus:outline-none text-gray-400 hover:bg-gray-100 hover:text-gray-800 active:text-gray-900"
            >
              <PhotographIcon className="w-5 h-5" />
            </button>
            <button
              type="button"
              disabled={isDisabled}
              onClick={deleteChoice}
              className="p-1 rounded focus:outline-none text-gray-400 hover:bg-gray-100 hover:text-gray-800 active:text-gray-900"
            >
              <TrashIcon
                className={classNames(
                  isDisabled ? "opacity-30" : "",
                  "h-5 w-5"
                )}
              />
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default ChoiceCard;
