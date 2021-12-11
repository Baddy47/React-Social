// eslint-disable-next-line no-unused-vars
import React from "react";
import FindUsers from "./FindUsers";
import {connect} from "react-redux";
import {addUserToFriend_CA, deleteUser_CA, getUsers_AC} from "../../redux/UsersReducer";

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        addUser: (userId) => {
            dispatch(addUserToFriend_CA(userId))
        },
        deleteUser: (userId) => {
            dispatch(deleteUser_CA(userId))
        },
        getUsers: (users) => {
            dispatch(getUsers_AC(users))
        }
    }
}

const FindUsersContainer = connect(mapStateToProps, mapDispatchToProps)(FindUsers);

export default FindUsersContainer;