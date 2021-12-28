import styles from './Sidebar.module.css';
import React from "react";
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import FriendsSideBar from "../friends/FriendsSideBar";

const Sidebar = () => {

    const users = useSelector(state => state.users)

    let classActive = (data) => data.isActive ? styles.active : styles.item;
    return (
        <nav className={styles.sideBar}>
            <div><NavLink to={'/home'} className={classActive}>Home</NavLink></div>
            <div>
                <NavLink to={'/friends'} className={classActive}>Friends</NavLink>
                <FriendsSideBar {...users} />
            </div>
            <div><NavLink to={'/groups'} className={classActive}>Groups</NavLink></div>
		</nav>
    )
};

export default Sidebar;