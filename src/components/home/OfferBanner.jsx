const OfferBanner = () => {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-5">
        <div className="rounded-[40px] bg-black px-10 py-24 text-white">
          <p className="text-sm uppercase tracking-[0.3em] text-amber-400">
            Exclusive Offer
          </p>

          <h2 className="mt-5 text-5xl font-bold">
            Flat 40% Off On Luxury Lights
          </h2>

          <button className="mt-8 rounded-xl bg-amber-500 px-8 py-4 text-black">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default OfferBanner;