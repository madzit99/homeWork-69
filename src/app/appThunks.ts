import { createAsyncThunk } from "@reduxjs/toolkit";
import { ShowInterface } from "../types";
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
