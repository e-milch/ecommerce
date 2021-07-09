import { createContext, useState, useEffect } from "react";
import { getCartCount } from "../services/cart";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [count, setCount] = useState();

    const getData = async () => {
        const data = await getCartCount();
         setCount(data);
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <CartContext.Provider value={count}>
            {children}
        </CartContext.Provider>
    )
}