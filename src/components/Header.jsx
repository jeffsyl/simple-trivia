export const Header = ({ heading, subheading }) => {
  return (
    <header className="mb-5">
      {heading && <h1 className="font-funnel text-3xl text-slate-800">{heading}</h1>}
      {subheading && <p className="text-sm text-slate-500">{subheading}</p>}
    </header>
  );
};
