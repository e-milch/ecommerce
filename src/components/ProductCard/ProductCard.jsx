import { Link } from "react-router-dom";
import AddItemToCart from "../AddToCart";
import styles from "./ProductCard.module.scss"

const ProductCard = ({ product }) => {

    return (
        <div className={styles.ProductCard}>
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
        </div>
    )
}

export default ProductCard;