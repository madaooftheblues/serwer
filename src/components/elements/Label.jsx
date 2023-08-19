const Label = ({ htmlFor, children }) => {
  return (
    <label htmlFor={htmlFor} className="text-sm font-bold">
      {children}
    </label>
  );
};

export default Label;
