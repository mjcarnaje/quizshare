import React, { useState } from "react";

import { SearchIcon } from "@heroicons/react/solid";
import { useAppDispatch } from "store";
import { setQuery } from "store/query";

const SearchBarInput: React.FC = () => {
  const dispath = useAppDispatch();
  const [text, setText] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispath(setQuery(text));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative mt-1 rounded-md shadow-sm"
    >
      <input
        className="block w-full pr-10 border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        placeholder="Search quiz"
        type="text"
        name="search"
        onChange={(e) => setText(e.target.value)}
      />
      <button
        type="submit"
        className="absolute inset-y-0 right-0 flex items-center p-3 cursor-pointer focus:outline-none"
      >
        <SearchIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
      </button>
    </form>
  );
};

export default SearchBarInput;
