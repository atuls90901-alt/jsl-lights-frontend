import {
  useEffect,
  useState,
} from "react";

import axiosInstance from "../../api/axios";

import StatsCard from "../components/StatsCard";

const Dashboard = () => {
  const [stats, setStats] =
    useState(null);

  useEffect(() => {
    const fetchStats =
      async () => {
        try {
          const { data } =
            await axiosInstance.get(
              "/orders/stats/dashboard",
              {
                headers: {
                  Authorization: `Bearer ${localStorage.getItem(
                    "token"
                  )}`,
                },
              }
            );

          setStats(data);
        } catch (error) {
          console.log(error);
        }
      };

    fetchStats();
  }, []);

  if (!stats) {
    return (
      <div className="py-20 text-center text-2xl">
        Loading Dashboard...
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-5xl font-bold">
        Dashboard
      </h1>

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <StatsCard
          title="Revenue"
          value={`₹${stats.revenue}`}
        />

        <StatsCard
          title="Orders"
          value={stats.totalOrders}
        />

        <StatsCard
          title="Products"
          value={stats.products}
        />

        <StatsCard
          title="Cancelled"
          value={
            stats.cancelledOrders
          }
        />
      </div>
    </div>
  );
};

export default Dashboard;