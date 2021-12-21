import styles from "./Header.module.css";
import logo from '../../LOGO.svg';
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {changeResultCode} from "../../redux/authorizationReducer";
const Header = () => {

    const resultCode = useSelector(state => state.authorization.resultCode);
    const dispatch = useDispatch();

    const signOut = () => {
        if (resultCode === 0) {
            dispatch(changeResultCode(null))
        }
    };
    return (
        <header className={styles.header}>
            <div className={styles.headerWrapper}>
                <div className={styles.headerLogoContainer}>
                    <div className={styles.headerLogoContainerWrapper}>
                        <img src={logo} alt='LogoCompany'/>
                        <span>Soul..Way</span>
                    </div>
                </div>
                <div className={styles.headerNavContainer}>
                    <div className={styles.headerNavContainerLink}>
                        <div onClick={signOut}>
                            <NavLink to='/sign-in'>Sign Out</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header;