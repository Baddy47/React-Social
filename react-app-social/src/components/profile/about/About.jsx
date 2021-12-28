import * as styles from './About.module.css';
import fb_icon from '../../../accets/icon_facebook.svg';
import vk_icon from '../../../accets/icon_vk.svg';
import gh_icon from '../../../accets/icon_github.svg';

const About = (props) => {
    return (
        
        <div>
            {props.profileData.aboutMe &&
                <div className={styles.aboutContent}>
                    <h3>About me...</h3>
                    <p>{props.profileData.aboutMe}</p>
                </div>}
            {(props.profileData.contacts.facebook || props.profileData.contacts.vk || props.profileData.contacts.github) &&
                <div className={styles.contactsContent}>
                    <h3>Contacts:</h3>
                    <ul>
                        {props.profileData.contacts.facebook && 
                            <li>
                                <img src={fb_icon} alt={'fb'}/>
                                <a href={'https://' + props.profileData.contacts.facebook}
                                   target={"_blank"}
                                   rel="noreferrer">{props.profileData.contacts.facebook}</a>
                            </li>}
                        {props.profileData.contacts.vk &&
                            <li>
                                <img src={vk_icon} alt={'vk'}/>
                                <a href={'https://' + props.profileData.contacts.vk}
                                   target={"_blank"}
                                   rel="noreferrer">{props.profileData.contacts.vk}</a>
                            </li>}
                        {props.profileData.contacts.github &&
                            <li>
                                <img src={gh_icon} alt={'gh'}/>
                                <a href={'https://' + props.profileData.contacts.github}
                                   target={"_blank"}
                                   rel="noreferrer">{props.profileData.contacts.github}</a>
                            </li>}
                    </ul>
                </div>}
        </div>
    )
}

export default About;