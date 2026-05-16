import ProductCard from "../product/ProductCard";

import { useProducts } from "../../context/ProductContext";

const TrendingProducts = () => {
  const { products } = useProducts();

  return (
    <section className="bg-[#fafafa] py-24">
      <div className="mx-auto max-w-7xl px-5">
        <div className="mb-14">
          <p className="text-sm uppercase tracking-[0.3em] text-amber-600">
            Trending Products
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            Best Selling Lights
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.slice(0, 8).map((product) => (
            <ProductCard
              key={product._id}
              product={product}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingProducts;