export const Form = ({ children, onSubmit }) => {
  return (
    <form className="flex flex-col gap-5" onSubmit={onSubmit}>
      {children}
    </form>
  );
};
