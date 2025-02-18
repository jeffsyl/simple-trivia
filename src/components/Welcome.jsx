import { categories, difficulties, types, numQuestionsDef } from "../utils/settings";

import { Container } from "./Container";
import { useTrivia } from "../context/trivia-context";
import { Header } from "./Header";
import { Button } from "./Button";
import { Input } from "./Input";
import { Form } from "./Form";

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
      <Header heading="Welcome to Simple Trivia" subheading="Select your settings below to get started." />
      <Form onSubmit={handleSubmit}>
        <Input label="Genre" name="genre" type="select" value={genre} options={categories} onChange={handleChange} />
        <Input label="Difficulty" name="difficulty" type="select" value={difficulty} options={difficulties} onChange={handleChange} />
        <Input label="Types" name="type" type="select" value={type} options={types} onChange={handleChange} />
        <Input label="Number of Questions" name="numQuestions" type="number" value={numQuestions} onChange={handleChange} min={numQuestionsDef.min} max={numQuestionsDef.max} />
        <Button>Let's Play Trivia</Button>
      </Form>
    </Container>
  );
};
