import React, { useEffect } from "react";

import { QuestionInput, QuizInput } from "@generated/graphql";
import { RadioGroup } from "@headlessui/react";
import {
  DocumentAddIcon,
  MenuIcon,
  PhotographIcon,
  TrashIcon,
} from "@heroicons/react/outline";
import { classNames } from "@utils/index";
import { useUploadPhoto } from "@utils/useUploadImage";
import { Draggable } from "react-beautiful-dnd";
import {
  Controller,
  FieldArrayMethodProps,
  FieldArrayWithId,
  useFieldArray,
  useFormContext,
  FieldErrors,
} from "react-hook-form";
import { v4 as uuid } from "uuid";

import ImageHolder from "../ImageHolder";
import TextareaAutoResize from "../inputs/TextareaAutoResize";
import ChoiceCard from "./ChoiceCard";
interface Props {
  question: FieldArrayWithId<QuizInput, "questions", "keyId">;
  questionIdx: number;
  questionRemove: () => void;
  questions: FieldArrayWithId<QuizInput, "questions", "keyId">[];
  errors?: FieldErrors<QuestionInput>;
}

const QuestionCard: React.FC<Props> = ({
  question,
  questionIdx,
  questionRemove,
  errors,
  questions,
}) => {
  const [uploadImage, { data: questionPhoto, loading: questionPhotoLoading }] =
    useUploadPhoto();

  const { register, control, setValue } = useFormContext<QuizInput>();
  const {
    fields: choiceFields,
    append: choiceAppend,
    remove: choiceRemove,
  } = useFieldArray({
    control,
    name: `questions.${questionIdx}.choices`,
    keyName: "keyId",
  });

  const addChoice = (options?: FieldArrayMethodProps) => {
    choiceAppend(
      {
        id: uuid(),
        text: "",
        choicePhoto: null,
      },
      options
    );
  };

  useEffect(() => {
    if (choiceFields.length === 0) {
      addChoice({ shouldFocus: false });
    }
  }, [choiceFields]);

  useEffect(() => {
    if (questionPhoto) {
      setValue(`questions.${questionIdx}.questionPhoto`, questionPhoto);
    }
  }, [questionPhoto]);

  return (
    <Draggable draggableId={question.id} index={questionIdx}>
      {(provided, { isDragging }) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          className="relative flex space-x-1"
        >
          <div
            className={classNames(
              isDragging ? "shadow-2xl opacity-80" : "shadow",
              "w-full bg-white rounded-md"
            )}
          >
            <div className="p-4">
              <input
                type="hidden"
                defaultValue={question.id}
                {...register(`questions.${questionIdx}.id`)}
              />
              <input
                type="hidden"
                {...register(`questions.${questionIdx}.questionPhoto`)}
              />
              <div className="w-full mx-auto md:w-2/3">
                <ImageHolder
                  image={questionPhoto || question.questionPhoto}
                  loading={questionPhotoLoading}
                />
              </div>
              <TextareaAutoResize<QuizInput>
                name={`questions.${questionIdx}.question`}
                placeholder="Write your question here"
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
                    <ul className="grid grid-cols-1 gap-4 px-4 mt-4 md:px-0 lg:grid-cols-2">
                      {choiceFields.map((choice, choiceIdx) => (
                        <ChoiceCard
                          key={choice.keyId}
                          choice={choice}
                          questionIdx={questionIdx}
                          choiceIdx={choiceIdx}
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
          <div className="flex flex-col space-y-1">
            <button
              type="button"
              className="flex items-center justify-center w-8 h-8 bg-white rounded-md shadow focus:outline-none hover:bg-gray-50 active:bg-gray-200"
              {...provided.dragHandleProps}
            >
              <MenuIcon className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={uploadImage}
              className="flex items-center justify-center w-8 h-8 bg-white rounded-md shadow focus:outline-none hover:bg-gray-50 active:bg-gray-200"
            >
              <PhotographIcon className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => addChoice({ shouldFocus: true })}
              className="flex items-center justify-center w-8 h-8 bg-white rounded-md shadow focus:outline-none hover:bg-gray-50 active:bg-gray-200"
            >
              <DocumentAddIcon className="w-5 h-5" />
            </button>
            <button
              disabled={questions.length < 2}
              type="button"
              onClick={questionRemove}
              className="flex items-center justify-center w-8 h-8 bg-white rounded-md shadow focus:outline-none hover:bg-gray-50 active:bg-gray-200"
            >
              <TrashIcon
                className={classNames(
                  questions.length < 2 ? "opacity-30" : "",
                  " w-5 h-5"
                )}
              />
            </button>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default QuestionCard;
