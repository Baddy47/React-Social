import React, {Component} from "react";
import axios from "axios";
import {connect} from "react-redux";
import MyProfile from "./MyProfile";
import {setUserProfile} from "../../../redux/profileReducer";

class MyProfileContainer extends Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/10`)
            .then(response => {
                this.props.setUserProfile(response.data);
            })
    }

    render() {
        return (
            <MyProfile {...this.props}/>
        )
    }
}
const mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

export default connect(mapStateToProps, {setUserProfile})(MyProfileContainer);
