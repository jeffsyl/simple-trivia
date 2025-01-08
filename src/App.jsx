import { Game } from "./components/Game";
import { Results } from "./components/Results";
import { Spinner } from "./components/Spinner";
import { Welcome } from "./components/welcome";
import { TriviaProvider, useTrivia } from "./context/trivia-context";

function App() {
  const { status } = useTrivia();

  console.log(status);

  if (status == "loading") {
    return <Spinner />;
  }

  if (status == "welcome") {
    return <Welcome />;
  }

  if (status == "play") {
    return <Game />;
  }

  if (status == "results") {
    return <Results />;
  }
}

export default App;
