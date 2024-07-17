import { createAsyncThunk } from "@reduxjs/toolkit";
import { ShowInfo, ShowInterface } from "../types";
import { RootState } from "./store";
import axiosApi from "../axiosApi";

export const fetchShows = createAsyncThunk<
  ShowInterface[],
  string,
  { state: RootState }
>("app/fetch", async (search) => {
  try {
    const response = await axiosApi.get(`search/shows?q=${search}`);
    return response.data;
  } catch (error) {
    console.error("Error!", error);
    throw error;
  }
});

export const fetchInfo = createAsyncThunk<
  ShowInfo,
  number,
  { state: RootState }
>("app/fetchInfo", async (id, _thunkAPI) => {
  try {
    const response = await axiosApi.get(`shows/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error!", error);
    throw error;
  }
});

