import { useState, useEffect } from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartProvider";

import CartItems from "../../components/CartItems";
import NavHeader from "../../components/NavHeader";

import { getCart } from "../../services/cart";
import { updateQty } from "../../services/cart";
import { deleteCartItem } from "../../services/cart";

import UpdateQuantity from "../../components/UpdateQuantity";
import DeleteItem from "../../components/DeleteFromCart";

const Cart = () => {
    const [cart, setCart] = useState([]);
    const count = useContext(CartContext);

    // const [quantity, setQuantity] = useState();

    const getData = async () => {
        const data = await getCart();
        setCart(data);
    };

    // const handleRemove = (event) => {
    //     setQuantity(quantity - 1);
    // };
                    
    // const handleAdd = (event) => {
    //     setQuantity(quantity + 1);
    // };

    const handleQtyChange = async (updatedItem) => {
        console.log("qty changed");
        const { id, ...item } = updatedItem;
        await updateQty(id, item);
        getData();
    };

    const handleDelete = async (id) => {
        console.log(id)
        await deleteCartItem(id);
        getData();
    };

    useEffect(() => {
        getData();
    }, [setCart, count]);

    return (
        <>
        <div>
            <NavHeader count={count}/>
        </div>
        <div>
            {cart.map((item) => (
            <div>
                <div>
                    <CartItems key={item.id}
                    item={item} oncChange={handleQtyChange}/> 

                {/* <div>
                    <UpdateQuantity key={item.id} item={item} onChange={handleQtyChange(item.id)} onAdd={handleAdd} onRemove={handleRemove}/>
                </div> */}

                <div>
                    <DeleteItem item={item} onDelete={handleDelete} />
                </div>

                </div>  
            </div>
            ))}
        </div>

        </>
    );
    
};

export default Cart