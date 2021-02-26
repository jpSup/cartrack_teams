import { A } from "hookrouter"
import CarTrackLogo from '../../assets/logo_top.svg';

import styles from './Header.module.css'

const Header = () => (
    <header className={styles.header}>        
        <nav className={styles.topnav}>
            <A href="/">Home Page</A>    
            <A href="/"><img className={styles.logo} src={CarTrackLogo} alt="cartrack logo" /></A>
            <A href="/users">Users Page</A>                    
        </nav>
    </header>
)

export default Header