import { useState } from "react";
import Planet from "./Planet";

export default function SpaceMissionForm() {
  const [name, setName] = useState<string>("");
  
  const [planet, setPlanet] = useState<string>(Planet.Mars);
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <select
        name="planet"
        value={planet}
        onChange={(event) => setPlanet(event.target.value)}
      >
        <option value={Planet.Mars}>{Planet.Mars}</option>
        <option value={Planet.Venus}>{Planet.Venus}</option>
        <option value={Planet.Jupiter}>{Planet.Jupiter}</option>
        <option value={Planet.Saturn}>{Planet.Saturn}</option>
      </select>
      <div className="output-block">
        {name.trim() === ""
          ? "🛑Please enter your name to begin your mission."
          : `🧑‍🚀Astronaut ${name} is headed to ${planet}!`}
      </div>
    </div>
  );
}

