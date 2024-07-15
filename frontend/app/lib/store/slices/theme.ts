import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Mode = 'light' | 'dark';

type State = {
  mode: Mode;
}

const initialState: State = {
  mode: 'light',
}

export const theme = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<Mode>) => {
      state.mode = action.payload
    }
  }
})

export const { setTheme } = theme.actions