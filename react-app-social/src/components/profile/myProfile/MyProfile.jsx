import About from '../about/About';
import Description from '../description/Description';
import Photos from '../photos/Photos';
import * as styles from './MyProfile.module.css';
import React from "react";
import PostContainer from "../post/PostContainer";
import CreatePostContainer from "../createPost/CreatePostContainer.js";
import Preloader from "../../../common/preloader/Preloader";

const MyProfile = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div className={styles.profileWrapper}>
            <div><Description profile={props.profile}/></div>
            <div className={styles.itemWrapper}>
                <div className={styles.leftItemWrapper}>
                    <About/>
                    <Photos/>
                </div>
                <div className={styles.rightItemWrapper}>
                    <CreatePostContainer/>
                    <PostContainer/>
                </div>
            </div>
        </div>
    )
}

export default MyProfile;