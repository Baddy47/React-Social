import * as styles from './PostMessage.module.css';
import React from "react";
import LikeCounts from "../likeCounts/LikeCounts";

const PostMessage = ({message, name, likeCounts}) => {
    return (
        <div className={styles.messageContent}>
            <div className={styles.item}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSaNzYlhsLDFFJydScZsv2lcHW9na_VEItg&usqp=CAU" alt="Avatar" />
                <div>{name}</div>
            </div>
            <div className={styles.itemText}>{message}</div>
            <LikeCounts likeCounts={likeCounts} text='Like' />
        </div>
    )
}

export default PostMessage;