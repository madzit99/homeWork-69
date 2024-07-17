import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ShowInfo, ShowInterface } from "../types";
import { fetchInfo, fetchShows } from "./appThunks";

export interface appState {
  showArray: ShowInterface[] | null;
  oneShow: ShowInfo | null;
  inputValue: string;
  loading: boolean;
  error: boolean;
}

const initialState: appState = {
  showArray: null,
  oneShow: null,
  inputValue: "",
  loading: false,
  error: false,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    saveInput: (state, action: PayloadAction<string>) => {
      state.inputValue = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchShows.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchShows.fulfilled, (state, action) => {
      state.loading = false;
      state.showArray = action.payload;
    });
    builder.addCase(fetchShows.rejected, (state) => {
      state.loading = false;
      state.error = true;
    });
    builder.addCase(fetchInfo.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchInfo.fulfilled, (state, action) => {
      state.loading = false;
      state.oneShow = action.payload;
    });
    builder.addCase(fetchInfo.rejected, (state) => {
      state.loading = false;
      state.error = true;
    });
  },
});

export const appReducer = appSlice.reducer;
export const { saveInput } = appSlice.actions;
