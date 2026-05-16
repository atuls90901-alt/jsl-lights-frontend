import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto grid max-w-[1600px] gap-14 px-8 py-20 md:grid-cols-4">
        <div>
          <h2 className="text-3xl font-bold tracking-wide">
            JSL Lights
          </h2>

          <p className="mt-5 max-w-sm leading-7 text-zinc-400">
            Premium decorative lighting
            crafted for luxury interiors,
            elegant homes and modern spaces.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold">
            Quick Links
          </h3>

          <div className="mt-5 space-y-4 text-zinc-400">
            <Link
              to="/"
              className="block hover:text-amber-400"
            >
              Home
            </Link>

            <Link
              to="/products"
              className="block hover:text-amber-400"
            >
              Shop
            </Link>

            <Link
              to="/cart"
              className="block hover:text-amber-400"
            >
              Cart
            </Link>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold">
            Categories
          </h3>

          <div className="mt-5 space-y-4 text-zinc-400">
            <p>Indoor Lights</p>

            <p>Outdoor Lights</p>

            <p>LED Panels</p>

            <p>Wall Lights</p>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold">
            Contact
          </h3>

          <div className="mt-5 space-y-4 text-zinc-400">
            <p>support@jsllights.com</p>

            <p>+91 9876543210</p>

            <p>Delhi, India</p>
          </div>
        </div>
      </div>

      <div className="border-t border-zinc-800 py-6 text-center text-sm text-zinc-500">
        © 2026 JSL Lights. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;