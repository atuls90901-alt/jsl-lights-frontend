import {
  Link,
  useNavigate,
} from "react-router-dom";

import {
  FiHeart,
  FiSearch,
  FiShoppingBag,
  FiUser,
} from "react-icons/fi";

import categories from "../../utils/categories";

import { useCart } from "../../context/CartContext";

const TopNavbar = () => {
  const navigate =
    useNavigate();

  const { cartItems } =
    useCart();

  return (
    <header className="border-b bg-[#ead2a7]">
      <div className="mx-auto flex h-24 max-w-[1600px] items-center justify-between px-8">
        <Link
          to="/"
          className="text-4xl font-bold"
        >
          JSL Lights
        </Link>

        <nav className="hidden items-center gap-10 xl:flex">
          <Link
            to="/products"
            className="transition hover:text-amber-700"
          >
            Indoor Lights
          </Link>

          <Link
            to="/products"
            className="transition hover:text-amber-700"
          >
            Outdoor Lights
          </Link>
        </nav>

        <div className="hidden h-12 w-[650px] items-center overflow-hidden rounded-md bg-white lg:flex">
          <select
            onChange={(e) => {
              if (
                e.target.value
              ) {
                navigate(
                  `/products?category=${e.target.value}`
                );
              } else {
                navigate(
                  "/products"
                );
              }
            }}
            className="h-full border-r px-5 outline-none"
          >
            <option value="">
              All Categories
            </option>

            {categories.map(
              (category) => (
                <option
                  key={category}
                  value={category}
                >
                  {category}
                </option>
              )
            )}
          </select>

          <input
            type="text"
            placeholder="Search Products..."
            className="h-full flex-1 px-5 outline-none"
          />

          <button className="px-5">
            <FiSearch size={22} />
          </button>
        </div>

        <div className="flex items-center gap-6">
      <Link
  to="/login"
  className="transition hover:text-amber-700"
>
  <FiUser size={22} />
</Link>

          <button>
            <FiHeart size={22} />
          </button>

          <Link
            to="/cart"
            className="relative"
          >
            <FiShoppingBag
              size={22}
            />

            <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-amber-500 text-xs text-white">
              {
                cartItems.length
              }
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default TopNavbar;