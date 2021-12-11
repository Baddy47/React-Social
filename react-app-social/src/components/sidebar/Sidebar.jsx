import * as styles from './Sidebar.module.css';
import React from "react";

const Sidebar = () => {
    return (
        <nav className={styles.sideBar}>
			<div className={styles.item}>Friends</div>
            <div className={styles.item}>Groups</div>
            <div className={styles.item}>Pages</div>
		</nav>
    )
};

export default Sidebar;