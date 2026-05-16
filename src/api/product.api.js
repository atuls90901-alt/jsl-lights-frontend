import axiosInstance from "./axios";

export const getProducts = async () => {
  const response =
    await axiosInstance.get("/products");

  return response.data;
};

export const getProductById = async (id) => {
  const response =
    await axiosInstance.get(
      `/products/${id}`
    );

  return response.data;
};

export const createProduct = async (
  formData
) => {
  const response =
    await axiosInstance.post(
      "/products",
      formData,
      {
        headers: {
          "Content-Type":
            "multipart/form-data",
        },
      }
    );

  return response.data;
};