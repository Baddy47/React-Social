import * as styles from './Navbar.module.css';
import React from "react";
import {NavLink} from "react-router-dom";

const Navbar = () => {
    let classActive = (data) => data.isActive ? styles.active : styles.item;

    return <nav className={styles.nav}>
        <ul className={styles.item}>
            <li><NavLink to='/profile' className={classActive}>Profile</NavLink></li>
            <li><NavLink to='/messages' className={classActive}>Messages</NavLink></li>
            <li><NavLink to='/findusers' className={classActive}>Find Users</NavLink></li>
            <li><NavLink to='/news' className={classActive}>News</NavLink></li>
            <li><NavLink to='/music' className={classActive}>Music</NavLink></li>
            <li><NavLink to='/settings' className={classActive}>Settings</NavLink></li>
        </ul>
    </nav>
};

export default Navbar;