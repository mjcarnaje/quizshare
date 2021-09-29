import React from "react";

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

  return (
    <>
      <DragDropContext
        onDragEnd={({ source, destination }) => {
          if (destination) {
            move(source.index, destination.index);
          }
        }}
      >
        {results.length !== 0 ? (
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
        ) : (
          <div className="text-center my-4">
            <svg
              className="mx-auto h-12 w-12 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                vector-effect="non-scaling-stroke"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
              />
            </svg>
            <h3 className="mt-2 text-sm font-medium text-gray-900">
              No results
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Add result to show result to your takers
            </p>
            <div className="mt-6">
              <button
                type="button"
                onClick={() => {
                  addResult({ shouldFocus: true });
                }}
                className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <svg
                  className="-ml-1 mr-2 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    clip-rule="evenodd"
                  />
                </svg>
                New Result
              </button>
            </div>
          </div>
        )}
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
