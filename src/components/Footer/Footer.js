import styles from './Footer.module.css'

import CarTrackLogo from '../../assets/logo_btm.svg';

const Footer = () => (
    <footer className={styles.footer} >
        <img className={styles.logo} src={CarTrackLogo} alt="cartrack logo" />
    </footer>
)

export default Footer