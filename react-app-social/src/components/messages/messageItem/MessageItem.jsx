import * as styles from "../Messages.module.css";
import React from "react";
import userPhoto from '../../../accets/User.jpg';

const MessageItem = ({message}) => {

    return (
        <div>
            <div className={styles.messageItem}>
                <div className={styles.messageItemText}>{message}</div>
                <img src={userPhoto} alt='Avatar'/>
            </div>
        </div>
    );
};

export default MessageItem;