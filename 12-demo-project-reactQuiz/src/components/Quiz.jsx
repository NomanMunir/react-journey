import { useCallback, useState } from "react";
import QUESTIONS from "../questions.js";
import quizCompletedImg from "../assets/quiz-complete.png";
import Question from "./Question.jsx";
import Summary from "./Summary.jsx";

export default function Quiz({}) {
  const [userAnswers, setUserAnswers] = useState([]);

  const questionIndex = userAnswers.length;
  const isQuizCompleted = userAnswers.length === QUESTIONS.length;

  const handleSelectedAnswer = useCallback(function handleSelectedAnswer(
    selectedAnswer
  ) {
    setUserAnswers((prevAnswers) => {
      return [...prevAnswers, selectedAnswer];
    });
  },
  []);

  const handleTimeoutSkipQuestion = useCallback(
    () => handleSelectedAnswer(null),
    [handleSelectedAnswer]
  );

  if (isQuizCompleted) {
    return <Summary userAnswers={userAnswers} />;
  }

  return (
    <div id="quiz">
      <Question
        index={questionIndex}
        key={questionIndex}
        onSkipAnswer={handleTimeoutSkipQuestion}
        onSelectAnswer={handleSelectedAnswer}
      />
    </div>
  );
}
