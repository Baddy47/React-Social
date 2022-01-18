import React, {useEffect, useState} from "react";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import MyProfile from "./MyProfile";
import {setUserProfile, setUserStatus} from "../../../redux/profileReducer";
import {useParams} from "react-router-dom";

export const MyProfileContext = React.createContext()

const MyProfileContainer = () => {

    const dispatch = useDispatch();
    const profileData = useSelector(state => state.profile);
    const userAuthId = useSelector(state => state.authorization.data.id)
    const [valueBtnStatus, setValueBtnStatus] = useState()

    let {userId} = useParams();
    if (!userId) {
        userId = userAuthId
    }
    
    useEffect(() => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`,
            {withCredentials: true})
            .then(response => {
                dispatch(setUserProfile(response.data))
            })
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/status/${userId}`,
            {withCredentials: true})
            .then(response => {
                dispatch(setUserStatus(response.data))
            })
        axios.put('https://social-network.samuraijs.com/api/1.0/profile/status',
            {status: `${valueBtnStatus}`},
            {withCredentials: true,
            headers: {"API-KEY": "2acfc1b3-60e7-4085-9e02-9cf6596045ef"}})
            .then(response => {
                if (response.data.resultCode === 0 && userAuthId === userId) {
                    dispatch(setUserStatus(valueBtnStatus))
                }
            })
    }, [dispatch, userAuthId, userId, valueBtnStatus]);

    return (<MyProfileContext.Provider value={{valueBtnStatus, setValueBtnStatus}}>
        <MyProfile {...profileData} />
    </MyProfileContext.Provider>)
};

export default MyProfileContainer;