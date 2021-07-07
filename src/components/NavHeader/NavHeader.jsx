import { Link } from "react-router-dom";
import styles from "./NavHeader.module.scss"

import CartCounter from "../CartCounter";

const NavHeader = () => {

    return (
        <header className={styles.NavHeader}>
        <div>
            <h1>WoolBar</h1>
        </div>
        <nav className={styles.nav}>
            <div>
                <Link to="/cart">
                    Cart <CartCounter />
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