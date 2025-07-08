import { useState } from "react";

export default function PersonalGreeting() {
  const [name, setName] = useState<string>("John");
  //   Как сдеалать из инпута - контролируемый инпут
  return (
    <div>
      Dear,{name},it is nice to see you again!
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
    </div>
  );
}
