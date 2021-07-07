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
                
        </div>
        </>
    )
    
}

export default Product