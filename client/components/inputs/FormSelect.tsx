import React from "react";

import { UseFormRegister, FieldError } from "react-hook-form";

interface props {
  register: UseFormRegister<any>;
  options: string[];
  label: string;
  name: string;
  error?: FieldError;
}

const FormSelect: React.FC<props> = ({
  register,
  options,
  label,
  name,
  error,
  ...rest
}) => {
  return (
    <div>
      <label className="text-sm font-medium text-gray-600 " htmlFor={name}>
        {label}
      </label>
      <select
        className={`relative block w-full px-3 py-2 mt-1 rounded-md focus:ring-0 focus:border-black ${
          error ? "border-red-500 focus:border-red-500" : "focus:border-black"
        }`}
        {...register(name)}
        {...rest}
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
            {error.message}
          </p>
        </div>
      )}
    </div>
  );
};

export default FormSelect;
