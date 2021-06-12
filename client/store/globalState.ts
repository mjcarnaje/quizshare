import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "./index";

interface IGlobalState {
  query: string;
}

const initialState: IGlobalState = {
  query: "",
};

export const globalStateSlice = createSlice({
  name: "globalState",
  initialState,
  reducers: {
    setQuery: (state, { payload }: PayloadAction<string>) => {
      state.query = payload;
    },
  },
});

export const { setQuery } = globalStateSlice.actions;

export const selectQuery = (state: RootState) => state.globalState.query;

export default globalStateSlice.reducer;
