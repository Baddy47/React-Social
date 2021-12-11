import PostMessage from './postMessage/PostMessage';
import React from "react";
import * as styles from "./Post.module.css";

const Post = ({state}) => {

    let postMessageElements = state.map( elem =>
        (<PostMessage message={elem.message} name={elem.name} likeCounts={elem.likeCounts} key={elem.id} />));

    return (
        <div className={styles.postContent}>
            { postMessageElements }
        </div>
    )
};

export default Post;