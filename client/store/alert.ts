import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

import { AppThunk } from ".";
import { RootState } from "./index";

export type IAlert = {
  id: string;
  show: boolean;
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
    unShowAlert: (state, { payload }: PayloadAction<string>) => {
      const alertIdx = state.alerts.findIndex((alert) => alert.id === payload);

      if (alertIdx !== -1) {
        state.alerts[alertIdx].show = false;
      }
    },
    removeAlert: (state, { payload }: PayloadAction<string>) => {
      const alertIdx = state.alerts.findIndex((alert) => alert.id === payload);

      if (alertIdx !== -1) {
        state.alerts.splice(alertIdx, 1);
      }
    },
  },
});

type IProps = { duration: number } & Omit<IAlert, "id" | "show">;

export const { setAlert, unShowAlert, removeAlert } = alertSlice.actions;

export const selectAlerts = (state: RootState) => state.alert.alerts;

export const showAlert =
  (props: IProps): AppThunk =>
  (dispatch) => {
    const { duration, ...alert } = props;

    const id = uuidv4();

    dispatch(setAlert({ id, show: true, ...alert }));

    setTimeout(() => {
      dispatch(unShowAlert(id));
    }, duration);
  };

export default alertSlice.reducer;
