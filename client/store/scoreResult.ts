import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "./index";
import { ScoreFragment } from "../generated/graphql";

type IScoreResult = {
  data: ScoreFragment | null;
};

const initialState: IScoreResult = {
  data: null,
};

export const scoreResult = createSlice({
  name: "scoreResult",
  initialState,
  reducers: {
    setScoreResult: (state, { payload }: PayloadAction<ScoreFragment>) => {
      state.data = payload;
    },
    resetScoreResult: () => initialState,
  },
});

export const { setScoreResult, resetScoreResult } = scoreResult.actions;

export const selectCommentInput = (state: RootState) => state.commentInput;

export default scoreResult.reducer;
