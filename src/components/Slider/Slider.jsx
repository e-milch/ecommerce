import { useState, useEffect } from "react";

import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

import { getProducts } from "../../services/products";

import styles from "./Slider.module.scss"

const Slider = ({ products }) => {

    return (

        <div>
            <AliceCarousel autoPlay autoPlayInterval="3000">
                {products.map((product) => (
                    <img src={product.imageSrc} 
                   className={styles.sliderimg}/>))}
            </AliceCarousel>        
        </div>

    )
}

export default Slider;