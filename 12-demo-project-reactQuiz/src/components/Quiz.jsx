import { useCallback, useRef, useState } from "react";
import QUESTIONS from "../questions.js";
import quizCompletedImg from "../assets/quiz-complete.png";
import QuestionTimer from "./QuestionTimer.jsx";

export default function Quiz({}) {
  const shuffledAnswers = useRef();

  const [userAnswers, setUserAnswers] = useState([]);
  const [answerState, setAnswerState] = useState("");

  const questionIndex =
    answerState === "" ? userAnswers.length : userAnswers.length - 1;
  const isQuizCompleted = userAnswers.length === QUESTIONS.length;

  const handleSelectedAnswer = useCallback(
    function handleSelectedAnswer(selectedAnswer) {
      setAnswerState("answered");
      setUserAnswers((prevAnswers) => {
        return [...prevAnswers, selectedAnswer];
      });

      setTimeout(() => {
        if (selectedAnswer === QUESTIONS[questionIndex].answers[0])
          setAnswerState("correct");
        else setAnswerState("wrong");

        setTimeout(() => {
          setAnswerState("");
        }, 2000);
      }, 1000);
    },
    [questionIndex]
  );

  const handleTimeoutSkipQuestion = useCallback(
    () => handleSelectedAnswer(null),
    [handleSelectedAnswer]
  );

  if (isQuizCompleted) {
    return (
      <div id="summary">
        <img src={quizCompletedImg} alt="Quiz compeleted image" />
        <h2>Quiz Completed</h2>
      </div>
    );
  }

  shuffledAnswers.current = [...QUESTIONS[questionIndex].answers];
  shuffledAnswers.current.sort(() => Math.random() - 0.5);

  return (
    <div id="quiz">
      <div id="question">
        <QuestionTimer
          key={questionIndex}
          timeout={10000}
          onTimeout={handleTimeoutSkipQuestion}
        />
        <h2>{QUESTIONS[questionIndex].text}</h2>
      </div>
    </div>
  );
}
