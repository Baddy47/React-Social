import React, {useState} from "react";
import styles from './Set.module.css';

const Settings = () => {

    const [value, setValue] = useState('');

    const getRandomColor = () => {
        let color = '';
        for (let i = 0; i < 3; i++) {
            let sub = Math.floor(Math.random() * 256).toString(16);
            color += (sub.length === 1 ? '0' + sub : sub);
        }
        return '#' + color;
    }
    const changeTheme = (e) => {
        let color = getRandomColor()
        if (e.target.value === '') {
            document.body.style.backgroundColor = `${color}`
            setValue('1')
        }
        if (e.target.value === '1') {
            document.body.style.backgroundColor = '#17335A'
            setValue('')
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.checkboxContainerWrapper}>
                <div className={styles.checkboxContainer}>
                    <input className={styles.inputItem} onClick={(e) => changeTheme(e)} type="checkbox" name='checkbox' value={`${value}`}/>
                    <span className={styles.checkboxContainerText}>Random Theme</span>
                </div>
            </div>

        </div>
    )
};

export default Settings;