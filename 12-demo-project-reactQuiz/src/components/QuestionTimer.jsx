import { useEffect, useState } from "react";

export default function QuestionTimer({ timeout, onTimeout }) {
  const [remaningTime, setRemaningTime] = useState(timeout);

  useEffect(() => {
    const id = setTimeout(() => {
      //   console.log("Seting Timout");
      onTimeout();
    }, timeout);

    return () => {
      //   console.log("Clearing Timout");
      clearTimeout(id);
    };
  }, [timeout, onTimeout]);

  useEffect(() => {
    const interval = setInterval(() => {
      //   console.log("Setting Interval");
      setRemaningTime((prevTime) => prevTime - 100);
    }, 100);
    return () => {
      //   console.log("Clearing Interval");
      clearInterval(interval);
    };
  }, []);

  return <progress id="question-time" value={remaningTime} max={timeout} />;
}
