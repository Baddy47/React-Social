import * as styles from './PostMessage.module.css';
import React from "react";
import LikeCounts from "../likeCounts/LikeCounts";
import userPhoto from '../../../../accets/User.jpg';
import {useDispatch} from "react-redux";
import {deletePost} from "../../../../redux/profileReducer";

const PostMessage = ({message, name, photo, id, likeCounts}) => {

    const dispatch = useDispatch();
    const delPost = (userId) => {
        dispatch(deletePost(userId))
    }

    return (
        <div className={styles.messageContent}>
            <div className={styles.item}>
                <img
                    src={photo ? photo : userPhoto}
                    alt="Avatar"/>
                <div>{name}</div>
            </div>
            <div className={styles.itemText}>{message}</div>
            <div><LikeCounts likeCounts={likeCounts} text='Like'/></div>
            <div className={styles.messageContentBtn}>
                <button onClick={() => delPost(id)}>Delete</button>
            </div>
        </div>
    )
}

export default PostMessage;