import React, { useState } from "react";

import { SearchIcon } from "@heroicons/react/solid";
import { useAppDispatch } from "store";
import { setQuery } from "store/globalState";

const SearchBarInput: React.FC = () => {
  const dispath = useAppDispatch();
  const [text, setText] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispath(setQuery(text));
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-1">
      <div className="flex w-full md:ml-0">
        <label htmlFor="search_field" className="sr-only">
          Search
        </label>
        <div className="relative w-full text-gray-400 focus-within:text-gray-600">
          <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
            <SearchIcon className="w-5 h-5" aria-hidden="true" />
          </div>
          <input
            id="search_field"
            className="block w-full h-full py-2 pl-8 pr-3 text-gray-900 placeholder-gray-500 border-transparent focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent sm:text-sm"
            placeholder="Search"
            type="search"
            name="search"
            onChange={(e) => setText(e.target.value)}
          />
        </div>
      </div>
    </form>
  );
};

export default SearchBarInput;