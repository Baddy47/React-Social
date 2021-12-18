import React from "react";
import styles from './FindUsers.module.css';
import userPhoto from '../../accets/User.jpg';
import {NavLink} from "react-router-dom";

const UserCard = ({users, dispatch}) => {
    const addFriends = () => {
        dispatch.addUser(users.id)
    };
    const deleteUsers = () => {
        dispatch.deleteUser(users.id);
    }
    const cancelAction = () => {
        dispatch.cancelActionUser(users.id)
    };

    if (users.followed === false) {
        return (
            <div className={styles.userCard}>
                {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                <div><NavLink to={'/profile/my-profile/' + users.id}><img src={users.photos.small !== null ? users.photos.small : userPhoto} alt={'photo'}/></NavLink></div>
                <div><h3>{users.name}</h3></div>
                <div><span>{users.status ? users.status : <span>...</span>}</span></div>
                <div><button onClick={addFriends}>Add Friends</button></div>
                <div><button onClick={deleteUsers} className={styles.btnDelete}>Delete</button></div>
            </div>
        )
    } else if (users.followed === true) {
        return (
            <div className={styles.userCard}>
                {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                <div><img src={users.photos.small !== null ? users.photos.small : userPhoto} alt="photo"/></div>
                <div><h3>{users.name}</h3></div>
                <div><span>Request sent</span></div>
                <div className={styles.emptyItem}/>
                <div><button onClick={cancelAction} className={styles.btnDelete}>Cancel</button></div>
            </div>
        )
    }
};

export default UserCard;