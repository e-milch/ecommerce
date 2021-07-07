import NavHeader from "../../components/NavHeader";
import { useState, useEffect } from "react";
// import ProductCards from "../../components/ProductCards"
import ProductCard from "../../components/ProductCard";
import Slider from "../../components/Slider";

import { getProducts } from "../../services/products";

const Home = () => {
    const [products, setProducts] = useState([]);

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
               <NavHeader />
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