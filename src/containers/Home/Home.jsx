import { useState, useEffect } from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartProvider";

// import ProductCards from "../../components/ProductCards"
import ProductCard from "../../components/ProductCard";
import Slider from "../../components/Slider";
import { getProducts } from "../../services/products";
import NavHeader from "../../components/NavHeader";


const Home = () => {
    const [products, setProducts] = useState([]);
    const  count = useContext(CartContext);

    useEffect(() => {
        const getData = async () => {
            const data = await getProducts();
            setProducts(data);
        };
        getData();
    }, []);

    
    return (
        <>
           <div>
               <NavHeader count={count} />
           </div>

           <div>
               <Slider products={products}/>

           </div>

           <div>
               {products.map((product) => (
                   <ProductCard 
                   key={product.id}
                   product={product}
               />
               ))}
           </div>
        </>

    );
    
};

export default Home