import { Link } from "react-router-dom";

import { useCart } from "../context/CartContext";

const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

  const totalAmount =
    cartItems.reduce(
      (acc, item) =>
        acc +
        item.offerPrice * item.quantity,
      0
    );

  if (cartItems.length === 0) {
    return (
      <section className="flex min-h-[70vh] flex-col items-center justify-center px-5 text-center">
        <h1 className="text-5xl font-bold">
          Your Cart Is Empty
        </h1>

        <p className="mt-5 text-zinc-500">
          Explore luxury lighting
          collection.
        </p>

        <Link
          to="/products"
          className="mt-8 rounded-xl bg-black px-8 py-4 text-white"
        >
          Continue Shopping
        </Link>
      </section>
    );
  }

  return (
    <section className="py-20">
      <div className="mx-auto grid max-w-[1600px] gap-10 px-8 lg:grid-cols-[1fr_420px]">
        <div>
          <h1 className="mb-10 text-5xl font-bold">
            Shopping Cart
          </h1>

          <div className="space-y-6">
            {cartItems.map((item) => (
              <div
                key={item._id}
                className="flex gap-5 rounded-[30px] border border-zinc-200 p-5"
              >
                <img
                  src={`https://jsl-lights-backend.onrender.com${item.image}`}
                  alt={item.title}
                  className="h-40 w-40 rounded-2xl object-cover"
                />

                <div className="flex flex-1 flex-col justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
                      {item.category}
                    </p>

                    <h2 className="mt-2 text-2xl font-semibold">
                      {item.title}
                    </h2>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-3xl font-bold">
                        ₹
                        {item.offerPrice}
                      </p>

                      <div className="mt-4 flex items-center gap-4">
                        <button
                          onClick={() =>
                            decreaseQuantity(
                              item._id
                            )
                          }
                          className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-300 text-xl"
                        >
                          -
                        </button>

                        <span className="text-lg font-semibold">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() =>
                            increaseQuantity(
                              item._id
                            )
                          }
                          className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-300 text-xl"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <button
                      onClick={() =>
                        removeFromCart(
                          item._id
                        )
                      }
                      className="rounded-xl border border-red-200 px-5 py-3 text-red-500 transition hover:bg-red-50"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="h-fit rounded-[30px] border border-zinc-200 p-8">
          <h2 className="text-3xl font-bold">
            Order Summary
          </h2>

          <div className="mt-8 space-y-5 border-b border-zinc-200 pb-8">
            <div className="flex items-center justify-between text-lg">
              <span>
                Subtotal
              </span>

              <span>
                ₹{totalAmount}
              </span>
            </div>

            <div className="flex items-center justify-between text-lg">
              <span>
                Shipping
              </span>

              <span>
                Free
              </span>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-between">
            <span className="text-2xl font-semibold">
              Total
            </span>

            <span className="text-3xl font-bold">
              ₹{totalAmount}
            </span>
          </div>

          <Link
            to="/checkout"
            className="mt-10 flex h-14 items-center justify-center rounded-xl bg-black text-white transition hover:bg-zinc-800"
          >
            Proceed To Checkout
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Cart;