import AddItemToCart from "../AddToCart"

const LongProductCard = ({ product }) => {

    return (
        <>
        <div>
                <img src={product.imageSrc} alt="" />
            </div>
            
            <div>
                <h3>{product.productName}</h3>
                <p>{product.longDesc}</p>
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

export default LongProductCard