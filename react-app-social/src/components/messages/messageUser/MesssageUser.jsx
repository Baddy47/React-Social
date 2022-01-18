import * as styles from "../Messages.module.css";
import {NavLink} from "react-router-dom";
import React from "react";
import userPhoto from '../../../accets/User.jpg';

const MessageUser = (props) => {

    let path = '/messages/' + props.id;
    let nameUser = props.name;

    return (
        <div className={styles.massageUser}>
            <img src={props.photos.small ? props.photos.small : userPhoto} alt="avatar"/>
            <NavLink to={path}>{nameUser}</NavLink>
        </div>
    );
};

export default MessageUser;