import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type CounterState = {
  value: number
}

const initialState: CounterState = {
  value: 0,
}

export const counter = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    initializeCount: (state, action: PayloadAction<number>) => {
      state.value = action.payload
    }
  }
})

export const { increment, decrement, initializeCount } = counter.actions;


// https://redux.js.org/tutorials/typescript-quick-start
// const selectCount 