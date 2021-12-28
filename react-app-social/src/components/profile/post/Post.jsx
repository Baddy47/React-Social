import PostMessage from './postMessage/PostMessage';
import React from "react";
import * as styles from "./Post.module.css";

const Post = (props) => {

    let postMessageElements = props.postData.map(elem =>
        (<PostMessage message={elem.message} name={elem.name} likeCounts={elem.likeCounts} key={elem.id}
                      photo={elem.photo}/>));

    return (
        <div className={styles.postWrapper}>
            <div className={styles.postContent}>{postMessageElements}</div>
        </div>
    )

};

export default Post;