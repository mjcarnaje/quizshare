import React from "react";

import { ExclamationCircleIcon } from "@heroicons/react/solid";
import { classNames } from "@utils/index";
import { FieldError, Path, UseFormRegister } from "react-hook-form";
import TextareaAutosize from "react-textarea-autosize";

import { errorStringFormatter } from "../../utils/errorStringFormatter";

type InputProps<T> = {
  label?: string;
  name: Path<T>;
  register: UseFormRegister<T>;
  required: boolean;
  showLabel?: boolean;
  error?: FieldError;
};

function TextareaAutoResize<T>(props: InputProps<T>) {
  const { label, register, required, error, name } = props;

  return (
    <div>
      {label && (
        <label className="text-sm font-medium text-gray-600 " htmlFor={label}>
          {label}
        </label>
      )}
      <div className="relative mt-1">
        <TextareaAutosize
          id={label}
          className={`relative block focus:outline-none border bg-gray-50 w-full px-3 py-2 mt-1 rounded-md
          ${classNames(
            error ? "border-red-500 focus:border-red-500" : "border-gray-300"
          )}
            `}
          {...register(name, { required })}
        />

        {error && (
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 text-red-500 pointer-events-none">
            <ExclamationCircleIcon className="w-5 h-5" />
          </div>
        )}
      </div>
      {error && (
        <div className="mt-1">
          <p className="text-xs text-red-500 capitalize-first">
            {error.type === "required"
              ? label
                ? `${label} is required`
                : errorStringFormatter(`${name} is required`)
              : errorStringFormatter(error?.message)}
          </p>
        </div>
      )}
    </div>
  );
}

export default TextareaAutoResize;
