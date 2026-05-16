const categories = [
  {
    title: "Wall Lights",
    image:
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
  },

  {
    title: "Outdoor Lights",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
  },

  {
    title: "Pendant Lights",
    image:
      "https://images.unsplash.com/photo-1484101403633-562f891dc89a",
  },

  {
    title: "Modern Lamps",
    image:
      "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85",
  },
];

const CategoryCircles = () => {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-[1600px] px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          {categories.map((item) => (
            <div
              key={item.title}
              className="text-center"
            >
              <div className="mx-auto h-52 w-52 overflow-hidden rounded-full border-4 border-[#f2f2f2]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover"
                />
              </div>

              <h3 className="mt-5 text-xl font-medium">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryCircles;