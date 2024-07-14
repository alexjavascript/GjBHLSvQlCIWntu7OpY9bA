'use client'

import React, { PropsWithChildren, useRef } from "react"
import { Provider } from "react-redux";
import { createStore, AppStore } from "./lib/store/store";
import { initializeCount } from "./lib/store/slices/counter";

export const StoreProvider: React.FC<PropsWithChildren<{ count: number }>> = (props) => {
  const { children, count } = props;

  const storeRef = useRef<AppStore>();

  if (!storeRef.current) {
    storeRef.current = createStore();
    storeRef.current.dispatch(initializeCount(count));
  }

  return (
    <Provider store={storeRef.current}>{children}</Provider>
  )
}
