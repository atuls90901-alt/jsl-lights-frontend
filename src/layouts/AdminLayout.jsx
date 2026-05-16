import { Outlet } from "react-router-dom";

import Sidebar from "../admin/components/Sidebar";

const AdminLayout = () => {
  return (
    <div className="flex min-h-screen bg-[#f5f5f5]">
      <Sidebar />

      <main className="flex-1 p-8">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;  