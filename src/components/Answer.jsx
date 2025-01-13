import he from "he";
import { useTrivia } from "../context/trivia-context";

export const Answer = ({ answer, correctAnswer }) => {
  const { dispatch, guess } = useTrivia();

  const guessed = guess !== null;

  const baseStyle =
    "text-md flex-1 rounded-lg border p-4 text-base text-slate-100 uppercase font-semibold text-left transition-all duration-200";

  const dynamicStyle = guessed
    ? correctAnswer == answer
      ? "bg-green-700 hover:bg-green-600 focus:ring-2 focus:ring-green-500"
      : "bg-red-700 hover:bg-red-600 focus:ring-2 focus:ring-red-500"
    : "bg-sky-800 hover:bg-sky-700 focus:ring-2 focus:ring-sky-500";

  const guessStyle = guess == answer ? "ml-10" : "";

  return (
    <button
      disabled={guess}
      key={answer}
      className={`${baseStyle} ${dynamicStyle} ${guessStyle}`}
      onClick={() =>
        dispatch({
          type: "guessed",
          payload: answer,
        })
      }
    >
      {he.decode(answer)}
    </button>
  );
};
