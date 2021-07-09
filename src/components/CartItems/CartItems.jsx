import { useState, useEffect } from "react";
import styles from "./CartItems.module.scss"

import UpdateQuantity from "../UpdateQuantity";


const CartItems = ({ item, onChange }) => {
    const [quantity, setQuantity] = useState(item.itemQty);

    // useEffect(() => {
    //     onChange({
    //         ...item,
    //         itemQty: quantity,
    //     });
    // }, [quantity]);

    return (
        <>
                <div key={item.id} className={styles.CartItems}>
                    <div>
                        <img src={item.imgSrc} alt="" />    
                    </div>
                    
                    <div>
                        <h3>{item.productName}</h3>
                        <p>Colour: {item.itemVariant}</p>


                        <p>${item.price} /unit</p>
                        <p>Subtotal: ${parseFloat(item.itemQty) * parseFloat(item.price)}</p>

                    <div>
                        <UpdateQuantity value={quantity} onChange={setQuantity} />
                    </div>

                    </div>
                    
                </div>
        </>
    );
    
};

export default CartItems;
