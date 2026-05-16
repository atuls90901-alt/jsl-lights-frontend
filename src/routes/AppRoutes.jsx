import {
  Route,
  Routes,
} from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import AdminLayout from "../layouts/AdminLayout";

import ProtectedRoute from "./ProtectedRoute";

import Home from "../pages/Home";
import Products from "../pages/Products";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Success from "../pages/Success";
import Login from "../pages/Login";
import ProductDetails from "../pages/ProductDetails";

import Dashboard from "../admin/pages/Dashboard";
import Orders from "../admin/pages/Orders";
import AdminProducts from "../admin/pages/Products";

import AddProduct from "../admin/pages/AddProduct";
import UserLogin from "../pages/UserLogin";
import Profile from "../pages/Profile";
import Register from "../pages/Register";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/products"
          element={<Products />}
        />

        <Route
          path="/cart"
          element={<Cart />}
        />

        <Route
          path="/checkout"
          element={<Checkout />}
        />

        <Route
          path="/success"
          element={<Success />}
        />

        <Route
          path="/products/:id"
          element={<ProductDetails />}
        />
      </Route>

      <Route
        path="/admin/login"
        element={<Login />}
      />
      
      <Route
  path="/login"
  element={<UserLogin />}
/>
<Route
  path="/register"
  element={<Register />}
/>

<Route
  path="/profile"
  element={<Profile />}
/>

      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route
          index
          element={<Dashboard />}
        />
        <Route
  path="orders"
  element={<Orders />}
/>

        <Route
  path="products"
  element={<AdminProducts />}
/>

        <Route
          path="add-product"
          element={<AddProduct />}
        />
      </Route>
    </Routes>
  );
};

export default AppRoutes;