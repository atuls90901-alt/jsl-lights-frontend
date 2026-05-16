import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import axiosInstance from "../api/axios";

const UserLogin = () => {
  const navigate = useNavigate();

  const [formData, setFormData] =
    useState({
      email: "",
      password: "",
    });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } =
        await axiosInstance.post(
          "/auth/login",
          formData
        );

      localStorage.setItem(
        "token",
        data.token
      );

      localStorage.setItem(
        "user",
        JSON.stringify(data.user)
      );

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="flex min-h-screen items-center justify-center bg-[#f7f7f7] px-5">
      <div className="w-full max-w-md rounded-[32px] bg-white p-10 shadow-xl">
        <h1 className="text-4xl font-bold">
          User Login
        </h1>

        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-5"
        >
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="h-14 w-full rounded-xl border px-5"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="h-14 w-full rounded-xl border px-5"
          />

          <button className="h-14 w-full rounded-xl bg-black text-white">
            Login
          </button>
        </form>

        <Link
          to="/register"
          className="mt-5 block text-center text-sm text-zinc-500"
        >
          Create account
        </Link>
      </div>
    </section>
  );
};

export default UserLogin;