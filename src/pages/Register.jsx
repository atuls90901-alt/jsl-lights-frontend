import { useState } from "react";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import axiosInstance from "../api/axios";

const Register = () => {
  const navigate =
    useNavigate();

  const [formData, setFormData] =
    useState({
      name: "",
      email: "",
      password: "",
    });

  const [loading, setLoading] =
    useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = async (
    e
  ) => {
    e.preventDefault();

    try {
      setLoading(true);

      const { data } =
        await axiosInstance.post(
          "/auth/register",
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

      navigate("/profile");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex min-h-screen items-center justify-center bg-[#f7f7f7] px-5">
      <div className="w-full max-w-md rounded-[32px] bg-white p-10 shadow-xl">
        <h1 className="text-4xl font-bold">
          Create Account
        </h1>

        <p className="mt-3 text-zinc-500">
          Join premium lighting
          experience.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-5"
        >
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            className="h-14 w-full rounded-xl border border-zinc-300 px-5 outline-none focus:border-black"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
            className="h-14 w-full rounded-xl border border-zinc-300 px-5 outline-none focus:border-black"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="h-14 w-full rounded-xl border border-zinc-300 px-5 outline-none focus:border-black"
          />

          <button className="h-14 w-full rounded-xl bg-black text-white transition hover:bg-zinc-800">
            {loading
              ? "Creating..."
              : "Create Account"}
          </button>
        </form>

        <Link
          to="/login"
          className="mt-6 block text-center text-sm text-zinc-500 hover:text-black"
        >
          Already have an account?
        </Link>
      </div>
    </section>
  );
};

export default Register;