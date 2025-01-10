export const Button = ({ children, onClick }) => {
  return (
    <button className="text-md flex-1 rounded-full border bg-sky-800 p-4 text-base font-bold uppercase text-slate-100" onClick={onClick}>
      {children}
    </button>
  );
};
