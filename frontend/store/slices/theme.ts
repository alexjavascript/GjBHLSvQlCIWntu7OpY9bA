import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Mode = 'light' | 'dark';

type State = {
  mode: Mode;
}

// how do I set the value on client, not server?
const initialState: State = {
  mode: 'light'
}

export const theme = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setDarkTheme: (state) => {
      state.mode = 'dark'
    },
    setLightTheme: (state) => {
      state.mode = 'light'
    },
    toggleTheme: (state) => {
      state.mode = state.mode === 'dark' ? 'light' : 'dark'
    },
    setTheme: (state, action: PayloadAction<Mode>) => {
      state.mode = action.payload
    }
  }
})

export const { setDarkTheme, setLightTheme, toggleTheme, setTheme } = theme.actions