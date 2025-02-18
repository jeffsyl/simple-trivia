import { createContext, useContext, useReducer } from "react";
import { prepareAnswers } from "../utils/helpers";

const TriviaContext = createContext();

const initialState = {
  questions: [],
  answers: [],
  correctAnswer: null,
  guess: null,
  index: 0,
  score: 0,
  status: "welcome",
  error: "",
  genre: "any",
  difficulty: "any",
  type: "any",
  numQuestions: 10,
};

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, status: "loading" };
    case "setPreferences":
      return { ...state, [action.payload.name]: action.payload.value };
    case "loaded": {
      const { correct_answer: correctAnswer, incorrect_answers: incorrectAnswers, type } = action.payload.results[0];
      const answers = prepareAnswers(correctAnswer, incorrectAnswers, type);
      return {
        ...state,
        status: "play",
        questions: action.payload.results,
        answers,
        correctAnswer,
      };
    }
    case "guessed": {
      const isCorrect = action.payload === state.correctAnswer;
      return {
        ...state,
        guess: action.payload,
        score: isCorrect ? state.score + 1 : state.score,
      };
    }
    case "increment": {
      const { correct_answer: correctAnswer, incorrect_answers: incorrectAnswers, type } = state.questions[state.index + 1];
      const answers = prepareAnswers(correctAnswer, incorrectAnswers, type);
      return {
        ...state,
        guess: null,
        index: state.index + 1,
        answers,
        correctAnswer,
      };
    }
    case "complete":
      return {
        ...state,
        status: "results",
      };
    case "reset":
      return {
        ...initialState,
      };
    case "replay":
      return {
        ...state,
        index: 0,
        score: 0,
        guess: null,
      };
    default:
      throw new Error("Unknown action type");
  }
}

function TriviaProvider({ children }) {
  const [{ questions, answers, correctAnswer, guess, index, score, status, error, genre, difficulty, type, numQuestions }, dispatch] = useReducer(
    reducer,
    initialState,
  );

  async function getQuestions() {
    dispatch({ type: "loading" });
    try {
      let baseUrl = "https://opentdb.com/api.php";
      let api = new URL(baseUrl);
      if (numQuestions) {
        api.searchParams.append("amount", numQuestions);
      }
      if (genre !== "any") {
        api.searchParams.append("category", genre);
      }
      if (difficulty !== "any") {
        api.searchParams.append("difficulty", difficulty);
      }
      if (type !== "any") {
        api.searchParams.append("type", type);
      }

      const res = await fetch(api.href);
      const data = await res.json();
      dispatch({ type: "loaded", payload: data });
    } catch {
      dispatch({
        type: "rejected",
        payload: "There was an error loading the questions...",
      });
    }
  }

  return (
    <TriviaContext.Provider
      value={{
        questions,
        answers,
        correctAnswer,
        guess,
        getQuestions,
        index,
        score,
        status,
        error,
        dispatch,
        genre,
        difficulty,
        type,
        numQuestions,
      }}
    >
      {children}
    </TriviaContext.Provider>
  );
}

function useTrivia() {
  const context = useContext(TriviaContext);
  if (context === undefined) throw new Error("TriviaContext was used outside the TriviaProvider");
  return context;
}

export { TriviaProvider, useTrivia };
