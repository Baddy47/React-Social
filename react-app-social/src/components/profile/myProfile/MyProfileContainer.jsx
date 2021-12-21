import React, {useEffect} from "react";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import MyProfile from "./MyProfile";
import {setUserProfile} from "../../../redux/profileReducer";
import {useParams} from "react-router-dom";

const MyProfileContainer = () => {

    const dispatch = useDispatch();
    const profileData = useSelector(state => state.profile);
    const userAuthId = useSelector(state => state.authorization.data.id)

    let {userId} = useParams();
    if (!userId) userId = userAuthId;

    useEffect(() => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                dispatch(setUserProfile(response.data))
            })
    }, [dispatch, userId]);

    return (<MyProfile {...profileData} />)
};

export default MyProfileContainer;