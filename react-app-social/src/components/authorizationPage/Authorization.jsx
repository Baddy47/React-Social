import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setAuthorizationData, setAuthorizationUser} from "../../redux/authorizationReducer";
import axios from "axios";
import styles from './Authorization.module.css';


const Authorization = () => {

    const dispatch = useDispatch();
    const authData = useSelector(state => state.authorization);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('field is empty\n');
    const [passwordError, setPasswordError] = useState('field is empty\n');
    const [savePassword, setSavePassword] = useState(false);
    const [error, setError] = useState('')

    const emailChange = (event) => {
        setEmail(event.target.value)
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(String(event.target.value).toLowerCase())) {
            setEmailError('incorrect data')
        } else {
            setEmailError('')
        }
    }
    const passwordChange = (event) => {
        setPassword(event.target.value)
        if (event.target.value.length < 4) {
            setPasswordError('minimum length 6')
            if (!event.target.value) {
                setPasswordError('field is empty')
            }
        } else {
            setPasswordError('')
        }
    }

    const savePasswordChange = (e) => {
        if (e.target.checked === true && password) {
            localStorage.setItem('password', JSON.stringify(password))
            setSavePassword(!savePassword)
        }
        if (e.target.checked === false) {
            localStorage.removeItem('password')
            setSavePassword(!savePassword)
        }
    }

    const submitForm = (e) => {
        e.preventDefault()

        let formData = {
            email: email,
            password: password,
            rememberMe: savePassword
        }
        axios.post('https://social-network.samuraijs.com/api/1.0/auth/login',
            formData,
            {withCredentials: true,
            headers: {"API-KEY": "2acfc1b3-60e7-4085-9e02-9cf6596045ef"}})
            .then((response) => {
                dispatch(setAuthorizationData(response.data))
                if (response.data.resultCode === 1) {
                    setError('Incorrect Email or Password')
                } else {return  setError('')}
            })
    }

    useEffect(() => {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me',
            {withCredentials: true})
            .then(response => {
                if (authData.data.userId === response.data.data.id) {
                    dispatch(setAuthorizationUser(response.data))
                    localStorage.setItem('authData', JSON.stringify(response.data))
                }
            })
    }, [authData, dispatch])

    if (authData.resultCode === null)
    return (
        <div id={'login'} className={styles.authorPageContent}>
            <div className={styles.authContainer}>
                <h3>Sign In</h3>
                {(error) && <div style={{color: 'red'}}>{error}</div>}
                <form onSubmit={submitForm}>
                    {(emailError) && <div style={{color: 'red'}}>{emailError}</div>}
                    <div className={styles.authItemForm}>
                        <input onChange={(event) => emailChange(event)} className={styles.InputItem}
                               value={email}
                               name={'email'}
                               type="text"
                               placeholder={'Email'}/>
                    </div>

                    {(passwordError) && <div style={{color: 'red'}}>{passwordError}</div>}
                    <div className={styles.authItemForm}>
                        <input onChange={(e) => passwordChange(e)} className={styles.InputItem}
                               value={password}
                               name={'password'}
                               type="password"
                               placeholder={'Password'}/>
                    </div>
                    <div className={styles.authItemForm}>
                        <input onChange={(e) => savePasswordChange(e)}
                               className={styles.checkItem} name={'rememberMe'}
                               type="checkbox" id='9176' checked={savePassword}/>
                        <label form="9176">Remember Password</label>
                    </div>
                    <div className={styles.authItemForm}>
                        <input className={styles.submitItem} type="submit" value={'Sign in'}/>
                    </div>
                </form>
            </div>
        </div>
    )
    if (authData.resultCode === 0)
        return <></>
};

export default Authorization;