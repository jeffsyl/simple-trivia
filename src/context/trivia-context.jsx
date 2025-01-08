import { createContext, useContext, useReducer } from "react";

const TriviaContext = createContext();

const initialState = {
  questions: [],
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
    case "loaded":
      return {
        ...state,
        status: "play",
        questions: action.payload.results,
      };
    case "guessed":
      return {
        ...state,
        guess: action.payload,
      };
    case "increment": {
      const isCorrect =
        state.guess === state.questions[state.index].correct_answer;
      return {
        ...state,
        guess: null,
        score: isCorrect ? state.score + 1 : state.score,
        index: state.index + 1,
      };
    }
    case "complete":
      return {
        ...state,
        status: "results",
      };
    case "reset":
      return{
        ...initialState
      }
    default:
      throw new Error("Unknown action type");
  }
}

function TriviaProvider({ children }) {
  const [
    {
      questions,
      guess,
      index,
      score,
      status,
      error,
      genre,
      difficulty,
      type,
      numQuestions,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

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
      console.log(data);
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
  if (context === undefined)
    throw new Error("TriviaContext was used outside the TriviaProvider");
  return context;
}

export { TriviaProvider, useTrivia };
