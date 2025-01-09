import { Container } from "./Container";
import { useTrivia } from "../context/trivia-context";
import { Question } from './Question';
import { Answers } from "./Answers";

export const Game = () => {
  const { index, questions, guess, score, dispatch } = useTrivia();

  const {
    category,
    question,
    difficulty,
    correct_answer,
    incorrect_answers,
  } = questions[index];

  const answers = [...incorrect_answers, correct_answer];
  

  function handleNext(){
    dispatch({
      type: 'increment'
    })
  }
  
  function handleComplete(){
    dispatch({
      type: 'complete'
    })
  }

  return (
    <Container>
      <header className="mb-5">
        <h1 className="font-funnel text-3xl text-slate-800">Question #{index + 1} of {questions.length} :: Score: {score}</h1>
        <p className="text-sm text-slate-500">
          Genre: {category} | Difficulty: {difficulty}
        </p>
      </header>
      <article className="flex flex-col gap-5">
        <Question question={question} />
        <Answers answers={answers} correct_answer={correct_answer} />


        {!!guess && index + 1 != questions.length && <button onClick={handleNext}>Next Question</button> }
        {!!guess && index + 1 == questions.length && <button onClick={handleComplete}>View Results</button> }

      </article>
      
    </Container>
  );
};
