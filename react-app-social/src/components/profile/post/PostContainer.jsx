import Post from "./Post";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        state: state.profile.postData,
    }
};

const PostContainer = connect(mapStateToProps)(Post);

export default PostContainer;