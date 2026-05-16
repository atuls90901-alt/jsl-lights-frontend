import { Link } from "react-router-dom";

const ProductCard = ({
  product,
}) => {
  return (
    <Link
      to={`/products/${product._id}`}
      className="group block"
    >
      <div className="overflow-hidden rounded-[30px] bg-[#f5f5f5]">
        <img
          src={`http://localhost:5000${product.image}`}
          alt={product.title}
          loading="lazy"
          className="h-[360px] w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="mt-5">
        <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
          {product.category}
        </p>

        <h3 className="mt-2 text-xl font-semibold">
          {product.title}
        </h3>

        <div className="mt-4 flex items-center gap-3">
          <span className="text-2xl font-bold">
            ₹{product.offerPrice}
          </span>

          <span className="text-zinc-400 line-through">
            ₹{product.price}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;