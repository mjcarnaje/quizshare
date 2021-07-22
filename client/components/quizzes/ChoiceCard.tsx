import React, { useEffect } from "react";

import { ChoiceInput, QuestionInput, QuizInput } from "@generated/graphql";
import { RadioGroup } from "@headlessui/react";
import {
  CheckCircleIcon as CheckCircleIconOutline,
  TrashIcon,
} from "@heroicons/react/outline";
import { PhotographIcon } from "@heroicons/react/outline";
import { CheckCircleIcon as CheckCircleIconSolid } from "@heroicons/react/solid";
import { classNames } from "@utils/index";
import {
  DeepMap,
  FieldArrayWithId,
  FieldError,
  useFormContext,
} from "react-hook-form";

import { useUploadPhoto } from "../../utils/useUploadImage";
import ImageHolder from "../ImageHolder";
import TextareaAutoResize from "../inputs/TextareaAutoResize";

interface Props {
  answer: string;
  choice: FieldArrayWithId<QuestionInput, "choices", "id">;
  questionIdx: number;
  choiceIdx: number;
  isDisabled?: boolean;
  deleteChoice: () => void;
  errors?: DeepMap<ChoiceInput, FieldError>;
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
      <div className="overflow-hidden bg-white divide-y divide-gray-100 rounded-md shadow">
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
            placeholder="Type your choice"
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
          <div className="flex space-x-2">
            <button
              type="button"
              onClick={uploadImage}
              className="p-1 rounded focus:outline-none hover:bg-gray-100 active:bg-gray-200"
            >
              <PhotographIcon className="w-5 h-5" />
            </button>
            <button
              type="button"
              disabled={isDisabled}
              onClick={deleteChoice}
              className="p-1 rounded focus:outline-none hover:bg-gray-100 active:bg-gray-200"
            >
              <TrashIcon
                className={` h-5 w-5 ${classNames(
                  isDisabled ? "opacity-30" : ""
                )}`}
              />
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default ChoiceCard;
