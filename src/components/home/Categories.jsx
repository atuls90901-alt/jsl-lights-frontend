const Categories = () => {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="overflow-hidden rounded-3xl">
            <img
              src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4"
              alt=""
              className="h-[400px] w-full object-cover"
            />
          </div>

          <div className="overflow-hidden rounded-3xl">
            <img
              src="https://images.unsplash.com/photo-1484101403633-562f891dc89a"
              alt=""
              className="h-[400px] w-full object-cover"
            />
          </div>

          <div className="overflow-hidden rounded-3xl">
            <img
              src="https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85"
              alt=""
              className="h-[400px] w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;