import { useTrivia } from "../context/trivia-context";
import { Button } from "./Button";

export const NextButton = () => {
  const { guess, index, questions, dispatch } = useTrivia();
  const guessed = guess !== null;
  const numQuestions = questions.length;
  return (
    <>
      {guessed && index + 1 != numQuestions && (
        <Button
          onClick={() =>
            dispatch({
              type: "increment",
            })
          }
        >
          Next Question
        </Button>
      )}
      {guessed && index + 1 == numQuestions && (
        <Button
          onClick={() =>
            dispatch({
              type: "complete",
            })
          }
        >
          View Results
        </Button>
      )}
    </>
  );
};
