import { useState } from "react";


export default function Player({ name, symbol, isActive, onNameChange }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name);

  function handleEditing() {
    setIsEditing(editing => !editing);
    if (isEditing)
      onNameChange(symbol, playerName);
  }

  function handleChange(e) {
    setPlayerName(e.target.value);
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      handleEditing();
    }
  }

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {
          isEditing ?
            (
              <input
                value={playerName}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                type="text" required />
            )
            : (<span 
              className="player-name" 
              onClick={() => setIsEditing(true)}
            >
              {playerName}
            </span>)
        }
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditing}>{isEditing == false ? "Edit" : "Save"}</button>
    </li>
  );
}