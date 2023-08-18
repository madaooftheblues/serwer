const Button = ({ children, className }) => {
  return (
    <button className={`h-10 w-20 rounded-md ${className}`}>{children}</button>
  );
};

export default Button;
