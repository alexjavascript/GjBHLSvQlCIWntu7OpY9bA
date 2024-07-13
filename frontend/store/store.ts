import { configureStore } from "@reduxjs/toolkit";
import { counter } from "./slices/counter";
import { theme } from "./slices/theme";

export const createStore = () => {
  return configureStore({
    reducer: {
      counter: counter.reducer, 
      theme: theme.reducer,
    }
  });
}

export type AppStore = ReturnType<typeof createStore>;
export type AppState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']


// store.subscribe(() => console.log(store.getState()))

// store.dispatch(increment())
// store.dispatch(increment())
// store.dispatch(increment())
// store.dispatch(increment())
