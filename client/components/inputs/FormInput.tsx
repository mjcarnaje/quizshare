import React from "react";

import { classNames } from "@utils/index";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import TextareaAutosize from "react-textarea-autosize";

import { errorStringFormatter } from "../../utils/errorStringFormatter";

interface Props extends UseFormRegisterReturn {
  label?: string;
  placeholder?: string;
  type?: string;
  error?: FieldError;
  version?: "normal" | "auto-resize";
}

const FormInput: React.FC<Props> = ({
  label,
  placeholder,
  type,
  error,
  version = "normal",
  ...props
}) => {
  return (
    <div>
      {!!label && (
        <label
          className="text-sm font-medium text-gray-600 "
          htmlFor={props.name}
        >
          {label}
        </label>
      )}
      <div className="relative mt-1">
        {version === "auto-resize" ? (
          <TextareaAutosize
            id={props.name}
            className={`relative block focus:outline-none border bg-gray-50 w-full px-3 py-2 mt-1 rounded-md
          ${classNames(
            error ? "border-red-500 focus:border-red-500" : "border-gray-300"
          )}
            `}
            placeholder={placeholder}
            {...props}
          />
        ) : (
          <input
            id={props.name}
            type={type}
            className={`relative block focus:outline-none  border bg-gray-50 w-full px-3 py-2 mt-1 rounded-md
          ${classNames(
            error ? "border-red-500 focus:border-red-500" : "border-gray-300"
          )}
            `}
            placeholder={placeholder}
            {...props}
          />
        )}

        {error && (
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 text-red-500 pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        )}
      </div>
      {error && (
        <div className="mt-1">
          <p className="text-xs text-red-500 capitalize-first">
            {error.type === "required"
              ? errorStringFormatter(`${props.name} is required`)
              : errorStringFormatter(error?.message)}
          </p>
        </div>
      )}
    </div>
  );
};

export default FormInput;
