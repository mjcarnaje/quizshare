import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "./index";

interface IQuery {
  query: string;
}

const initialState: IQuery = {
  query: "",
};

export const querySlice = createSlice({
  name: "query",
  initialState,
  reducers: {
    setQuery: (state, { payload }: PayloadAction<string>) => {
      state.query = payload;
    },
  },
});

export const { setQuery } = querySlice.actions;

export const selectQuery = (state: RootState) => state.query.query;

export default querySlice.reducer;
