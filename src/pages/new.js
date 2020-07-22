import {connect} from "react-redux";
import {Button, Form, FormWrap, Global, Header, Input, Textarea} from "../styles";
import {addNewPost, updateNewPostText, updateNewPostTitle} from "../store/actions/postAction";

const NewPost = (props) => {


    let onBodyChange = (e) => {
        let body = e.target.value;
        props.updateNewPostText(body);
    }

    let onTitleChange = (e) => {
        let title = e.target.value;
        props.updateNewPostTitle(title);
    }

    let sendNewPost = () => {
        if((props.newPostTitle.length + props.newBodyText.length) > 5){
        props.addNewPost(props.newPostTitle, props.newBodyText);
        }
        else console.log('It too short. Add more symbols...')
    }

    return (
        <Global>
            <Header>
                <h1>Simple Blog</h1>
            </Header>
            <FormWrap>
                <Input type="text"
                       placeholder="title"
                       onChange={onTitleChange} value={props.newPostTitle}
                />
                <Textarea cols="30" rows="10"
                          placeholder="write your post"
                          onChange={onBodyChange} value={props.newBodyText}
                />
                <Button
                    onClick={sendNewPost}
                >Send</Button>
            </FormWrap>
        </Global>
    )
};


const mapStateToProps = state => {
    return({
        posts: state.posts,
        newBodyText: state.posts.newBodyText,
        newPostTitle: state.posts.newPostTitle
    })
};

export default connect(mapStateToProps,
    {updateNewPostText,updateNewPostTitle,addNewPost})(NewPost);