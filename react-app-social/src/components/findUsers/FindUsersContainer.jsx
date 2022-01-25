import React, {useEffect} from "react";
import styles from './FindUsers.module.css';
import UserCard from "./UserCard";
import axios from "axios";
import Preloader from "../../common/preloader/Preloader";
import {useDispatch, useSelector} from "react-redux";
import {setCurrentPage, setTotalCount, setUsers, toggleIsFetching} from "../../redux/UsersReducer";

const FindUsersContainer = () => {

    const usersData = useSelector(state => state.users);
    const dispatch = useDispatch();

    const onChangePage = (pageNumber) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(pageNumber));
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${usersData.pageSize}&page=${pageNumber}`,
            {
                withCredentials: true,
                headers: {"API-KEY": "5e2660ad-73f8-48d3-afc2-fe97afae535d"}
            })
            .then(response => {
                dispatch(toggleIsFetching(false));
                dispatch(setUsers(response.data.items));
            })
    }
    let pageCount = Math.ceil((usersData.totalCount / 200) / usersData.pageSize);
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }

    useEffect(() => {
        dispatch(toggleIsFetching(true));
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${usersData.pageSize}&page=${usersData.currentPage}`,
            {
                withCredentials: true,
                headers: {"API-KEY": "5e2660ad-73f8-48d3-afc2-fe97afae535d"}
            })
            .then(response => {
                dispatch(setTotalCount(response.data.totalCount));
                dispatch(toggleIsFetching(false));
                if (usersData.users.length === 0) {
                    dispatch(setUsers(response.data.items));
                }
            })
    }, [dispatch, usersData.currentPage, usersData.pageSize, usersData.users.length]);

    return (
        <div className={styles.usersWrapper}>
            {usersData.isFetching ? <Preloader/> : null}
            <h2>What if..?</h2>
            <div className={styles.usersContainer}>
                {usersData.users.map(user =>
                    (<UserCard {...user} key={user.id}/>))
                }
            </div>
            <div className={styles.pages}>
                {pages.map((page, index) => {
                    return (<span onClick={() =>
                        onChangePage(page)
                    }
                                  key={index}
                                  className={usersData.currentPage === page ? styles.pageActive : styles.page}>{page}</span>)
                })}
            </div>
        </div>
    )

}

export default FindUsersContainer;