const Box = ({ children, className }) => {
  return (
    <div
      className={`border-2 border-gray-100 flex items-center p-5 ${className}`}
    >
      {children}
    </div>
  );
};

export default Box;
