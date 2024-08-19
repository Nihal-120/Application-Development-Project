import React, { createContext, useState, useContext } from "react";

// Create a Context for the Wishlist
const WishlistContext = createContext();

// Create a provider component
export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  const addToWishlist = (card) => {
    if (!wishlist.some((item) => item.id === card.id)) {
      setWishlist([...wishlist, card]);
    }
  };

  const removeFromWishlist = (cardId) => {
    setWishlist(wishlist.filter((item) => item.id !== cardId));
  };

  return (
    <WishlistContext.Provider
      value={{ wishlist, addToWishlist, removeFromWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

// Custom hook to use the WishlistContext
export const useWishlist = () => useContext(WishlistContext);
