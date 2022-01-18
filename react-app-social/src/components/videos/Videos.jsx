import React from "react";
import styles from './Videos.module.css';

const Videos = () => {


    return (
        <div className={styles.content}>
            <div className={styles.videoItems}>
                <div className={styles.videoItemsWrapper}>
                    <div className={styles.videoItemsContainer}>
                        <div className={styles.item}>
                            <div className={styles.videoItem}>
                                <iframe width="650" height="315" src="https://www.youtube.com/embed/cgDA1pP-g0E"
                                        title="YouTube video player" frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen/>
                            </div>
                            <div className={styles.videoItem}>
                                <iframe width="650" height="315" src="https://www.youtube.com/embed/YspHJz-_sDI"
                                        title="YouTube video player" frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen/>
                            </div>
                            <div className={styles.videoItem}>
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/zrf9IbklrZw"
                                        title="YouTube video player" frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen/>
                            </div>
                            <div className={styles.videoItem}>
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/ZVYpRti_7pM"
                                        title="YouTube video player" frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default Videos;