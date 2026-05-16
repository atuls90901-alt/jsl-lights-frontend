const StatsCard = ({
  title,
  value,
}) => {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-lg">
      <p className="text-sm text-zinc-500">
        {title}
      </p>

      <h2 className="mt-3 text-4xl font-bold">
        {value}
      </h2>
    </div>
  );
};

export default StatsCard;