import styles from "./Header.module.css";
import logo from '../../LOGO.svg';
const Header = () => {
    return (
        <header className={styles.header}> 
            <img src={logo} alt='LogoCompany'/>
            <span>Soul..Way</span>
        </header>
    )
}

export default Header;