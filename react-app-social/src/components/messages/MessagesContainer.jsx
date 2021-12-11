import {addMessageAction, updateNewMessageTextAction} from "../../redux/MessageReducer";
import Messages from "./Messages";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        messagePage: state.messagePage
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAddMessage: () => {
            dispatch(addMessageAction());
            dispatch(updateNewMessageTextAction(''));
        },
        onChangeMessage: (text) => {
            dispatch(updateNewMessageTextAction(text));
        }
    }
};

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;