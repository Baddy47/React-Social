import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setAuthorizationUser} from "../../redux/authorizationReducer";
import axios from "axios";
import {NavLink} from "react-router-dom";
import styles from './Authorization.module.css';

const Authorization = () => {

    const dispatch = useDispatch();
    const authorizationData = useSelector(state => state.authorization);

    useEffect(() => {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {withCredentials: true})
            .then(response => {
                if (response.data.resultCode === 0 ) {
                    dispatch(setAuthorizationUser(response.data))
                }
        })
    }, [dispatch])

    return (
        <div className={styles.authContainer}>
            {authorizationData.resultCode === 0 ? authorizationData.data.login : <NavLink to={'/sign-in'}>Sign In</NavLink>}
        </div>
    )
};

export default Authorization;