import { useContext, useEffect } from "react";
import { CounterContext } from "../context/CounterContext";

export const useCounter = (start: number = 0) => {
  const context = useContext(CounterContext);
  if (!context) {
    throw new Error("useCounter must be used withtin CounterProvider");
  }

  const { setCounter, counter } = context;

  //   setCounter(start);

  useEffect(() => {
    setCounter(start);
  }, [setCounter, start]);

  function increment() {
    setCounter((prev: number) => prev + 1);
  }
  function decrement() {
    setCounter((prev: number) => prev - 1);
  }
  function reset() {
    setCounter(0);
  }

  return { counter, increment, decrement, reset };
};
