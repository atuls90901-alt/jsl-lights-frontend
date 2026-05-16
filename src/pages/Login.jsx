import { useState } from "react";
import { useNavigate } from "react-router-dom";

import toast from "react-hot-toast";

import Container from "../components/shared/Container";
import Input from "../components/ui/Input";

import { adminLogin } from "../api/auth.api";

import { useAuth } from "../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();

  const { login } = useAuth();

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const payload = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    try {
      setLoading(true);

      const data = await adminLogin(payload);

      login(data);

      toast.success("Login successful");

      navigate("/admin");
    } catch (error) {
      toast.error("Invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex min-h-[80vh] items-center justify-center px-5">
      <div className="w-full max-w-md rounded-[32px] border border-zinc-100 p-10 shadow-xl">
        <h1 className="text-4xl font-bold">
          Admin Login
        </h1>

        <form
          onSubmit={handleSubmit}
          className="mt-10 space-y-5"
        >
          <Input
            label="Email"
            name="email"
            type="email"
            required
          />

          <Input
            label="Password"
            name="password"
            type="password"
            required
          />

          <button className="h-14 w-full rounded-xl bg-black text-white">
            {loading
              ? "Please wait..."
              : "Login"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Login;