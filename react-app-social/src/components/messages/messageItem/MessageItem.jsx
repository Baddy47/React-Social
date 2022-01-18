import * as styles from "../Messages.module.css";
import React from "react";
import userPhoto from '../../../accets/User.jpg';

const MessageItem = ({message, userChat, idChat}) => {

    if (userChat === idChat)
        return (
            <div>
                {message.length >0
                ? <div className={styles.messageItem}>
                        <div className={styles.messageItemText}>{message}</div>
                        <img src={userPhoto} alt='Avatar'/>
                    </div>
                : null}
            </div>
        );
    return (
        <div>
            <div className={styles.messageItem}>
            </div>
        </div>
    )
};

export default MessageItem;