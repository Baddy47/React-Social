import styles from './Messages.module.css';
import React from "react";
import MessageUser from "./messageUser/MesssageUser";
import MessageItem from "./messageItem/MessageItem";
import {useDispatch, useSelector} from "react-redux";
import {addMessage, updateMessageText} from "../../redux/MessageReducer";

const MessagesContainer = () => {

    const messagesData = useSelector(state => state.message);
    const dispatch = useDispatch();

    let messagesUserElements = messagesData.userData.map(elem =>
        (<MessageUser name={elem.name} id={elem.id} key={elem.id} />));
    let messagesItemElements = messagesData.messageData.map(elem =>
        (<MessageItem message={elem.message} key={elem.id} />));
    let newMessageText = messagesData.newTextMessage;

    let onAddMessage = () => {
        dispatch(addMessage());
        dispatch(updateMessageText(''));
    };
    let changeMessage = (event) => {
        let text = event.target.value;
        dispatch(updateMessageText(text));
    };

    return (
        <div className={styles.messages}>

            <div className={styles.messagesUsers}>
                <form className={styles.massageSearch}>
                    <input type='search' placeholder='Search'/>
                </form>
                <div>{ messagesUserElements }</div>
            </div>

            <div className={styles.messageWindow}>
                <div className={styles.messagesArea}>{ messagesItemElements }</div>
                <div className={styles.textArea}>
                    <textarea onChange={changeMessage}
                              value={newMessageText}
                              placeholder="Some text"/>
                    <button onClick={onAddMessage}>Send</button>
                </div>
            </div>

        </div>
    )
};

export default MessagesContainer;