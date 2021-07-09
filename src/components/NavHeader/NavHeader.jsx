import { Link } from "react-router-dom";
import styles from "./NavHeader.module.scss"

import CartCounter from "../CartCounter";

const NavHeader = ( count ) => {

    return (
        <header className={styles.NavHeader}>
            <div>
                
                <h1>WoolBar</h1>
                
                <div className={styles.nav}>
                    <div>
                        <Link to="/">Home</Link>
                    </div>
                    <div>
                        <Link to="/cart">
                            {`Cart (${count.count})`}
                        </Link>
                    </div>
                </div>

            </div>
        
       
        </header>
        
    )
}

export default NavHeader;