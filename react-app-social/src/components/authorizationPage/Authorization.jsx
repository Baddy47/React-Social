import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setAuthorizationUser} from "../../redux/authorizationReducer";
import axios from "axios";
import {NavLink} from "react-router-dom";
import styles from './Authorization.module.css';

const Authorization = () => {

    const dispatch = useDispatch();
    const authorizationData = useSelector(state => state.authorization);
    const authData = JSON.parse(localStorage.getItem('authData'));

    useEffect(() => {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {withCredentials: true})
            .then(response => {
                if (!authData) {
                    localStorage.setItem('authData', JSON.stringify(response.data))
                } else dispatch(setAuthorizationUser(authData))
        })
    }, [authData, dispatch])

    return (
        <div className={styles.authContainer}>
            {authorizationData.resultCode === 0 ? <div>authorizationData.data.login</div> : <NavLink to='/sign-in'>Sign In</NavLink>}
        </div>
    )
};

export default Authorization;