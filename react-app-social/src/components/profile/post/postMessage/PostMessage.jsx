import * as styles from './PostMessage.module.css';
import React from "react";
import LikeCounts from "../likeCounts/LikeCounts";
import userPhoto from '../../../../accets/User.jpg';

const PostMessage = ({message, name, likeCounts}) => {
    return (
        <div className={styles.messageContent}>
            <div className={styles.item}>
                <img
                    src={userPhoto}
                    alt="Avatar"/>
                <div>{name}</div>
            </div>
            <div className={styles.itemText}>{message}</div>
            <div><LikeCounts likeCounts={likeCounts} text='Like'/></div>
        </div>
    )
}

export default PostMessage;