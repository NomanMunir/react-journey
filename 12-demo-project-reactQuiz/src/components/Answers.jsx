export default function Answers({}) {
  return (
    <ul id="answers">
      {shuffledAnswers.current.map((answer) => {
        const isSelected = userAnswers[userAnswers.length - 1] === answer;
        const cssClass = "";

        if (answerState === "answered" && isSelected) cssClass = "selected";

        if (
          answerState === "currect" ||
          (answerState === "wrong" && isSelected)
        )
          cssClass = answerState;

        return (
          <li key={answer} className="answer">
            <button onClick={handleSelectedAnswer} className={cssClass}>
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
