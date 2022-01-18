import * as styles from './CreatePost.module.css';
import React from "react";
import userPhoto from '../../../accets/User.jpg';
import {useDispatch} from "react-redux";
import {addPost, updateNewPostText} from "../../../redux/profileReducer";

const CreatePost = (props) => {

    const dispatch = useDispatch();

    const onAddPost = () => {
        dispatch(addPost(props.profileData.userId));
        dispatch(updateNewPostText(''));
    };
    const onAddPostKey = (event) => {
        if (event.code === 'Enter') {
            dispatch(addPost(props.profileData.userId));
            dispatch(updateNewPostText(''));
        }
    }
    const onChangePost = (event) => {
        let text = event.target.value;
        dispatch(updateNewPostText(text));
    };

    return (
        <div className={styles.createPostContent}>
            <h3>Create Posts</h3>

            <div className={styles.createPostArea}>
                <div className={styles.createPostAvatar}><img src={props.profileData.photos.small || userPhoto} alt="Avatar"/></div>
                <textarea onKeyUp={onAddPostKey} onChange={onChangePost}
                          value={props.newTextData}
                          placeholder='Create some post.'/>
            </div>

            <div className={styles.createPostButton}>
                <button onClick={onAddPost}>Publish</button>
            </div>
        </div>
    )
};

export default CreatePost;