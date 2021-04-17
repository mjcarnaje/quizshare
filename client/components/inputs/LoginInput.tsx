import React from "react";
import { UseFormRegister } from "react-hook-form";

interface props {
  name: string;
  label: string;
  placeholder?: string;
  register: UseFormRegister<any>;
  type?: string;
  required: boolean;
}

const LoginInput: React.FC<props> = ({
  name,
  label,
  placeholder,
  type,
  register,
  required,
}) => {
  return (
    <div>
      <label className="font-medium text-gray-600 " htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        type={type}
        className="relative block w-full px-3 py-2 mt-1 rounded-md focus:ring-purple-600"
        placeholder={placeholder}
        {...register(name, { required })}
      />
    </div>
  );
};

export default LoginInput;

// text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring focus:border-purple-500 focus:z-10 sm:text-sm
