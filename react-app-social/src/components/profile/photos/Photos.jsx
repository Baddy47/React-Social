import * as styles from './Photos.module.css';

const Photos = (props) => {
    return (
        
        <div>
            {props.profileData.photos.large && <div className={styles.photosContent}>
                <h3>Photos</h3>
                <img src={props.profileData.photos.large} alt="#"/>
            </div>}
        </div>
    )
}

export default Photos;