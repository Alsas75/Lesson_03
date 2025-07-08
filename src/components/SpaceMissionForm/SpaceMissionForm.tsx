import { useState } from "react";

export default function SpaceMissionForm() {
  const [name, setName] = useState<string>("");
  const [planet, sePlanet] = useState<string>("Mars");
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
        onChange={(event) => sePlanet(event.target.value)}
      >
        <option value="Mars">Mars</option>
        <option value="Venus">Venus</option>
        <option value="Jupiter">Jupiter</option>
        <option value="Saturn">Saturn</option>
      </select>
      <div className="output-block">
        {name.trim() === ""
          ? "🛑Please enter your name to begin your mission."
          : `🧑‍🚀Astronaut ${name} is headed to ${planet}!`}
      </div>
    </div>
  );
}
