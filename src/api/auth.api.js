import axiosInstance from "./axios";

export const adminLogin =
  async (payload) => {
    const { data } =
      await axiosInstance.post(
        "/auth/admin-login",
        payload
      );

    return data;
  };

export const userLogin =
  async (payload) => {
    const { data } =
      await axiosInstance.post(
        "/auth/login",
        payload
      );

    return data;
  };

export const registerUser =
  async (payload) => {
    const { data } =
      await axiosInstance.post(
        "/auth/register",
        payload
      );

    return data;
  };