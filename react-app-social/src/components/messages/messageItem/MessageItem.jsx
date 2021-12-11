import * as styles from "../Messages.module.css";
import React from "react";

const MessageItem = ({message}) => {

    return (
        <div>
            <div className={styles.messageItem}>
                <div className={styles.messageItemText}>{message}</div>
                <img src="https://reqres.in/img/faces/8-image.jpg" alt=""/>
            </div>
        </div>
    );
};

export default MessageItem;