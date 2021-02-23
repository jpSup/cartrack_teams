import { A } from "hookrouter"

import styles from './Header.module.css'

const Header = () => (
    <header className={styles.error} >
        I am  the header
        <nav>
            <A href="/users">Users Page</A>
            <A href="/">Home Page</A>            
        </nav>
    </header>
)

export default Header