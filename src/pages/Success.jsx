import { Link } from "react-router-dom";

const Success = () => {
  return (
    <section className="flex min-h-[80vh] items-center justify-center px-5">
      <div className="max-w-xl text-center">
        <h1 className="text-6xl font-bold">
          Order Successful
        </h1>

        <p className="mt-6 text-lg leading-8 text-zinc-600">
          Thank you for shopping with JSL
          Lights. Your order has been placed
          successfully.
        </p>

        <Link
          to="/products"
          className="mt-10 inline-flex rounded-xl bg-black px-8 py-4 text-white"
        >
          Continue Shopping
        </Link>
      </div>
    </section>
  );
};

export default Success;