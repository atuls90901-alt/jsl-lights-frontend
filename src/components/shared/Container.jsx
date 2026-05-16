const Container = ({
  children,
  className = "",
}) => {
  return (
    <div
      className={`mx-auto w-full max-w-[1600px] px-8 ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;