import styles from "./Counter.module.css";
import { useCounter } from "../../hooks/useCounter";

export const Counter = () => {
  // const initialValue = 0;
  // const [counter, setCounter] = useState<number>(initialValue);
  // const { counter, setCounter } = setCounter(CounterContext);
  const { counter, increment, decrement, reset } = useCounter(10);
  // tuple - кортеж
  // state, local state - состояние
  // setter function - фунция сеттер

  // function handlePlus() {
  //   setCounter((prev) => prev + 1);
  // }
  // const handleMinus = () => {
  //   setCounter((prev) => prev - 1);
  // };
  // const resetCounter = () => {
  //   setCounter(initialValue);
  // };
  return (
    <div className={styles.counterCard}>
      <h2>Counter: {counter}</h2>
      <button type="button" onClick={decrement}>
        -1
      </button>
      <button type="button" onClick={increment}>
        +1
      </button>

      <button type="button" onClick={reset}>
        Reset
      </button>
    </div>
  );
};

// создайте кнопку -1, которая бы уменьшала значения counter на 1
// дополнительно создайте кнопку reset, которая бы сбрасывала значения counter до нуля
// дополнительно, добавьте стили
