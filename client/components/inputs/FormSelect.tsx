import React from "react";

import { errorStringFormatter } from "@utils/errorStringFormatter";
import { UseFormRegisterReturn, FieldError } from "react-hook-form";

interface Props extends UseFormRegisterReturn {
  options: string[];
  label: string;
  error?: FieldError;
}

const FormSelect: React.FC<Props> = ({ options, label, error, ...props }) => {
  return (
    <div>
      <label
        className="text-sm font-medium text-gray-600 "
        htmlFor={props.name}
      >
        {label}
      </label>
      <select
        id={props.name}
        className={`relative block w-full px-3 py-2 mt-1 rounded-md focus:ring-0 focus:border-black ${
          error ? "border-red-500 focus:border-red-500" : "focus:border-black"
        }`}
        {...props}
      >
        {options.map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>
      {error && (
        <div className="mt-1">
          <p className="text-xs text-red-500 capitalize-first">
            {error.type === "required"
              ? errorStringFormatter(`${props.name} is required`)
              : errorStringFormatter(error?.message)}{" "}
          </p>
        </div>
      )}
    </div>
  );
};

export default FormSelect;
