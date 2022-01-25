import React from "react";
import styles from './FindUsers.module.css';
import userPhoto from '../../accets/User.jpg';
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {addUser, cancelActionUser, deleteUser} from "../../redux/UsersReducer";
import axios from "axios";

const UserCard = (props) => {

    const dispatch = useDispatch();

    const setRemove = (userId) => {
        dispatch(deleteUser(userId))
    };

    const setFollow = (userId) => {
        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`,
            {},
            {
                withCredentials: true,
                headers: {"API-KEY": "2acfc1b3-60e7-4085-9e02-9cf6596045ef"}})
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(addUser(userId));
                }
            })
    };
    const setUnfollow = (userId) => {
        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`,
            {
                withCredentials: true,
                headers: {"API-KEY": "5e2660ad-73f8-48d3-afc2-fe97afae535d"}})
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(cancelActionUser(userId));
                }
            })
    };

    if (props.followed === false) {
        return (
            <div className={styles.userCard}>
                <div><NavLink to={'/profile/' + props.id}>
                    <img src={props.photos.large !== null ? props.photos.large : userPhoto} alt={''}/>
                </NavLink></div>
                <div><h3>{props.name}</h3></div>
                <div><span>{props.status ? props.status : <span>...</span>}</span></div>
                <div>
                    <button onClick={() =>
                        setFollow(props.id)
                    }>Add Friends
                    </button>
                </div>
                <div>
                    <button onClick={() =>
                        setRemove(props.id)
                    } className={styles.btnDelete}>Delete
                    </button>
                </div>
            </div>
        )
    } else if (props.followed === true) {
        return (
            <div className={styles.userCard}>
                <div>
                    <img src={props.photos.large !== null ? props.photos.large : userPhoto} alt={""}/>
                </div>
                <div><h3>{props.name}</h3></div>
                <div><span>Request sent</span></div>
                <div className={styles.emptyItem}/>
                <div>
                    <button onClick={() =>
                        setUnfollow(props.id)
                    } className={styles.btnDelete}>Cancel
                    </button>
                </div>
            </div>
        )
    }
};

export default UserCard;