import { combineReducers } from "@reduxjs/toolkit";
import githubSlice from "./githubSlice";

export const rootReducer = combineReducers({
  github: githubSlice,
});

export type RootState = ReturnType<typeof rootReducer>;
//указываем редюсеры и типизируем их для подсказок
