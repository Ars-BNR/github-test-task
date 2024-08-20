import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchRepositories = createAsyncThunk(
  "github/fetchRepositories",
  async (username: string) => {
    const response = await axios.get(
      `https://api.github.com/users/${username}/repos`
    );
    console.log(response.data);
    return response.data;
  }
);
//Action на поглучение репозиториев
