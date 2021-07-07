import { useState, } from "react";

import { createCartItem } from "../../services/cart";

const AddItemToCart = ({ id, productName, imgSrc, price, var1, var2 }) => {
    const defaultItem = {
        productId: id,
        productName: productName,
        itemVariant: "Select Colour",
        itemQty: 1,
        imgSrc: imgSrc,
        price: price,
    };

    const [item, setItem] = useState(defaultItem);

    const handleQtyChange = (event) => {
        const attribute = event.target.name;
        const copy = { ...item }; 
        if (!isNaN(event.target.value)) {
            copy[attribute] = parseInt(event.target.value)
        } else {
            copy.itemQty = 1;
        }
        setItem(copy);
        
    };

    const handleVarChange = (event) => {
        const attribute = event.target.name;
        const copy = { ...item };
        copy[attribute] = event.target.value;
        setItem(copy)
        
    };

    const handleCreate = (event) => {
        createCartItem(item);
        setItem(defaultItem);
    };

    
    return (
        <div>
            <p>
                <input type="text" 
                placeholder="Enter Quantity"
                onChange={handleQtyChange}
                value={item.itemQty}
                name="itemQty"/>
            </p>

            <p>
                <select onChange={handleVarChange} name="itemVariant">
                <option value={item.itemVariant}>Select Colour</option>
                <option value={var1}>{var1}</option>
                <option value={var2}>{var2}</option>
                </select>
            </p>
            
            <p>
                <button onClick={handleCreate}>Add to Cart</button>
            </p>
            
        </div>
        
    );
};

export default AddItemToCart;