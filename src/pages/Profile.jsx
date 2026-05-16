import { useEffect, useState } from "react";

import axiosInstance from "../api/axios";

const Profile = () => {
  const [orders, setOrders] =
    useState([]);

  const fetchOrders = async () => {
    try {
      const { data } =
        await axiosInstance.get(
          "/orders/my-orders"
        );

      setOrders(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-8">
        <h1 className="text-5xl font-bold">
          My Orders
        </h1>

        <div className="mt-10 space-y-5">
          {orders.map((order) => (
            <div
              key={order._id}
              className="rounded-3xl border p-6"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-semibold">
                    Order #{order._id.slice(-6)}
                  </h2>

                  <p className="mt-2 text-zinc-500">
                    ₹{order.totalAmount}
                  </p>
                </div>

                <span className="rounded-full bg-amber-100 px-5 py-2 text-sm">
                  {order.orderStatus}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Profile;