import { A } from "hookrouter"
import styles from "../styles/home.module.css";

const Home = () => (
    <div className={styles.home_content_wrapper}>
        <div>home page placeholder</div>
        <h3>Use the link below to view the users page</h3>
        <A href="/users">Users Page</A>   
    </div>
)

export default Home