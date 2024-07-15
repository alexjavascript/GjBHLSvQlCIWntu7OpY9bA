import { configureStore } from "@reduxjs/toolkit";
import { theme } from "./slices/theme";

export const createStore = () => {
  return configureStore({
    reducer: {
      theme: theme.reducer,
    }
  });
}

export type AppStore = ReturnType<typeof createStore>;
export type AppState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']

