import { useNavigate } from "react-router-dom";

import toast from "react-hot-toast";

import Container from "../components/shared/Container";

import Input from "../components/ui/Input";

import { useCart } from "../context/CartContext";

import axiosInstance from "../api/axios";

const Checkout = () => {
  const navigate = useNavigate();

  const {
    cartItems,
    totalAmount,
    setCartItems,
  } = useCart();

  const shipping = 0;

  const finalTotal =
    totalAmount + shipping;

  const handleSubmit =
    async (e) => {
      e.preventDefault();

      const formData =
        new FormData(e.target);

      const address = {
        fullName:
          formData.get(
            "fullName"
          ),

        phone:
          formData.get(
            "phone"
          ),

        city:
          formData.get("city"),

        state:
          formData.get(
            "state"
          ),

        pincode:
          formData.get(
            "pincode"
          ),

        addressLine:
          formData.get(
            "addressLine"
          ),
      };

      try {
        await axiosInstance.post(
          "/orders",
          {
            products:
              cartItems,

            address,

            totalAmount:
              finalTotal,
          }
        );

        localStorage.removeItem(
          "cart"
        );

        setCartItems([]);

        toast.success(
          "Order placed successfully"
        );

        navigate("/success");
      } catch (error) {
        toast.error(
          "Something went wrong"
        );
      }
    };

  return (
    <section className="bg-[#fafafa] py-20">
      <Container>
        <h1 className="text-5xl font-bold">
          Checkout
        </h1>

        <form
          onSubmit={handleSubmit}
          className="mt-14 grid gap-12 lg:grid-cols-[1fr_420px]"
        >
          <div className="rounded-[32px] bg-white p-8 shadow-sm">
            <h2 className="text-3xl font-semibold">
              Shipping Details
            </h2>

            <div className="mt-8 space-y-5">
              <Input
                label="Full Name"
                name="fullName"
                required
              />

              <Input
                label="Phone"
                name="phone"
                required
              />

              <Input
                label="City"
                name="city"
                required
              />

              <Input
                label="State"
                name="state"
                required
              />

              <Input
                label="Pincode"
                name="pincode"
                required
              />

              <Input
                label="Address"
                name="addressLine"
                required
              />
            </div>
          </div>

          <div className="h-fit rounded-[32px] bg-black p-8 text-white">
            <h2 className="text-3xl font-semibold">
              Order Summary
            </h2>

            <div className="mt-8 space-y-5 border-b border-zinc-700 pb-8">
              <div className="flex items-center justify-between">
                <span>
                  Items
                </span>

                <span>
                  {
                    cartItems.length
                  }
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span>
                  Subtotal
                </span>

                <span>
                  ₹
                  {totalAmount}
                </span>
              </div>

              <div className="flex items-center justify-between">
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

              <span className="text-4xl font-bold text-amber-400">
                ₹
                {finalTotal}
              </span>
            </div>

            <button className="mt-10 h-14 w-full rounded-xl bg-amber-500 font-semibold text-black transition hover:bg-amber-400">
              Place Order
            </button>
          </div>
        </form>
      </Container>
    </section>
  );
};

export default Checkout;