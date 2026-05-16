import { Link } from "react-router-dom";

import categories from "../../utils/categories";

const CategoryNavbar = () => {
  return (
    <div className="border-b bg-white">
      <div className="mx-auto flex max-w-[1600px] items-center gap-10 overflow-x-auto px-8 py-5 whitespace-nowrap">
        {categories.map((category) => (
          <Link
            key={category}
            to={`/products?category=${category}`}
            className="text-sm transition hover:text-amber-600"
          >
            {category}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryNavbar;