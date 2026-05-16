import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-[260px] bg-black p-6 text-white">
      <h2 className="text-2xl font-semibold">
        JSL Admin
      </h2>

      <nav className="mt-10 space-y-3">
        <NavLink
          to="/admin"
          className="block rounded-xl px-4 py-3 hover:bg-zinc-900"
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/admin/products"
          className="block rounded-xl px-4 py-3 hover:bg-zinc-900"
        >
          Products
        </NavLink>

        <NavLink
          to="/admin/orders"
          className="block rounded-xl px-4 py-3 hover:bg-zinc-900"
        >
          Orders
        </NavLink>

        <NavLink
          to="/admin/add-product"
          className="block rounded-xl px-4 py-3 hover:bg-zinc-900"
        >
          Add Product
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;