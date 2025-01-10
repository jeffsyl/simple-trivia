export const Input = ({ label, type, name, value, onChange, ...rest }) => {
  return (
    <div className="flex items-center gap-3">
      {label && name && (
        <label htmlFor={name} className="font-funnel text-sm uppercase tracking-wide text-slate-500">
          {label}
        </label>
      )}
      {type == "select" && (
        <select
          name={name}
          className="text-md flex-1 rounded-full border bg-slate-300 p-4 text-base text-slate-600"
          value={value}
          onChange={onChange}
        >
          {rest.options.map((option) => {
            return (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            );
          })}
        </select>
      )}

      {type == "number" && (
        <input
          type="number"
          name={name}
          min={rest.min}
          max={rest.max}
          value={value}
          onChange={onChange}
          className="text-md flex-1 rounded-full border bg-slate-300 p-4 text-base text-slate-600"
        />
      )}
      
    </div>
  );
};
