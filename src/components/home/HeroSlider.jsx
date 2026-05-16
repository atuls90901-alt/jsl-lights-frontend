const HeroSlider = () => {
  return (
    <section className="relative h-[720px] overflow-hidden bg-[#ead2a7]">
      <div className="mx-auto grid h-full max-w-[1600px] items-center gap-10 px-10 lg:grid-cols-2">
        <div>
          <p className="text-sm uppercase tracking-[0.4em] text-zinc-700">
            Premium Decorative Lights
          </p>

          <h1 className="mt-6 text-6xl font-bold leading-tight text-black lg:text-7xl">
            Luxury Lighting For Elegant Interiors
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-700">
            Explore premium chandeliers,
            wall lights and designer lamps
            crafted for modern luxury homes.
          </p>

          <button className="mt-10 rounded-md bg-black px-10 py-4 text-lg text-white transition hover:bg-zinc-800">
            Explore Collection
          </button>
        </div>

        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
            alt=""
            className="h-[620px] w-full rounded-[40px] object-cover shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;