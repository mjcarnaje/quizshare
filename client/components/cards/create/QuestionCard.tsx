import React, { useEffect } from "react";

import { QuestionInput, QuizInput } from "@generated/graphql";
import { RadioGroup } from "@headlessui/react";
import { DocumentAddIcon, MenuIcon, TrashIcon } from "@heroicons/react/outline";
import { classNames } from "@utils/index";
import { Draggable } from "react-beautiful-dnd";
import {
  Control,
  Controller,
  DeepMap,
  FieldArrayMethodProps,
  FieldArrayWithId,
  FieldError,
  useFieldArray,
  UseFormRegister,
} from "react-hook-form";
import { v4 as uuid } from "uuid";

import TextareaAutoResize from "../../inputs/TextareaAutoResize";
import ChoiceCard from "./ChoiceCard";

interface Props {
  question: FieldArrayWithId<QuizInput, "questions", "id">;
  questionIdx: number;
  register: UseFormRegister<QuizInput>;
  questionRemove: (index?: number | number[] | undefined) => void;
  control: Control<QuizInput>;
  isDisabled?: boolean;
  errors?: DeepMap<QuestionInput, FieldError>;
}

const QuestionCard: React.FC<Props> = ({
  question,
  questionIdx,
  register,
  questionRemove,
  control,
  isDisabled,
  errors,
}) => {
  const {
    fields: choiceFields,
    append: choiceAppend,
    remove: choiceRemove,
  } = useFieldArray({
    control,
    name: `questions.${questionIdx}.choices`,
  });

  const addChoice = (options?: FieldArrayMethodProps) => {
    choiceAppend(
      {
        id: uuid(),
        text: "",
      },
      options
    );
  };

  useEffect(() => {
    if (choiceFields.length < 1) {
      addChoice({ shouldFocus: false });
      addChoice({ shouldFocus: false });
    }
  }, []);

  return (
    <Draggable key={question.id} draggableId={question.id} index={questionIdx}>
      {(provided, { isDragging }) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          className="relative flex space-x-1"
        >
          <div
            className={`${classNames(
              isDragging ? "shadow-2xl opacity-80" : "shadow"
            )} w-full bg-white rounded-md`}
          >
            <div className="p-4">
              <input
                type="hidden"
                defaultValue={question.id}
                {...register(`questions.${questionIdx}.id`)}
              />
              <TextareaAutoResize<QuizInput>
                name={`questions.${questionIdx}.question`}
                placeholder="Type your question"
                error={errors?.question}
                register={register}
                required
              />
              <Controller
                control={control}
                name={`questions.${questionIdx}.answer`}
                rules={{ required: true }}
                defaultValue={question.answer}
                render={({ field: { value, onChange } }) => (
                  <RadioGroup value={value} onChange={onChange}>
                    <ul className="grid grid-cols-1 gap-6 mt-2 lg:grid-cols-2">
                      {choiceFields.map((choice, choiceIdx) => (
                        <ChoiceCard
                          key={choice.id}
                          {...{ choice, questionIdx, choiceIdx, register }}
                          answer={value}
                          isDisabled={choiceFields.length < 2}
                          deleteChoice={() => {
                            if (value === choiceFields[choiceIdx].id) {
                              onChange(null);
                            }
                            choiceRemove(choiceIdx);
                          }}
                          errors={errors?.choices?.[choiceIdx]}
                        />
                      ))}
                    </ul>
                  </RadioGroup>
                )}
              />

              {errors?.answer?.type === "required" && (
                <div className="flex items-center justify-center py-2 mt-4 border border-red-500 rounded-md bg-red-50">
                  <p className="block">
                    Choosing the correct answer is required.
                  </p>
                </div>
              )}
            </div>
          </div>
          <div className="absolute flex flex-col space-y-1 left-full">
            <button
              type="button"
              className="flex items-center justify-center w-8 h-8 bg-white rounded-md shadow focus:outline-none"
              {...provided.dragHandleProps}
            >
              <MenuIcon className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => addChoice({ shouldFocus: true })}
              className="flex items-center justify-center w-8 h-8 bg-white rounded-md shadow focus:outline-none active:bg-gray-200"
            >
              <DocumentAddIcon className="w-5 h-5" />
            </button>
            <button
              disabled={isDisabled}
              type="button"
              onClick={() => questionRemove(questionIdx)}
              className="flex items-center justify-center w-8 h-8 bg-white rounded-md shadow focus:outline-none active:bg-gray-200"
            >
              <TrashIcon
                className={`${classNames(
                  isDisabled ? "opacity-30" : ""
                )} w-5 h-5`}
              />
            </button>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default QuestionCard;
