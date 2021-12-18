import Post from "./Post";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        state: state.profilePage.postData,
    }
};

const PostContainer = connect(mapStateToProps)(Post);

export default PostContainer;