const Input = ({
  id,
  placeholder,
  type,
  className,
  min,
  max,
  minLength,
  maxLength,
  value,
  onChange
}) => {
  return (
    <input
      id={id}
      type={type}
      className={`w-full block mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 rounded-md sm:text-md focus:ring-1 ${className}`}
      placeholder={placeholder}
      min={min}
      max={max}
      minLength={minLength}
      maxLength={maxLength}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
