import React, { createContext, useState, useContext, useCallback } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback((message, type = 'success') => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3000);
  }, []);

  const toggleWishlist = useCallback((product) => {
    setWishlist((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        addToast('Removed from wishlist', 'info');
        return prev.filter((item) => item.id !== product.id);
      }
      addToast('Added to wishlist', 'success');
      return [...prev, product];
    });
  }, [addToast]);

  const isInWishlist = useCallback((productId) => {
    return wishlist.some((item) => item.id === productId);
  }, [wishlist]);

  const value = {
    wishlist,
    toggleWishlist,
    isInWishlist,
    toasts,
    addToast,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
};
