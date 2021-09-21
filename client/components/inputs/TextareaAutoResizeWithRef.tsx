import React from "react";

import { ExclamationCircleIcon } from "@heroicons/react/solid";
import { errorStringFormatter } from "@utils/errorStringFormatter";
import { classNames } from "@utils/index";
import { FieldError, Path, UseFormRegister } from "react-hook-form";
import TextareaAutosize, {
  TextareaAutosizeProps,
} from "react-textarea-autosize";

type InputProps<T> = {
  label?: string;
  name: Path<T>;
  placeholder?: string;
  register: UseFormRegister<T>;
  required: boolean;
  error?: FieldError;
} & TextareaAutosizeProps;

type ForwardRefFn = <T extends Record<string, string>>(
  props: InputProps<T> & React.RefAttributes<HTMLTextAreaElement>
) => React.ReactElement | null;

const TextareaAutoResizeWithRef = React.forwardRef((props, textInput) => {
  const { label, name, placeholder, register, required, error, ...propRest } =
    props;
  const { ref: registerRef, ...registerRest } = register(name, { required });

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
          placeholder={placeholder}
          {...propRest}
          {...registerRest}
          name={name}
          ref={(e) => {
            // @ts-ignore
            textInput.current = e;
            registerRef(e);
          }}
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
}) as ForwardRefFn;

export default TextareaAutoResizeWithRef;
