import PostMessage from './postMessage/PostMessage';
import React from "react";
import * as styles from "./Post.module.css";

const Post = (props) => {

    // eslint-disable-next-line array-callback-return
    let postMessageElements = props.postData.map((post,index) => {
        if (post.id === props.profileData.userId) {
            return <PostMessage message={post.message} name={post.name} likeCounts={post.likeCounts} key={index}
                                 photo={post.photo}/>
        }
    })

    return (
        <div className={styles.postWrapper}>
            <div className={styles.postContent}>{postMessageElements}</div>
        </div>
    )

};

export default Post;