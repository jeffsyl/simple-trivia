import { Answer } from "./Answer";

export const Answers = ({ answers, correct_answer }) => {
  return (
    <div className="flex flex-col gap-3">
      {answers.map((a) => (
        <Answer
          key={a}
          answer={a}
          correct_answer={correct_answer}
        />
      ))}
    </div>
  );
};
