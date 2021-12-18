import {addPostAction, updateNewPostTextAction} from "../../../redux/profileReducer";
import CreatePost from "./CreatePost";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        newTextData: state.profilePage.newTextData
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAddPost: () => {
            dispatch(addPostAction());
            dispatch(updateNewPostTextAction(''));
        },
        onChangePost: (text) => {
            dispatch(updateNewPostTextAction(text));
        }
    }
};

const CreatePostContainer = connect(mapStateToProps, mapDispatchToProps)(CreatePost);

export default CreatePostContainer;