import { Link } from "react-router-dom";
import styles from "./NavHeader.module.scss"
// import { CartContext } from "../../context/CartProvider";
// import { useContext } from "react";

import CartCounter from "../CartCounter";

const NavHeader = ( count ) => {
    // const  count = useContext(CartContext);

    return (
        <header className={styles.NavHeader}>
        <div>
            <h1>WoolBar</h1>
        </div>
        <nav className={styles.nav}>
            <div>
                <Link to="/cart">
                    {`Cart ${count.count}`}
                </Link>
            </div>
            <div>
                <Link to="/">Home</Link>
            </div>
        </nav>
        </header>
        
    )
}

export default NavHeader;