import { useMemo } from "react";

import {
  useSearchParams,
} from "react-router-dom";

import ProductCard from "../components/product/ProductCard";

import { useProducts } from "../context/ProductContext";

const Products = () => {
  const { products, loading } =
    useProducts();

  const [searchParams] =
    useSearchParams();

  const selectedCategory =
    searchParams.get("category");

  const filteredProducts =
    useMemo(() => {
      if (!selectedCategory) {
        return products;
      }

      return products.filter(
        (product) =>
          product.category ===
          selectedCategory
      );
    }, [
      products,
      selectedCategory,
    ]);

  if (loading) {
    return (
      <div className="py-32 text-center text-3xl">
        Loading...
      </div>
    );
  }

  return (
    <section className="py-20">
      <div className="mx-auto max-w-[1600px] px-8">
        <div className="mb-14">
          <p className="text-sm uppercase tracking-[0.3em] text-amber-600">
            Luxury Collection
          </p>

          <h1 className="mt-4 text-5xl font-bold">
            {selectedCategory ||
              "Premium Lighting Products"}
          </h1>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {filteredProducts.map(
            (product) => (
              <ProductCard
                key={product._id}
                product={product}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Products;