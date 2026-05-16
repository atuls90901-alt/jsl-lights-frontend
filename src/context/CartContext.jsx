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
    useState(() => {
      const storedCart =
        localStorage.getItem(
          "cart"
        );

      return storedCart
        ? JSON.parse(storedCart)
        : [];
    });

  useEffect(() => {
    localStorage.setItem(
      "cart",
      JSON.stringify(cartItems)
    );
  }, [cartItems]);

  const addToCart = (product) => {
    const existingItem =
      cartItems.find(
        (item) =>
          item._id === product._id
      );

    if (existingItem) {
      const updatedCart =
        cartItems.map((item) =>
          item._id === product._id
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

  const increaseQuantity = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item._id === id
          ? {
              ...item,
              quantity:
                item.quantity + 1,
            }
          : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCartItems(
      cartItems
        .map((item) =>
          item._id === id
            ? {
                ...item,
                quantity:
                  item.quantity - 1,
              }
            : item
        )
        .filter(
          (item) =>
            item.quantity > 0
        )
    );
  };

  const removeFromCart = (id) => {
    const updatedCart =
      cartItems.filter(
        (item) => item._id !== id
      );

    setCartItems(updatedCart);

    toast.error(
      "Removed from cart"
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () =>
  useContext(CartContext);