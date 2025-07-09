import { useEffect, useState } from "react";

export const AgePredictor = () => {
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<number>(0);
  const [nameErrorMsg, setNameErrorMsg] = useState<string>("");
  const [errMessage, setErrMessage] = useState<string>("");

  function validate(name: string): boolean {
    if (name.length >= 3) {
      setNameErrorMsg("");
      return true;
    }
    setNameErrorMsg("Name should be at least 3 symbols long");
    return false;
  }

  async function fetchAge(name: string) {
    try {
      const res = await fetch(`https://api.agify.io/?name=${name}`);
      if (res.status === 429) {
        throw Error("Too many request. Please wait");
      }
      const obj = await res.json();
      setAge(obj.age);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setErrMessage(err.message);
      }
    }
  }

  useEffect(() => {
    if (validate(name)) {
      fetchAge(name);
    }
  }, [name]);
  return (
    <section>
      <h2>Age Predictor</h2>
      <p style={{ color: "red" }}>{nameErrorMsg}</p>
      {errMessage ? <p>{errMessage}</p> : null}
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {nameErrorMsg ? null : (
        <div>
          Estimated age is {age} for name {name}
        </div>
      )}
    </section>
  );
};
