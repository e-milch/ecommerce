import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
// import { getProduct } from "../../services/products";
import AddItemToCart from "../AddToCart";
import { createCartItem } from "../../services/cart";

const ProductCard = ({ product }) => {
    // const { id } = useParams();

    
    
    

    return (
        <>
            <div>
                <img src={product.imageSrc} alt="" />
            </div>
            
            <div>
            <Link to={`/product/${product.id}`}>
                   <h3>{product.productName}</h3>
           </Link>
                <p>${product.price}</p>
                <AddItemToCart 
                    id={product.id} 
                    productName={product.productName} 
                    imgSrc={product.imageSrc} 
                    price={product.price} 
                    var1={product.variants[0]}
                    var2={product.variants[1]}
                />
            </div>
        </>
    )
}

export default ProductCard;