import React, { useEffect, useRef, useState } from "react";

import { SearchIcon } from "@heroicons/react/solid";
import { useAppDispatch } from "store";
import { setQuery } from "store/query";

const SearchBarInput: React.FC = () => {
  const dispath = useAppDispatch();
  const [text, setText] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispath(setQuery(text));
  };

  const handleKeyPress = (event: KeyboardEvent) => {
    if (event.ctrlKey && event.key === "/") {
      inputRef.current?.focus();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <form onSubmit={handleSubmit} className="relative rounded-md">
      <button
        type="submit"
        className="absolute inset-y-0 left-0 flex items-center p-3 cursor-pointer focus:outline-none"
      >
        <SearchIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
      </button>
      <input
        className="block w-full px-10 py-2 border border-gray-200 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        placeholder="Search quiz"
        type="text"
        name="search"
        onChange={(e) => setText(e.target.value)}
        value={text}
        ref={inputRef}
      />
      <div className="absolute inset-y-0 right-0 flex py-1.5 px-1.5">
        <kbd className="inline-flex items-center px-2 font-sans text-sm font-medium text-gray-400 border border-gray-200 rounded">
          Ctrl + /
        </kbd>
      </div>
    </form>
  );
};

export default SearchBarInput;
