import {
  useEffect,
  useState,
} from "react";

import { useParams } from "react-router-dom";

import axiosInstance from "../api/axios";

import { useCart } from "../context/CartContext";

const ProductDetails = () => {
  const [product, setProduct] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  const { id } = useParams();

  const { addToCart } =
    useCart();

  const fetchProduct =
    async () => {
      try {
        const { data } =
          await axiosInstance.get(
            `/products/${id}`
          );

        setProduct(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="py-32 text-center text-3xl">
        Loading...
      </div>
    );
  }

  if (!product) {
    return (
      <div className="py-32 text-center text-3xl">
        Product not found
      </div>
    );
  }

  return (
    <section className="py-20">
      <div className="mx-auto grid max-w-[1600px] gap-16 px-8 lg:grid-cols-2">
        <div className="overflow-hidden rounded-[40px] bg-[#f5f5f5]">
          <img
            src={`http://localhost:5000${product.image}`}
            alt={product.title}
            className="h-[700px] w-full object-cover"
          />
        </div>

        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-amber-600">
            {product.category}
          </p>

          <h1 className="mt-5 text-6xl font-bold leading-tight">
            {product.title}
          </h1>

          <div className="mt-8 flex items-center gap-4">
            <span className="text-4xl font-bold">
              ₹{product.offerPrice}
            </span>

            <span className="text-2xl text-zinc-400 line-through">
              ₹{product.price}
            </span>
          </div>

          <p className="mt-10 max-w-2xl text-lg leading-8 text-zinc-600">
            {product.description}
          </p>

          <button
            onClick={() =>
              addToCart(product)
            }
            className="mt-10 rounded-xl bg-black px-10 py-4 text-white transition hover:bg-zinc-800"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;