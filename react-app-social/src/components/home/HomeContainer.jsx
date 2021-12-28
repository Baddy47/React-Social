import React from "react";
import styles from './Home.module.css';
import UserCard from "../findUsers/UserCard";
import {useSelector} from "react-redux";
import {Navigate} from "react-router-dom";

const HomeContainer = () => {

    const usersData = useSelector(state => state.users);
    const authFlag = useSelector(state => state.authorization.data.authFlag);

    if (authFlag === false) return <Navigate to={'/sign-in'} />;
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.slider}>
                    <div className={styles.sliderWrapper}>
                        <div className={styles.sliderItems}>
                            <div className={styles.sliderItem}>
                                {usersData.users.map(user =>
                                    (<UserCard {...user} key={user.id} />))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeContainer;