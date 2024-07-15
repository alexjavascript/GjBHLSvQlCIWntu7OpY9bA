import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type State = {
  time: number;
}

const initialState: State = {
  time: Date.now(),
}

export const date = createSlice({
  name: 'date',
  initialState,
  reducers: {
    incMonth: (state) => {
      const date = new Date(state.time)
      state.time = date.setMonth(date.getMonth() + 1)
    },
    decMonth: (state) => {
      const date = new Date(state.time)
      state.time = date.setMonth(date.getMonth() - 1)
    },
    setTime: (state, action: PayloadAction<number>) => {
      state.time = action.payload
    }
  }
})

export const { incMonth, decMonth, setTime } = date.actions
