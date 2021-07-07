import CartItems from "../../components/CartItems";
import NavHeader from "../../components/NavHeader";

const Cart = () => {

    return (
        <>
        <div>
            <NavHeader />
        </div>
        <h2>I am a cart page</h2>
        <div>
            <CartItems />
        </div>
        </>
    );
    
};

export default Cart