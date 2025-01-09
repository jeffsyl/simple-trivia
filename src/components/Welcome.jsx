import { useState } from "react";
import { Container } from "./Container";
import { useTrivia } from "../context/trivia-context";

export const Welcome = () => {
  const { dispatch, genre, difficulty, type, numQuestions, getQuestions } = useTrivia();

  function handleChange(e) {
    dispatch({
      type: "setPreferences",
      payload: {
        name: e.target.name,
        value: e.target.value,
      },
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    getQuestions();
  }

  return (
    <Container>
      <header className="mb-5">
        <h1 className="font-funnel text-3xl text-slate-800">
          Welcome to Simple Trivia
        </h1>
        <p className="text-sm text-slate-500">
          Select your settings below to get started.
        </p>
      </header>
      <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
        <div className="flex items-center gap-3">
          <label
            htmlFor="genre"
            className="font-funnel text-sm uppercase tracking-wide text-slate-500"
          >
            Genre
          </label>
          <select
            name="genre"
            className="text-md flex-1 rounded-full border bg-slate-300 p-4 text-base text-slate-600"
            value={genre}
            onChange={(e) => handleChange(e)}
          >
            <option value="any">Any Category</option>
            <option value="9">General Knowledge</option>
            <option value="10">Entertainment: Books</option>
            <option value="11">Entertainment: Film</option>
            <option value="12">Entertainment: Music</option>
            <option value="13">Entertainment: Musicals &amp; Theatres</option>
            <option value="14">Entertainment: Television</option>
            <option value="15">Entertainment: Video Games</option>
            <option value="16">Entertainment: Board Games</option>
            <option value="17">Science &amp; Nature</option>
            <option value="18">Science: Computers</option>
            <option value="19">Science: Mathematics</option>
            <option value="20">Mythology</option>
            <option value="21">Sports</option>
            <option value="22">Geography</option>
            <option value="23">History</option>
            <option value="24">Politics</option>
            <option value="25">Art</option>
            <option value="26">Celebrities</option>
            <option value="27">Animals</option>
            <option value="28">Vehicles</option>
            <option value="29">Entertainment: Comics</option>
            <option value="30">Science: Gadgets</option>
            <option value="31">
              Entertainment: Japanese Anime &amp; Manga
            </option>
            <option value="32">Entertainment: Cartoon &amp; Animations</option>
          </select>
        </div>

        <div className="flex items-center gap-3">
          <label
            htmlFor="difficulty"
            className="font-funnel text-sm uppercase tracking-wide text-slate-500"
          >
            Difficulty
          </label>
          <select
            name="difficulty"
            value={difficulty}
            onChange={(e) => handleChange(e)}
            className="text-md flex-1 rounded-full border bg-slate-300 p-4 text-base text-slate-600"
          >
            <option value="any">Any Difficulty</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>

        <div className="flex items-center gap-3">
          <label
            htmlFor="type"
            className="font-funnel text-sm uppercase tracking-wide text-slate-500"
          >
            Type
          </label>
          <select
            name="type"
            value={type}
            onChange={(e) => handleChange(e)}
            className="text-md flex-1 rounded-full border bg-slate-300 p-4 text-base text-slate-600"
          >
            <option value="any">Any Type</option>
            <option value="multiple">Multiple Choice</option>
            <option value="boolean">True / False</option>
          </select>
        </div>

        <div className="flex items-center gap-3">
          <label
            htmlFor="numQuestions"
            className="font-funnel text-sm uppercase tracking-wide text-slate-500"
          >
            Number of Questions
          </label>
          <input
            type="number"
            name="numQuestions"
            min="1"
            max="50"
            value={numQuestions}
            onChange={(e) => handleChange(e)}
            className="text-md flex-1 rounded-full border bg-slate-300 p-4 text-base text-slate-600"
          />
        </div>
        <button className="text-md flex-1 rounded-full border bg-sky-800 p-4 text-base font-bold uppercase text-slate-100">
          Let's Play Trivia
        </button>
      </form>
    </Container>
  );
};
