import { Container } from "./Container";
import { useTrivia } from "../context/trivia-context";
import { Header } from "./Header";
import { Button } from "./Button";

export const Results = () => {
  const { dispatch, score } = useTrivia();
  return (
    <Container>
      <Header heading="Results" />
      <article className="flex flex-col gap-5">
        <p className="font-funnel text-5xl text-slate-800">You scored {score} trivia points.</p>
        <Button onClick={() => dispatch({ type: "reset" })}>Play Again?</Button>
      </article>
    </Container>
  );
};
