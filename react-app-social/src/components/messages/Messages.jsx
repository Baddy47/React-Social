import * as styles from './Messages.module.css';
import React from "react";
import MessageUser from "./messageUser/MesssageUser";
import MessageItem from "./messageItem/MessageItem";

const Messages = ({messagePage, onAddMessage, onChangeMessage}) => {

    let messagesUserElements = messagePage.userData.map(elem =>
        (<MessageUser name={elem.name} id={elem.id} key={elem.id} />));
    let messagesItemElements = messagePage.messageData.map(elem =>
        (<MessageItem message={elem.message} key={elem.id} />));
    let newMessageText = messagePage.newTextMessage;

    let addMessage = () => {
        onAddMessage();
        onChangeMessage();
    };
    let changeMessage = (event) => {
        let text = event.target.value;
        onChangeMessage(text);
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
                <div>{ messagesItemElements }</div>
                <div className={styles.textArea}>
                    <textarea onChange={changeMessage}
                              value={newMessageText}
                              placeholder="Some text"/>
                    <button onClick={addMessage}>Send</button>
                </div>
            </div>

        </div>
    )
};

export default Messages;