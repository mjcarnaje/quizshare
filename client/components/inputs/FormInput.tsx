import React from "react";

import { FieldError, UseFormRegister } from "react-hook-form";

import { errorStringFormatter } from "../../utils/errorStringFormatter";

interface props {
  name: string;
  label: string;
  placeholder?: string;
  register: UseFormRegister<any>;
  type?: string;
  error?: FieldError;
}

const FormInput: React.FC<props> = ({
  name,
  label,
  placeholder,
  type,
  register,
  error,
}) => {
  return (
    <div>
      <label className="text-sm font-medium text-gray-600 " htmlFor={name}>
        {label}
      </label>
      <div className="relative mt-1 rounded-md shadow-sm">
        <input
          id={name}
          type={type}
          className={`relative block w-full px-3 py-2 mt-1 rounded-md focus:ring-0  ${
            error ? "border-red-500 focus:border-red-500" : "focus:border-black"
          }`}
          placeholder={placeholder}
          {...register(name)}
        />
        {error && type !== "date" && (
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 text-red-500 pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        )}
      </div>
      {error && error.message && (
        <div className="mt-1">
          <p className="text-xs text-red-500 capitalize-first">
            {errorStringFormatter(error.message)}
          </p>
        </div>
      )}
    </div>
  );
};

export default FormInput;