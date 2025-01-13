import { useTrivia } from "../context/trivia-context";
import { Answer } from "./Answer";

export const Answers = () => {
  const { answers, correctAnswer } = useTrivia();
  return (
    <div className="flex flex-col gap-3">
      {answers.map((a) => (
        <Answer key={a} answer={a} correctAnswer={correctAnswer} />
      ))}
    </div>
  );
};
