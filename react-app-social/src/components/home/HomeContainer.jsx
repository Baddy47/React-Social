import React from "react";
import styles from './Home.module.css';
import UserCard from "../findUsers/UserCard";
import {useDispatch, useSelector} from "react-redux";

const HomeContainer = () => {

    const usersData = useSelector(state => state.users);
    const dispatch = useDispatch();

    return (
        <div>
            <div className={styles.container}>
                <div className={styles.slider}>
                    <div className={styles.sliderWrapper}>
                        <div className={styles.sliderItems}>
                            <div className={styles.sliderItem}>
                                {usersData.users.map(user =>
                                    (<UserCard users={user} key={user.id} dispatch={dispatch}/>))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeContainer;