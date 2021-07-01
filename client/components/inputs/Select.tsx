import React from "react";

import { errorStringFormatter } from "@utils/errorStringFormatter";
import { FieldError, Path, UseFormRegister } from "react-hook-form";

type InputProps<T> = {
  label?: string;
  name: Path<T>;
  register: UseFormRegister<T>;
  required: boolean;
  error?: FieldError;
  options: string[];
};

function Select<T>(props: InputProps<T>) {
  const { label, register, required, error, name, options } = props;

  return (
    <div>
      {label && (
        <label className="text-sm font-medium text-gray-600 " htmlFor={label}>
          {label}
        </label>
      )}
      <select
        id={label}
        className={`relative block w-full px-3 py-2 mt-1 rounded-md focus:ring-0 focus:border-black ${
          error ? "border-red-500 focus:border-red-500" : "focus:border-black"
        }`}
        {...register(name, { required })}
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
              ? label
                ? `${label} is required`
                : errorStringFormatter(`${name} is required`)
              : errorStringFormatter(error?.message)}{" "}
          </p>
        </div>
      )}
    </div>
  );
}

export default Select;
