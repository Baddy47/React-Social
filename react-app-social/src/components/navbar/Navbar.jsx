import * as styles from './Navbar.module.css';
import React from "react";
import {NavLink} from "react-router-dom";

const Navbar = () => {
    let classActive = (data) => data.isActive ? styles.active : styles.item;

    return <nav id={'navBar'} className={styles.nav+ ' ' +styles.itemBurger}>
        <ul className={styles.item}>
            <li><NavLink to='/profile' className={classActive}>Profile</NavLink></li>
            <li><NavLink to='/messages' className={classActive}>Messages</NavLink></li>
            <li><NavLink to='/find-users' className={classActive}>Find Users</NavLink></li>
            <li><NavLink to='/video' className={classActive}>Videos</NavLink></li>
            <li><NavLink to='/settings' className={classActive}>Settings</NavLink></li>
        </ul>
    </nav>
};

export default Navbar;