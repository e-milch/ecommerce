import { useState, useEffect } from "react";

import { getCartCount } from "../../services/cart";

const CartCounter = () => {
    const [count, setCount] = useState();

    const getData = async () => {
        const data = await getCartCount();
         setCount(data);
    };

    useEffect(() => {
        getData();
    }, [count]);

    return (
        <>
            <p>({count})</p>
        </>
    )

}

export default CartCounter;