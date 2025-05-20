import { useState } from "react";

export default function Greeting() {
  const [changeText, setChangeText] = useState(false);

  function handleChange() {
    setChangeText(true);
  }
  return (
    <div>
      <h2>Hello World!</h2>
      {!changeText && <p> It's good to see you.</p>}
      {changeText && <p>Changed!</p>}
      <button onClick={handleChange}>Change Text</button>
    </div>
  );
}
