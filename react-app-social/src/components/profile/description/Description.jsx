import * as styles from './Description.module.css';
import userPhoto from '../../../accets/User.jpg';
import backgroundProfile from '../../../accets/backgraundProfile.jpg';
import {useContext, useState} from "react";
import {MyProfileContext} from "../myProfile/MyProfileContainer";

const Description = (props) => {

    const {setValueBtnStatus} = useContext(MyProfileContext);
    const [valueInput, setValueInput] = useState('')

    const changeStatus = (e) => {
        setValueInput(e.currentTarget.value)
    }
    const onChangeStatus = (e) => {
        e.target.setAttribute('contenteditable', 'true')
        setValueBtnStatus(e.target.textContent)
    }
    const addStatus = (e) => {
        e.preventDefault()
        setValueBtnStatus(valueInput)
        setValueInput('')
    }

    return (
        <div className={styles.profileContent}>
            <div className={styles.profilePhotoItem}>
                <img src={backgroundProfile}  alt='Avatar'/>
                <div className={styles.profilePhoto}>
                    <img src={props.profileData.photos.large !==null
                        ? props.profileData.photos.large
                        : userPhoto} alt="Avatar"/>
                </div>
            </div>
            <div className={styles.profileName}>{props.profileData.fullName}</div>
            <div onClick={onChangeStatus} className={styles.profileStatus}>
                {props.profileStatus
                    ? props.profileStatus
                    : <div className={styles.profileStatusForm}>
                        <form onSubmit={addStatus}>
                            <input onChange={changeStatus} type='text' value={valueInput} name={'valueStatus'} placeholder={'Add Status'}/>
                            <input className={styles.profileStatusBtnSubmit} type="submit" value={'Send'}/>
                        </form>

                    </div>}
            </div>
        </div>
    )
}

export default Description;