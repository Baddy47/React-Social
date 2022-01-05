import React, {useRef, useState} from "react";
import styles from './Home.module.css';
import UserCard from "../findUsers/UserCard";
import {useSelector} from "react-redux";
import {Navigate} from "react-router-dom";
import arrowLeft from '../../accets/arrowLeft.svg';
import arrowRight from '../../accets/arrowRight.svg';

const HomeContainer = () => {

    let slider = useRef();

    const usersData = useSelector(state => state.users);
    const authFlag = useSelector(state => state.authorization.data.authFlag);

    const changeWheelPosition = (e) => {
        let el = slider.current;
        el.scrollTo({
            left: el.scrollLeft + e.deltaY * 6,
            behavior: 'smooth'
        })
    }

    const scopeWidth = 41.68;
    const [position, setPosition] = useState(0);

    const prevScope = () => {
        setPosition((initialPosition) => {
            let newPosition = initialPosition + scopeWidth;
            return Math.min(newPosition, 0);
        })
    }
    const nextScope = () => {
        setPosition((initialPosition) => {
            let newPosition = initialPosition - scopeWidth;
            const maxPosition = -((scopeWidth * (usersData.users.length - 1) / 4));
            return Math.max(newPosition, maxPosition);
        })
    }

    if (authFlag === false) return <Navigate to={'/sign-in'}/>;
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.slider}>
                    <div onClick={prevScope} className={styles.arrowLeft}><img src={arrowLeft} alt="<"/></div>
                    <div className={styles.sliderWrapper}>
                        <div ref={slider} onWheel={(e) => {
                            changeWheelPosition(e)
                        }} className={styles.sliderItems}>
                            <div style={{transform: `translateX(${position}vw)`}} className={styles.sliderItem}>
                                {usersData.users.map(user =>
                                    (<UserCard {...user} key={user.id}/>))}
                            </div>
                        </div>
                    </div>
                    <div onClick={nextScope} className={styles.arrowRight}><img src={arrowRight} alt=">"/></div>
                </div>
            </div>
        </div>
    )
}

export default HomeContainer;