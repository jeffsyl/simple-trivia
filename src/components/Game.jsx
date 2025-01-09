import he from 'he';

import { useState } from "react";
import { Container } from "./Container";
import { useTrivia } from "../context/trivia-context";
import { Answer } from "./Answer";

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

  function handleGuess(g) {
    dispatch({
      type: 'guessed',
      payload: g
    })
  }

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
        <p className="font-funnel text-5xl text-slate-800">{he.decode(question)}</p>
        <div className="flex flex-col gap-3">
          {
            answers.map((a) => (
              <Answer
                key={a}
                answer={a}
                correct_answer={correct_answer}
                guess={guess}
                onClick={handleGuess}
              />
            ))}
        </div>
        {!!guess && index + 1 != questions.length && <button onClick={handleNext}>Next Question</button> }
        {!!guess && index + 1 == questions.length && <button onClick={handleComplete}>View Results</button> }
      </article>
      
    </Container>
  );
};
