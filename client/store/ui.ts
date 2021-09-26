import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IUI {
  isSideBarOpen: boolean;
}

const initialState: IUI = {
  isSideBarOpen: true,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setIsSideBarOpen: (state, { payload }: PayloadAction<boolean>) => {
      state.isSideBarOpen = payload;
    },
  },
});

export const { setIsSideBarOpen } = uiSlice.actions;

export default uiSlice.reducer;
