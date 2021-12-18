// eslint-disable-next-line no-unused-vars
import React from "react";
import FindUsers from "./FindUsersHOC";
import {connect} from "react-redux";
import {
    addUser,
    cancelActionUser,
    deleteUser, setUsers,
    setTotalCount,
    setCurrentPage, toggleIsFetching
} from "../../redux/UsersReducer";

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageUsersSize,
        currentPage: state.usersPage.currentUsersPage,
        isFetching: state.usersPage.isFetching
    }
};

const FindUsersContainer = connect(mapStateToProps, {
    addUser,
    cancelActionUser,
    deleteUser, setUsers,
    setTotalCount,
    setCurrentPage,
    toggleIsFetching})(FindUsers);

export default FindUsersContainer;