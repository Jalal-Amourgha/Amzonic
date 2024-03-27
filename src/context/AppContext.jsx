import React, { useState, useEffect, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [category, setCategory] = useState("phone");
  const [myWishlist, setMyWishlist] = useState(
    JSON.parse(localStorage.getItem("wishlist-amazonic")) || []
  );
  const [quantities, setQuantities] = useState({});

  const [numberOfWishlist, setNumberOfWishlist] = useState(
    myWishlist.filter((item) => !item.cart).length
  );
  const [numberOfAddToCart, setNumberOfAddToCart] = useState(
    myWishlist.filter((item) => item.cart).length
  );

  const getTotalPrice = () => {
    let totalPrice = 0;
    myWishlist.forEach((item) => {
      if (item.cart) {
        const quantity = quantities[item.name] || 1;
        totalPrice += item.price * quantity;
      }
    });
    return totalPrice;
  };

  useEffect(() => {
    localStorage.setItem("wishlist-amazonic", JSON.stringify(myWishlist));
  }, [myWishlist]);

  const removeItem = (id) => {
    const updatedList = myWishlist.filter((item) => item.name !== id);
    setMyWishlist(updatedList);
  };

  const updateWishlist = (product) => {
    setMyWishlist(product);
  };

  const clearList = () => {
    const newList = myWishlist.filter((item) => item.cart);
    console.log(newList);
    setMyWishlist(newList);
  };

  useEffect(() => {
    const count1 = myWishlist.filter((item) => !item.cart).length;
    setNumberOfWishlist(count1);
    const count2 = myWishlist.filter((item) => item.cart).length;
    setNumberOfAddToCart(count2);
  }, [myWishlist]);

  return (
    <AppContext.Provider
      value={{
        myWishlist,
        updateWishlist,
        removeItem,
        clearList,
        showPopup,
        setShowPopup,
        quantities,
        setQuantities,
        getTotalPrice,
        numberOfWishlist,
        numberOfAddToCart,
        category,
        setCategory,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
