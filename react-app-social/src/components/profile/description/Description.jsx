import * as styles from './Description.module.css';
import userPhoto from '../../../accets/User.jpg';
// eslint-disable-next-line no-unused-vars

const Description = (props) => {
    return (
        <div className={styles.profileContent}>

            <img src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg'  alt='Avatar'/>
            <div className={styles.profilePhoto}><img src={props.profile.photos.large !==null ? props.profile.photos.large : userPhoto} alt="Avatar"/></div>
            <div className={styles.profileName}>{props.profile.fullName}</div>

        </div>
    )
}

export default Description;