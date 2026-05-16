import { Outlet } from "react-router-dom";

import TopNavbar from "../components/shared/TopNavbar";
import CategoryNavbar from "../components/shared/CategoryNavbar";

import Footer from "../components/shared/Footer";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-white">
      <TopNavbar />

      <CategoryNavbar />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;