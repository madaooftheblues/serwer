const Button = ({ children, className, onClick }) => {
  return (
    <button className={`h-10 w-20 rounded-md ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
