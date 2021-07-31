import React, { useEffect } from "react";

import ImageHolder from "@components/ImageHolder";
import TextareaAutoResize from "@components/inputs/TextareaAutoResize";
import { QuizInput, ResultInput } from "@generated/graphql";
import { PhotographIcon, TrashIcon } from "@heroicons/react/outline";
import { MenuIcon } from "@heroicons/react/solid";
import { useUploadPhoto } from "@utils/useUploadImage";
import { Draggable } from "react-beautiful-dnd";
import {
  Controller,
  DeepMap,
  FieldArrayWithId,
  FieldError,
  useFormContext,
} from "react-hook-form";
import ReactSlider from "react-slider";

import { classNames } from "../../utils/index";

interface Props {
  result: FieldArrayWithId<QuizInput, "results", "id">;
  resultIdx: number;
  resultRemove: () => void;
  errors?: DeepMap<ResultInput, FieldError>;
  results: FieldArrayWithId<QuizInput, "results", "id">[];
}

const ResultCard: React.FC<Props> = ({
  result,
  resultIdx,
  resultRemove,
  errors,
  results,
}) => {
  const [uploadImage, { data, loading }] = useUploadPhoto();

  const { register, setValue, control, watch } = useFormContext<QuizInput>();

  useEffect(() => {
    if (data) {
      setValue(`results.${resultIdx}.resultPhoto`, data);
    }
  }, [data]);

  const resultValues = watch("results");

  return (
    <Draggable key={result.id} draggableId={result.id} index={resultIdx}>
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
            <div className="p-4 ">
              {errors?.minimumPercent && (
                <div className="flex items-center justify-center py-2 border border-red-500 rounded-md bg-red-50">
                  <p className="block">{errors.minimumPercent.message}</p>
                </div>
              )}

              <input
                type="hidden"
                defaultValue={result.id}
                {...register(`results.${resultIdx}.id`)}
              />
              <input
                type="hidden"
                {...register(`results.${resultIdx}.resultPhoto`)}
              />

              <Controller
                control={control}
                name={`results.${resultIdx}.minimumPercent`}
                defaultValue={result.minimumPercent}
                rules={{
                  validate: (value) => {
                    if (
                      resultValues
                        .filter((x) => x.id !== result.id)
                        .map((x) => x.minimumPercent)
                        .includes(value)
                    ) {
                      return "Value is already selected";
                    }
                    return true;
                  },
                }}
                render={({ field }) => (
                  <ReactSlider
                    className="flex items-center w-full h-8"
                    thumbClassName="rounded-full cursor-pointer bg-indigo-500 text-white font-semibold text-xs flex items-center focus:outline-none shadow justify-center w-5 h-5"
                    trackClassName="rounded bg-indigo-100 h-2"
                    renderThumb={(props, state) => (
                      <div {...props}>{state.valueNow}</div>
                    )}
                    {...field}
                  />
                )}
              />
              <div className="flex justify-center">
                <div className="w-full mx-auto md:w-2/3">
                  <ImageHolder
                    image={data || result.resultPhoto}
                    loading={loading}
                  />
                </div>
              </div>
              <TextareaAutoResize<QuizInput>
                name={`results.${resultIdx}.title`}
                placeholder="Type your title"
                error={errors?.title}
                register={register}
                required
              />
              <TextareaAutoResize<QuizInput>
                name={`results.${resultIdx}.description`}
                placeholder="Type your description"
                error={errors?.description}
                register={register}
                required
              />
            </div>
          </div>
          <div className="absolute flex flex-col space-y-1 left-full">
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
              onClick={resultRemove}
              className="flex items-center justify-center w-8 h-8 bg-white rounded-md shadow focus:outline-none hover:bg-gray-50 active:bg-gray-100"
            >
              <TrashIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default ResultCard;
