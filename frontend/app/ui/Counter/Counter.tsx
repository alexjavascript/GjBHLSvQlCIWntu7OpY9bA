'use client';

import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import { increment } from "../../lib/store/slices/counter";

const Counter = () => {
  const { value } = useAppSelector(state => state.counter)
  const dispatch = useAppDispatch()

  console.log('client');
 
  return (
    <div>
      <h1>Counter: {value}</h1>
      <button onClick={() => dispatch(increment())}>{value}</button>
    </div>
  )
}

export default Counter;