import * as styles from "./Header.module.css";

const Header = () => {
    return (
        <header className={styles.header}> 
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY2PDAuEtEOD5ubP--69n_YRpBVAxz27KW1g&usqp=CAU' alt='Logo'/>
            <span>Lovers</span>
        </header>
    )
}

export default Header;