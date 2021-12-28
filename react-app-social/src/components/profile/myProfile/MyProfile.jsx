import About from '../about/About';
import Description from '../description/Description';
import Photos from '../photos/Photos';
import styles from './MyProfile.module.css';
import React from "react";
import Preloader from "../../../common/preloader/Preloader";
import CreatePost from "../createPost/CreatePost";
import Post from "../post/Post";

const MyProfile = (props) => {
    if (!props.profileData) {
        return <Preloader/>
    }
    return (
        <div className={styles.profileWrapper}>
            <div><Description {...props}/></div>
            <div className={styles.itemWrapper}>
                <div className={styles.leftItemWrapper}>
                    <About {...props}/>
                    <Photos {...props}/>
                </div>
                <div className={styles.rightItemWrapper}>
                    <CreatePost {...props}/>
                    <Post {...props}/>
                </div>
            </div>
        </div>
    )
}

export default MyProfile;