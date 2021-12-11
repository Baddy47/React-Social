import About from '../about/About';
import Description from '../description/Description';
import Events from '../events/Events';
import Photos from '../photos/Photos';
import * as styles from './MyProfile.module.css';
import React from "react";
import PostContainer from "../post/PostContainer";
import CreatePostContainer from "../createPost/CreatePostContainer";

const MyProfile = () => {
    return (
        <main className={styles.profileContent}>
            <Description />
            <About />
            <CreatePostContainer />
            <PostContainer />
            <Photos />
            <Events />
        </main>
    )
};

export default MyProfile;