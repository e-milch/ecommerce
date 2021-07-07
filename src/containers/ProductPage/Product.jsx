import LongProductCard from "../../components/LongProductCard";
import NavHeader from "../../components/NavHeader"
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../../services/products";
import AddItemToCart from "../../components/AddToCart";


const Product = () => {
    const { id } = useParams();
    const [product, setProduct] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const data = await getProduct(id);
            setProduct(data);
        };
        getData();
    }, [])

    console.log(product);
    
    return (
        <>
        <div>
            <NavHeader />
        </div>
        <div>
            <LongProductCard 
            key={product.id}
            product={product}
            />

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

export default Product