import * as styles from './Description.module.css';

const Description = () => {
    return (
        <div className={styles.profileContent}>

            <img src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg'  alt='Avatar'/>
            <div>Avatar</div>
            <div>Link</div>

        </div>
    )
}

export default Description;