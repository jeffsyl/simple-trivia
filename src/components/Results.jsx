
import { Container } from "./Container";
import { useTrivia } from "../context/trivia-context";

export const Results = () => {
  const {dispatch, score} = useTrivia();
  return (
    <Container>
      <header className="mb-5">
        <h1 className="font-funnel text-3xl text-slate-800">Results</h1>
      </header>
      <article className="flex flex-col gap-5">
        <p className="font-funnel text-5xl text-slate-800">
          You scored {score} trivia points.
        </p>
        <button className="text-md flex-1 rounded-full border bg-sky-800 p-4 text-base text-slate-100 uppercase font-bold" onClick={()=>dispatch({type:"reset"})}>
          Play Again?
        </button>
      </article>
    </Container>
  );
};
