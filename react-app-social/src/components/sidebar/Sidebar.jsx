import styles from './Sidebar.module.css';
import React from "react";
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import FriendsSideBar from "../friends/FriendsSideBar";

const Sidebar = () => {

    const users = useSelector(state => state.users)

    let classActive = (data) => data.isActive ? styles.active : styles.item;
    return (
        <nav className={styles.sideBar+ ' ' +styles.sideBarBurger}>
            <div className={styles.items}><NavLink to={'/home'} className={classActive}>Home</NavLink></div>
            <div className={styles.items}>
                <NavLink to={'/friends'} className={classActive}>Friends</NavLink>
                <FriendsSideBar {...users} />
            </div>
		</nav>
    )
};

export default Sidebar;