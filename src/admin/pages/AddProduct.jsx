import { useState } from "react";

import toast from "react-hot-toast";

import Input from "../../components/ui/Input";

import { createProduct } from "../../api/product.api";

import categories from "../../utils/categories";

const AddProduct = () => {
  const [loading, setLoading] =
    useState(false);

  const [preview, setPreview] =
    useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setPreview(
        URL.createObjectURL(file)
      );
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(
      e.target
    );

    try {
      setLoading(true);

      await createProduct(formData);

      toast.success(
        "Product added"
      );

      e.target.reset();

      setPreview("");
    } catch (error) {
      toast.error(
        "Upload failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl">
      <h1 className="text-5xl font-bold">
        Add Product
      </h1>

      <form
        onSubmit={handleSubmit}
        className="mt-10 space-y-6"
      >
        <Input
          label="Title"
          name="title"
          required
        />

        <Input
          label="Description"
          name="description"
          required
        />

        <Input
          label="Price"
          name="price"
          type="number"
          required
        />

        <Input
          label="Offer Price"
          name="offerPrice"
          type="number"
        />

        <div>
          <label className="mb-2 block text-sm font-medium">
            Category
          </label>

          <select
            name="category"
            required
            className="h-14 w-full rounded-xl border border-zinc-300 bg-white px-5 outline-none focus:border-black"
          >
            <option value="">
              Select Category
            </option>

            {categories.map(
              (category) => (
                <option
                  key={category}
                  value={category}
                >
                  {category}
                </option>
              )
            )}
          </select>
        </div>

        <Input
          label="Stock"
          name="stock"
          type="number"
          required
        />

        <div>
          <label className="mb-3 block text-sm font-medium">
            Product Image
          </label>

          <input
            type="file"
            name="image"
            accept="image/*"
            required
            onChange={
              handleImageChange
            }
            className="w-full rounded-xl border border-zinc-300 p-4"
          />
        </div>

        {preview && (
          <div className="overflow-hidden rounded-3xl border border-zinc-200">
            <img
              src={preview}
              alt="Preview"
              className="h-[350px] w-full object-cover"
            />
          </div>
        )}

        <button className="h-14 rounded-xl bg-black px-8 text-white transition hover:bg-zinc-800">
          {loading
            ? "Uploading..."
            : "Add Product"}
        </button>
      </form>
    </div>
  );
};

export default AddProduct;