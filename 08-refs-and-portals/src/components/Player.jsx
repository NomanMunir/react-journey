import { useState, useRef } from "react";

export default function Player() {
  const [inputName, setInputName] = useState(null);
  const playerName = useRef();

  function handleInput()
  {
    setInputName(playerName.current.value);
  }

  return (
    <section id="player">
      <h2>Welcome { inputName ?? "unknown entity"}</h2>
      <p>
        <input type="text"
          ref={playerName}
        />
        <button onClick={handleInput}>Set Name</button>
      </p>
    </section>
  );
}
