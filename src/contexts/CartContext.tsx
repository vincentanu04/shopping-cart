import { createContext, useContext, useState } from "react";
import { numberCartItems } from "../utils";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState({});

    const addToCart = (item) => {
        setCart((prevCart) => {
            const newCart = { ...prevCart };
            newCart[item.id] 
                ? newCart[item.id].quantity += 1
                : newCart[item.id] = item
                
            return newCart
        });
    };

    const adjustQuantity = (item, newQuantity) => {
        setCart((prevCart) => {
            const newCart = { ...prevCart };
            newCart[item.id].quantity = newQuantity;
            return newCart;
        })
    }

    const removeFromCart = (item) => {
        setCart((prevCart) => {
            const newCart = { ...prevCart };
            delete newCart[item.id];
            return newCart;
        })
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, adjustQuantity }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
      throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};
