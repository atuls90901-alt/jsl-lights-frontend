import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import toast from "react-hot-toast";

const CartContext =
  createContext();

export const CartProvider = ({
  children,
}) => {
  const [cartItems, setCartItems] =
    useState([]);

  useEffect(() => {
    const savedCart =
      localStorage.getItem("cart");

    if (savedCart) {
      setCartItems(
        JSON.parse(savedCart)
      );
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "cart",
      JSON.stringify(cartItems)
    );
  }, [cartItems]);

  const addToCart = (
    product
  ) => {
    const existingProduct =
      cartItems.find(
        (item) =>
          item._id ===
          product._id
      );

    if (existingProduct) {
      const updatedCart =
        cartItems.map((item) =>
          item._id ===
          product._id
            ? {
                ...item,
                quantity:
                  item.quantity + 1,
              }
            : item
        );

      setCartItems(updatedCart);
    } else {
      setCartItems([
        ...cartItems,
        {
          ...product,
          quantity: 1,
        },
      ]);
    }

    toast.success(
      "Added to cart"
    );
  };

  const removeFromCart = (
    id
  ) => {
    const updatedCart =
      cartItems.filter(
        (item) =>
          item._id !== id
      );

    setCartItems(updatedCart);

    toast.success(
      "Removed from cart"
    );
  };

  const increaseQuantity = (
    id
  ) => {
    const updatedCart =
      cartItems.map((item) =>
        item._id === id
          ? {
              ...item,
              quantity:
                item.quantity + 1,
            }
          : item
      );

    setCartItems(updatedCart);
  };

  const decreaseQuantity = (
    id
  ) => {
    const updatedCart =
      cartItems.map((item) =>
        item._id === id
          ? {
              ...item,
              quantity:
                item.quantity > 1
                  ? item.quantity - 1
                  : 1,
            }
          : item
      );

    setCartItems(updatedCart);
  };

  const totalAmount =
    cartItems.reduce(
      (acc, item) =>
        acc +
        item.offerPrice *
          item.quantity,
      0
    );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        totalAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () =>
  useContext(CartContext);