import { useState } from "react";
import styles from "./DetermineGender.module.css";

interface GenderData {
  name: string;
  gender: "male" | "female";
  country: string;
  probability: number;
  remaining_credits: number;
}

export default function DetermineGender() {
  const [name, setName] = useState<string>("");
  const [genderData, setGenderData] = useState<GenderData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [nameError, setNameError] = useState<string>("");

  const validate = (name: string): boolean => {
    if (name.trim().length === 0) {
      setNameError("Name cannot be empty");
      return false;
    }
    setNameError("");
    return true;
  };

  async function determineGender(name: string) {
    try {
      const res = await fetch(`https://api.genderapi.io/api/?name=${name}`);
      if (!res.ok) {
        if (res.status === 429) {
          throw new Error("Too many requests. Please try again later.");
        }
        throw new Error("Failed to fetch gender data");
      }

      const data: GenderData = await res.json();
      setGenderData(data);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "An unknown error occurred"
      );
      setGenderData(null);
    } finally {
      setIsLoading(false);
    }
  }

  const handleSubmit = () => {
    if (!validate(name)) return;
    determineGender(name);
  };

  const translateGender = (gender: string): string => {
    return gender === "male" ? "мужской" : "женский";
  };

  return (
    //     <div>
    //         <h2>Determine Gender</h2>
    //       <input
    //         type="text"
    //         value={name}
    //         onChange={(event) => setName(event.target.value)}
    //       />
    //       <button type="button" onClick={determineGender}>
    //       Determine gender
    //       </button>
    //       {data && (
    //         <div style={{ marginTop: 20 }}>
    //           <p><strong>Имя:</strong> {data.name}</p>
    //           <p><strong>Пол:</strong> {translateGender(data.gender)}</p>
    //           <p><strong>Страна:</strong> {data.country}</p>
    //           <p><strong>Вероятность:</strong> {data.probability}%</p>
    //           <p><strong>Остаток запросов:</strong> {data.remaining_credits}</p>
    //         </div>
    //       )}

    //     </div>

    // <h2>Gender Predictor</h2>
    <section>
      <h2>Determine Gender</h2>
      <div className={styles.card}>
        <input
          className={styles.input}            
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={handleSubmit} disabled={isLoading}>
          {isLoading ? "Loading..." : "Determine Gender"}
        </button>
      </div>

      {nameError && <p style={{ color: "red" }}>{nameError}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {isLoading && <p>Loading data...</p>}

      {genderData && !isLoading && (
        <div className={styles.card}>
          <ul>
            <li>Имя: {genderData.name.toUpperCase()}</li>
            <li>Пол: {translateGender(genderData.gender)}</li>
            <li>Страна: {genderData.country}</li>
            <li>Вероятность: {genderData.probability}%</li>
            <li>Остаток запросов: {genderData.remaining_credits}</li>
          </ul>
        </div>
      )}
    </section>
  );
}
