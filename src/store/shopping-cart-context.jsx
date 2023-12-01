import { useState, createContext } from "react";
import { DUMMY_PRODUCTS } from "../dummy-products";

export const CartContext = createContext({
  items: [],
  addItemToCart: () => {}, //is for auto-complition
  decreaseItemFromCart: () => {},
});

export default function CartContextprovider({ children }) {
  const [shoppingCart, setShoppingCart] = useState({
    items: [],
  });

  const addItemToCart = (id) => {
    const checkIfItemExist = shoppingCart.items.find((item) => item.id === id);

    if (checkIfItemExist) {
      setShoppingCart((prevValues) => ({
        ...prevValues,
        items: prevValues.items.map((item) =>
          item.id === checkIfItemExist.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      }));
    } else {
      const productToBeAdded = DUMMY_PRODUCTS.find(
        (product) => product.id === id
      );

      setShoppingCart((prevValues) => ({
        ...prevValues,
        items: [
          ...prevValues.items,
          {
            id: id,
            title: productToBeAdded.title,
            price: productToBeAdded.price,
            quantity: 1,
          },
        ],
      }));
    }
  };

  const decreaseItemFromCart = (id) => {
    const checkIfItemExist = shoppingCart.items.find((item) => item.id === id);

    const updatedItems = shoppingCart.items.map((item) =>
      item.id === id
        ? // ? { ...item, quantity: Math.max(0, item.quantity - 1) }
          { ...item, quantity: item.quantity - 1 }
        : item
    );
    // Filter out the item if its quantity is 0
    const filteredItems = updatedItems.filter((item) => item.quantity > 0);

    setShoppingCart((prevValues) => ({
      ...prevValues,
      items: checkIfItemExist.quantity > 1 ? updatedItems : filteredItems,
    }));
  };

  const contextValue = {
    items: shoppingCart.items,
    addItemToCart,
    decreaseItemFromCart,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}
