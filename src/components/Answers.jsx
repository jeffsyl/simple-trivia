import { useTrivia } from "../context/trivia-context";
import { Answer } from "./Answer";

export const Answers = () => {
  const { index, questions } = useTrivia();
  const { correct_answer, incorrect_answers } = questions[index];
  const answers = [...incorrect_answers, correct_answer];
  return (
    <div className="flex flex-col gap-3">
      {answers.map((a) => (
        <Answer key={a} answer={a} correct_answer={correct_answer} />
      ))}
    </div>
  );
};
