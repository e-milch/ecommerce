

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
            </div>
        </>
    )
}

export default LongProductCard