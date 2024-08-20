import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducers";

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};
//типизация стора + диспатча
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
