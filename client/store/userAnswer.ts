import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from ".";
import { IUserAnswer } from "../types";

type IUserAnswerState = {
  userAnswers: IUserAnswer;
};

const initialState: IUserAnswerState = {
  userAnswers: {},
};

export const userAnswer = createSlice({
  name: "userAnswer",
  initialState,
  reducers: {
    setUserAnswer: (state, { payload }: PayloadAction<IUserAnswer>) => {
      state.userAnswers = payload;
    },
  },
});

export const { setUserAnswer } = userAnswer.actions;

export const selectUserAnswer = (state: RootState) => state.userAnswers;

export default userAnswer.reducer;
