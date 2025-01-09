import he from 'he';

export const Question = ({question}) => {
  return (
    <p className="font-funnel text-5xl text-slate-800">{he.decode(question)}</p>
  )
}