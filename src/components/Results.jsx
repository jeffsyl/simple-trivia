import { Container } from "./Container";
import { useTrivia } from "../context/trivia-context";
import { Header } from "./Header";
import { Button } from "./Button";
import { Main } from "./Main";

export const Results = () => {
  const { dispatch, score, getQuestions } = useTrivia();

  async function handleReplay(){
    dispatch({ type: "replay" });
    getQuestions();
  }

  return (
    <Container>
      <Header heading="Results" />
      <Main>
        <p className="font-funnel text-5xl text-slate-800">You scored {score} trivia points.</p>
        <div className="flex">
          <Button onClick={() => handleReplay()}>Replay with Same Settings</Button>
          <Button onClick={() => dispatch({ type: "reset" })}>Choose New Settings</Button>
        </div>
      </Main>
    </Container>
  );
};
