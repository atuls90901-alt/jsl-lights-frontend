const Input = ({
  label,
  className,
  ...props
}) => {
  return (
    <div>
      {label && (
        <label className="mb-2 block text-sm font-medium text-zinc-700">
          {label}
        </label>
      )}

      <input
        className={`h-14 w-full rounded-xl border border-zinc-200 px-5 outline-none transition focus:border-black ${className}`}
        {...props}
      />
    </div>
  );
};

export default Input;