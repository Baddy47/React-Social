import React from "react";
import styles from './FindUsers.module.css';

const UserCard = ({users, dispatch}) => {
    const addFriends = (e) => {
        console.log(users.id);
        dispatch.addUser(users.id)
        e.target.innerHTML = 'Friend';
    };

    const deleteUsers = () => {
        console.log(users.id);
        dispatch.deleteUser(users.id)
    }

    return (
        <div className={styles.userCard}>
            {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
            <div><img src={users.photoURL} alt="photo"/></div>
            <div><h3>{users.fullname}</h3></div>
            <div><span>{users.status}</span></div>
            <div><button onClick={addFriends}>Add Friends</button></div>
            <div><button onClick={deleteUsers} className={styles.btnDelete}>Delete</button></div>
        </div>
    )
};

export default UserCard;