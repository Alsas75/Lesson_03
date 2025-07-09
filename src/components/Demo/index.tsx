import { useEffect, useState } from "react";

export default function Demo() {
  const [counter, setCounter] = useState<number>(0);
  const [age, setAge] = useState<number>(30);

  useEffect(() => {
    console.log("Use effect 1 с пустым массивом ");
    // при первом рендере компонента
  }, []);

  useEffect(() => {
    console.log("Use effect 2 без массива зависимостей");
    // при первом рендере компонента
    // при любом изменении - любой ререндер
  });

  useEffect(() => {
    console.log("Use effect 3 с указанием зависимостей");
    // при первом рендере компонента
  }, [age]);

  //   функция очистки в юзэффекте - сработает при размонтировании компонента
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Click");
    }, 6000);
    //функция указанная в return вызовется в момент закрытия компонента
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <h2>Use Effect</h2>
      <p>Counter: {counter}</p>
      <p>Age: {age}</p>
      <button type="button" onClick={() => setCounter((prev) => prev + 1)}>
        +1
      </button>
      <button type="button" onClick={() => setAge((prev) => prev + 1)}>
        Age +1
      </button>
      <ul>
        <li>Для фетчинга данных</li>
        <li>Для таймеров</li>
        <li>Для стастических данных - маркетинг или аналитика</li>
      </ul>
    </div>
  );
}
