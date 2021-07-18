import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "./index";

interface ICommentInput {
  text: string | null;
  commentId: string | null;
}

const initialState: ICommentInput = {
  text: null,
  commentId: null,
};

export const commentInputSlice = createSlice({
  name: "commentInput",
  initialState,
  reducers: {
    setCommentInput: (state, { payload }: PayloadAction<ICommentInput>) => {
      state.commentId = payload.commentId;
      state.text = payload.text;
    },
    resetCommentInput: () => initialState,
  },
});

export const { setCommentInput, resetCommentInput } = commentInputSlice.actions;

export const selectCommentInput = (state: RootState) => state.commentInput;

export default commentInputSlice.reducer;
