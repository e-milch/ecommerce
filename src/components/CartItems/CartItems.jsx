// import { useState, useEffect } from "react";
// import styles from "./CartItems.module.scss"

// import { getCart } from "../../services/cart";
// import { deleteCartItem, updateQty } from "../../services/cart";
// import DeleteItem from "../DeleteFromCart"
// import UpdateQuantity from "../UpdateQuantity";


// const CartItems = () => {
//     const [cart, setCart] = useState([]);
//     const [quantity, setQuantity] = useState();

//     const getData = async () => {
//         const data = await getCart();
//         setCart(data);
//     };

//     useEffect(() => {
//         getData();
//     }, [setCart]);

//     const handleDelete = async (id) => {
//         console.log(id)
//         await deleteCartItem(id);
//         getData();
//     };

//     const handleRemove = (event) => {
//         setQuantity(quantity - 1);
//        };
    
//        const handleAdd = (event) => {
//         setQuantity(quantity + 1);
//        };

//     const handleQtyChange = async (updatedItem) => {
//         console.log("qty changed");
//         const { id, ...item } = updatedItem;
//         await updateQty(id, item);
//         getData();
//     };


//     return (
//         <>
//             {cart.map((item) => (
//                 <div key={item.id} className={styles.CartItems}>
//                     <div>
//                         <img src={item.imgSrc} alt="" />    
//                     </div>
                    
//                     <div>
//                         <h3>{item.productName}</h3>
//                         <p>Colour: {item.itemVariant}</p>

//                         <p>Quantity: <UpdateQuantity qty={item.itemQty} onChange={handleQtyChange(item.id)} onAdd={handleAdd} onRemove={handleRemove}/></p>



//                         <p>${item.price} /unit</p>
//                         <p>Subtotal: ${parseFloat(item.itemQty) * parseFloat(item.price)}</p>
//                         <DeleteItem item={item} onDelete={handleDelete} />
//                     </div>
                    
//                 </div>
//             ))}
//         </>
//     );
    
// };

// export default CartItems;