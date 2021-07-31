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

import ResultCard from "./ResultCard";

function getRandomPercent(nums: number[]): number {
  let randomNumber = Math.floor(Math.random() * 101);
  while (nums.includes(randomNumber)) {
    randomNumber = Math.floor(Math.random() * 101);
  }
  return randomNumber;
}

interface Props {}

const ResultInputs: React.FC<Props> = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext<QuizInput>();
  const {
    fields: results,
    append,
    remove,
    move,
  } = useFieldArray({
    control,
    name: "results",
  });

  const addResult = (options?: FieldArrayMethodProps) => {
    append(
      {
        id: uuid(),
        title: "",
        description: "",
        resultPhoto: null,
        minimumPercent: getRandomPercent(results.map((r) => r.minimumPercent)),
      },
      options
    );
  };

  useEffect(() => {
    if (results.length === 0) {
      addResult({ shouldFocus: false });
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
              {results.map((result, resultIdx) => {
                return (
                  <ResultCard
                    key={result.id}
                    result={result}
                    resultIdx={resultIdx}
                    results={results}
                    errors={errors.results?.[resultIdx]}
                    resultRemove={() => {
                      remove(resultIdx);
                    }}
                  />
                );
              })}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <button
        type="button"
        onClick={() => {
          addResult({ shouldFocus: true });
        }}
        className="fixed bottom-6 right-6 p-2 flex items-center justify-center rounded-xl bg-black hover:bg-[#9b5d5d] active:opacity-80 text-white focus:outline-none"
      >
        <PlusCircleIcon className="w-8 h-8" />
      </button>
    </>
  );
};

export default ResultInputs;
