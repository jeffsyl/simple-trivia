import he from 'he';
import { useTrivia } from '../context/trivia-context';

export const Question = () => {
  const { questions, index } = useTrivia();
  const { question } = questions[index];
  return (
    <p className="font-funnel text-5xl text-slate-800">{he.decode(question)}</p>
  )
}