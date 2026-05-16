import { useEffect, useState } from "react";

import axiosInstance from "../../api/axios";

const Products = () => {
  const [products, setProducts] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const fetchProducts =
    async () => {
      try {
        const { data } =
          await axiosInstance.get(
            "/products"
          );

        setProducts(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="text-2xl">
        Loading...
      </div>
    );
  }

  return (
    <div>
      <div className="mb-10 flex items-center justify-between">
        <h1 className="text-5xl font-bold">
          Products
        </h1>
      </div>

      <div className="overflow-hidden rounded-3xl bg-white shadow-lg">
        <table className="w-full">
          <thead className="bg-black text-white">
            <tr>
              <th className="px-6 py-5 text-left">
                Image
              </th>

              <th className="px-6 py-5 text-left">
                Product
              </th>

              <th className="px-6 py-5 text-left">
                Category
              </th>

              <th className="px-6 py-5 text-left">
                Price
              </th>

              <th className="px-6 py-5 text-left">
                Stock
              </th>
            </tr>
          </thead>

          <tbody>
            {products.map((product) => (
              <tr
                key={product._id}
                className="border-b"
              >
                <td className="px-6 py-5">
                  <img
                    src={`https://jsl-lights-backend.onrender.com${product.image}`}
                    alt={product.title}
                    className="h-20 w-20 rounded-xl object-cover"
                  />
                </td>

                <td className="px-6 py-5 font-medium">
                  {product.title}
                </td>

                <td className="px-6 py-5">
                  {product.category}
                </td>

                <td className="px-6 py-5">
                  ₹{product.offerPrice}
                </td>

                <td className="px-6 py-5">
                  {product.stock}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;