import { useEffect, useState } from "react";

import axiosInstance from "../../api/axios";

const Orders = () => {
  const [orders, setOrders] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const fetchOrders =
    async () => {
      try {
        const { data } =
          await axiosInstance.get(
            "/orders"
          );

        setOrders(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

  useEffect(() => {
    fetchOrders();
  }, []);

  const updateStatus =
    async (id, status) => {
      try {
        await axiosInstance.patch(
          `/orders/${id}`,
          {
            orderStatus: status,
          }
        );

        fetchOrders();
      } catch (error) {
        console.log(error);
      }
    };

  if (loading) {
    return (
      <div className="text-2xl">
        Loading...
      </div>
    );
  }

  return (
    <div>
      <div className="mb-10">
        <h1 className="text-5xl font-bold">
          Orders
        </h1>
      </div>

      <div className="overflow-hidden rounded-3xl bg-white shadow-lg">
        <table className="w-full">
          <thead className="bg-black text-white">
            <tr>
              <th className="px-6 py-5 text-left">
                Customer
              </th>

              <th className="px-6 py-5 text-left">
                Phone
              </th>

              <th className="px-6 py-5 text-left">
                Amount
              </th>

              <th className="px-6 py-5 text-left">
                Status
              </th>

              <th className="px-6 py-5 text-left">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => (
              <tr
                key={order._id}
                className="border-b"
              >
                <td className="px-6 py-5">
                  {
                    order.address
                      ?.fullName
                  }
                </td>

                <td className="px-6 py-5">
                  {
                    order.address
                      ?.phone
                  }
                </td>

                <td className="px-6 py-5">
                  ₹
                  {
                    order.totalAmount
                  }
                </td>

                <td className="px-6 py-5">
                  <span className="rounded-full bg-amber-100 px-4 py-2 text-sm">
                    {
                      order.orderStatus
                    }
                  </span>
                </td>

                <td className="px-6 py-5">
                  <select
                    onChange={(e) =>
                      updateStatus(
                        order._id,
                        e.target.value
                      )
                    }
                    value={
                      order.orderStatus
                    }
                    className="rounded-lg border px-3 py-2"
                  >
                    <option>
                      Pending
                    </option>

                    <option>
                      Delivered
                    </option>

                    <option>
                      Cancelled
                    </option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;