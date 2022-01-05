import styles from './Messages.module.css';
import React, {useCallback, useEffect, useRef, useState} from "react";
import MessageUser from "./messageUser/MesssageUser";
import MessageItem from "./messageItem/MessageItem";
import {useDispatch, useSelector} from "react-redux";
import {addMessage, updateMessageText} from "../../redux/MessageReducer";

const MessagesContainer = (callback, deps) => {

    const messagesData = useSelector(state => state.message);
    const getUsersFromState = useSelector(state => state.users)
    const dispatch = useDispatch();
    const scroll = useRef();

    const [subscribedUsers, setSubscribedUsers] = useState([]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    // const getSubscribedUsers = () => {
    //     // !!!для получения подписанных пользователей с сервера!!!
    //     // axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=12?page=1`)
    //     //     .then((response) => {
    //     //         console.log(response.data.items)
    //     //         if (subscribedUsers.length === 0)
    //     //         setSubscribedUsers(response.data.items)
    //     //     })
    // };

    useEffect(() => {
        setSubscribedUsers(getUsersFromState.users.filter(user => user.followed === true))
    }, [getUsersFromState.users]);
    const [searchValue, setSearchValue] = useState('');
    const filterSearchName = subscribedUsers.filter(user => {
        return user.name.toLowerCase().includes(searchValue.toLowerCase())
    })

    let messagesUserElements = filterSearchName.map((user, index) => {
        return (
            <MessageUser name={user.name} id={user.id} key={index} />
        )
    });
    let messagesItemElements = messagesData.messageData.map(elem =>
        (<MessageItem message={elem.message} key={elem.id} />));
    let newMessageText = messagesData.newTextMessage;

    const onAddMessage = useCallback(() => {
        dispatch(addMessage());
        scroll.current.scrollTo(0, 15000);
        dispatch(updateMessageText(''));
    }, [dispatch]);
    let changeMessage = (event) => {
        let text = event.target.value;
        dispatch(updateMessageText(text));
    };
    const changeWheelPosition = () => {
        let el = scroll.current;
        window.scrollTo(0, el.scrollHeight + el.lastChild.clientHeight)
    };

    return (
        <div className={styles.messages}>

            <div className={styles.messagesUsers}>
                <form className={styles.massageSearch}>
                    <input type='search'
                           placeholder='Search'
                           onChange={(event) => setSearchValue(event.target.value)}/>
                </form>
                <div>{ messagesUserElements }</div>
            </div>

            <div className={styles.messageWindow}>
                <div ref={scroll} className={styles.messagesAreaWrapper}>
                    <div onWheel={changeWheelPosition} className={styles.messagesArea}>{ messagesItemElements }</div>
                </div>
                <div className={styles.textArea}>
                    <textarea onChange={(event) => changeMessage(event)}
                              value={newMessageText}
                              placeholder="Some text"/>
                    <button onClick={onAddMessage}>Send</button>
                </div>
            </div>

        </div>
    )
};

export default MessagesContainer;