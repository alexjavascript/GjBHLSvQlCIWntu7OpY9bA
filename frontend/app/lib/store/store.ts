import { configureStore } from "@reduxjs/toolkit";
import { theme } from "./slices/theme";
import { date } from "./slices/date";

export const createStore = () => {
  return configureStore({
    reducer: {
      theme: theme.reducer,
      date: date.reducer,
    }
  });
}

export type AppStore = ReturnType<typeof createStore>;
export type AppState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']

