// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import styles from "./ProductCards.module.scss";

// import { getProducts } from "../../services/products";
// import AddItemToCart from "../AddToCart";

// const ProductCards = () => {
//     // const [products, setProducts] = useState([]);


//     return (
//         <>
//         {products.map((product) => (
//             <div key={product.id} className={styles.ProductCards}>
//                 <div>
//                     <img src={product.imageSrc} alt="" />
//                 </div>
//                 <div>
//                     <Link to={`/product/${product.id}`}>
//                     <h3>{product.productName}</h3>
//                     </Link>
//                     <p>${product.price}</p>
//                     <AddItemToCart 
//                     id={product.id} 
//                     productName={product.productName} 
//                     imgSrc={product.imageSrc} 
//                     price={product.price} 
//                     vars={product.variants}/>
//                 </div>
//             </div>

//         ))}
//         </>
//     );
// };

// export default ProductCards