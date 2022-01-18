import styles from './LikeCounts.module.css';
import React, {useCallback, useState} from "react";

const LikeCounts = (props) => {

    const [like, setLike] = useState(0);

    const onAddLike = useCallback(() => {
        let likeCount = like;
        likeCount++;
        setLike(likeCount)
    }, [like])

    return (
        <div className={styles.likeCountsContainer}>
            <span className={styles.likeCounts}>{like}</span>
            <span onClick={onAddLike} className={styles.likeCountsBtn}>{props.text}</span>
        </div>
    )
}

export default LikeCounts;