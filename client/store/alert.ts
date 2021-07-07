import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

import { AppThunk } from ".";
import { RootState } from "./index";

type IAlert = {
  id: string;
  title?: string;
  description: string;
  status: "success" | "error" | "none";
  withUndo: boolean;
  isClosable: boolean;
};

interface IAlertState {
  alerts: IAlert[];
}

const initialState: IAlertState = {
  alerts: [],
};

export const alertSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    setAlert: (state, { payload }: PayloadAction<IAlert>) => {
      state.alerts.push(payload);
    },
    removeAlert: (state, { payload }: PayloadAction<string>) => {
      state.alerts = state.alerts.filter(({ id }) => id !== payload);
    },
  },
});

type IProps = { duration: number } & Omit<IAlert, "id">;

export const { setAlert, removeAlert } = alertSlice.actions;

export const selectAlerts = (state: RootState) => state.alert.alerts;

export const showAlert =
  (props: IProps): AppThunk =>
  (dispatch) => {
    const { duration, ...alert } = props;

    const id = uuidv4();

    dispatch(setAlert({ id, ...alert }));

    setTimeout(() => {
      dispatch(removeAlert(id));
    }, duration);
  };

export default alertSlice.reducer;
