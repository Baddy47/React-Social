import styles from "./Header.module.css";
import logo from '../../LOGO.svg';
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {changeResultCode} from "../../redux/authorizationReducer";
import burgerImg from '../../accets/burger.svg';
import React, {useState} from "react";
import {setUserProfile} from "../../redux/profileReducer";

const Header = () => {

    const authorizationData = useSelector(state => state.authorization);
    const dispatch = useDispatch();
    const [burger, setBurger] = useState(false)


    const signOut = () => {
        if (authorizationData.resultCode === 0) {
            dispatch(changeResultCode(null))
            dispatch(setUserProfile(null))
        }
    };

    const onNavBar = () => {
        let navBar = document.getElementById('navBar')
        if (burger === false) {
            navBar.style.transform = 'translateX(0)'
            setBurger(true)
        }
        if (burger === true) {
            navBar.style.transform = 'translateX(-100%)'
            setBurger(false)
        }

    }

    return (
        <header className={styles.header}>
            <div className={styles.headerWrapper}>
                <div className={styles.headerLogoContainer}>
                    <div className={styles.headerLogoContainerWrapper}>
                        <img src={logo} alt='LogoCompany'/>
                        <span>Soul..Way</span>
                    </div>
                </div>
                <div className={styles.headerBurger}>
                    <div onClick={onNavBar}><img src={burgerImg} alt="Burger"/></div>
                </div>
                <div className={styles.headerNavContainer}>
                    <div className={styles.headerNavContainerLink}>
                        <div>
                            {authorizationData.resultCode === 0
                                ? <div onClick={signOut} className={styles.headerLogin}>{authorizationData.data.login}<div>sign out</div></div>
                                : <NavLink to='/sign-in'>Sign In</NavLink>}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header;