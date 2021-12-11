import styles from './LikeCounts.module.css';
import React from "react";

const LikeCounts = (props) => {
    return (

        <div>
            <span className={styles.likeCounts}>{props.likeCounts}</span>
            <span>{props.text}</span>
        </div>

    )
}

export default LikeCounts;