import { createSlice } from "@reduxjs/toolkit";
import { fetchRepositories } from "../actions/githubActions";
//обработка нашего редюсера через Slice
export interface githubState {
  repositories: any[];
  status: string;
  error: string;
}

const githubSlice = createSlice({
  name: "github",
  initialState: {
    repositories: [],
    status: "wait",
    error: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    //обработка случаев с приходом данных
    builder
      .addCase(fetchRepositories.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchRepositories.fulfilled, (state, action) => {
        state.status = "success";
        state.repositories = action.payload;
        state.error = "";
      })
      .addCase(fetchRepositories.rejected, (state, action) => {
        state.status = "fail";
        state.error = action.error.message ?? "An error occurred";
      });
  },
});

export default githubSlice.reducer;
