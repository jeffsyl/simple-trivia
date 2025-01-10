import { Container } from "./Container";
import { useTrivia } from "../context/trivia-context";
import { Question } from "./Question";
import { Answers } from "./Answers";
import { NextButton } from "./NextButton";
import { Header } from "./Header";
import { Main } from "./Main";

export const Game = () => {
  const { index, questions, score } = useTrivia();

  const { category, difficulty } = questions[index];
  const heading = `Question #${index + 1} of ${questions.length} :: Score: ${score}`;
  const subheading = `Genre: ${category} | Difficulty: ${difficulty}`;

  return (
    <Container>
      <Header heading={heading} subheading={subheading} />
      <Main>
        <Question />
        <Answers />
        <NextButton />
      </Main>
    </Container>
  );
};
