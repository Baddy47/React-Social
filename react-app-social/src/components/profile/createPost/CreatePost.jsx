import * as styles from './CreatePost.module.css';
import React from "react";

const CreatePost = ({newTextData, onAddPost, onChangePost}) => {

    const addPost = () => {
        onAddPost();
        onChangePost('');
    };
    const changePost = (event) => {
        let text = event.target.value;
        onChangePost(text);
    };

    return (
        <div className={styles.createPostContent}>
            <h3>Create Posts</h3>

            <div className={styles.createPostArea}>
                <textarea onChange={changePost}
                          value={newTextData}
                          placeholder='Create some post.'/>
            </div>

            <div className={styles.createPostButton}>
                <button onClick={addPost}>Send</button>
            </div>
        </div>
    )
};

export default CreatePost;