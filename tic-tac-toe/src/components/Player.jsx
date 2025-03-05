import { useState } from "react";


export default function Player({ name, symbol, isActive }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name);

  function handleEditing() {
    setIsEditing(editing => !editing);
  }

  function handleChange(e)
  {
    setPlayerName(e.target.value);
  }
  return (
    <li className={isActive ? 'active': undefined}>
      <span className="player">
        {
          isEditing ?
            (
            <input
              value={playerName}
              onChange={handleChange}
              type="text" required />
            )
            : (<span className="player-name">{playerName}</span>)
        }
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditing}>{isEditing == false ? "Edit" : "Save"}</button>
    </li>
  );
}