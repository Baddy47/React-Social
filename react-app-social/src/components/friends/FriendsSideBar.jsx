import React from "react";
import userPhoto from '../../accets/User.jpg';
import {NavLink} from "react-router-dom";
import styles from '../sidebar/Sidebar.module.css';

const FriendsSideBar = (props) => {

    let followFriends = props.users.filter(user => (user.followed === true))

    return (
        <div className={styles.friendsContainer}>
            {followFriends.map((friend, index) => {
                return (<NavLink key={index} to={'/profile/' + friend.id}><div className={styles.friendItem}>
                    <img src={friend.photos.small || userPhoto} alt="#"/>
                    <span>{friend.name}</span>
                </div></NavLink>)
            })}
        </div>
    )
}

export default FriendsSideBar;