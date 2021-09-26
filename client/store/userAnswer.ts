import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from ".";
import { IUserAnswer } from "../types";

type IUserAnswerState = {
  userAnswer: IUserAnswer;
};

const initialState: IUserAnswerState = {
  userAnswer: {},
};

export const userAnswer = createSlice({
  name: "userAnswer",
  initialState,
  reducers: {
    setUserAnswer: (state, { payload }: PayloadAction<IUserAnswer>) => {
      state.userAnswer = payload;
    },
  },
});

export const { setUserAnswer } = userAnswer.actions;

export const selectUserAnswer = (state: RootState) => state.userAnswer;

export default userAnswer.reducer;
