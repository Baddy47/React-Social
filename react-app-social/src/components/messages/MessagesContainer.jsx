import styles from './Messages.module.css';
import React, {useCallback, useEffect, useRef, useState} from "react";
import MessageUser from "./messageUser/MesssageUser";
import MessageItem from "./messageItem/MessageItem";
import {useDispatch, useSelector} from "react-redux";
import {addMessage, updateMessageText} from "../../redux/MessageReducer";
import {useParams} from "react-router-dom";

const MessagesContainer = () => {

    let {userChat} = useParams();
    const messagesData = useSelector(state => state.message);
    const getUsersFromState = useSelector(state => state.users)
    const dispatch = useDispatch();
    const scroll = useRef();


    const [subscribedUsers, setSubscribedUsers] = useState([]);
    useEffect(() => {
        setSubscribedUsers(getUsersFromState.users.filter(user => user.followed === true))
    }, [getUsersFromState.users]);


    const [searchValue, setSearchValue] = useState('');
    const filterSearchName = subscribedUsers.filter(user => {
        return user.name.toLowerCase().includes(searchValue.toLowerCase())
    })

    let messagesUserElements = filterSearchName.map((user, index) => {
        return (
            <MessageUser name={user.name} id={user.id} photos={user.photos} key={index}/>
        )
    });

    let messagesItemElements = messagesData.messageData.map(elem =>
        (<MessageItem idChat={elem.idChat} userChat={userChat} message={elem.message} key={elem.id} id={elem.id}/>));
    let newMessageText = messagesData.newTextMessage;

    let messageItemChooseUser = getUsersFromState.users.filter(item => item.id === +userChat)
    let messagesChooseUserElements = messageItemChooseUser.map((user, index) => {
        return (
            <MessageUser name={user.name} photos={user.photos} key={index}/>
        )
    });

    const onAddMessage = useCallback(() => {
        dispatch(addMessage(userChat));
        scroll.current.scrollTo(0, 15000);
        dispatch(updateMessageText(''));
    }, [dispatch, userChat]);

    let changeMessage = (event) => {
        let text = event.target.value;
        dispatch(updateMessageText(text));
    };

    const changeMessageKey = (event) => {
        if (event.code === 'Enter') {
            dispatch(addMessage(userChat));
            scroll.current.scrollTo(0, 15000);
            dispatch(updateMessageText(''));
        }
    }

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
                <div>{messagesUserElements}</div>
            </div>
            {userChat
            ? <div className={styles.messageWindow}>
                    <div className={styles.messagesUsers}>{messagesChooseUserElements}</div>
                    <div ref={scroll} className={styles.messagesAreaWrapper}>
                        <div onWheel={changeWheelPosition} className={styles.messagesArea}>{messagesItemElements}</div>
                    </div>
                    <div className={styles.textArea}>
                    <textarea onKeyUp={changeMessageKey} onChange={(event) => changeMessage(event)}
                              value={newMessageText}
                              placeholder="Some text"/>
                        <button onClick={onAddMessage}>Send</button>
                    </div>
                </div>
            : <></>}

        </div>
    )
};

export default MessagesContainer;