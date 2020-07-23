import {connect, ConnectedProps} from 'react-redux';
import { Button, Form, FormWrap, Global, Header, Input, Textarea } from '../styles';
import { addNewPost, updateNewPostText, updateNewPostTitle } from '../store/actions/postAction';
import Link from "next/link";
import {AppStateType} from "../store/reducers";
import React from "react";

const mapState = (state: AppStateType) => {
    return {
        posts: state.posts,
        newBodyText: state.posts.newBodyText,
        newPostTitle: state.posts.newPostTitle,
    };
};


const mapDispatch = {
    updateNewPostText,
    updateNewPostTitle,
    addNewPost
};


const connector = connect(mapState, mapDispatch)
type Props = ConnectedProps<typeof connector>


const NewPost: React.FC<Props> = (props) => {
    let onBodyChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value;
        props.updateNewPostText(body);
    };

    let onTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let title = e.target.value;
        props.updateNewPostTitle(title);
    };

    let sendNewPost = () => {
            props.addNewPost(props.newPostTitle, props.newBodyText);
    };

    return (
        <Global>
            <Header>
                <h1>Simple Blog</h1>
            </Header>
            <FormWrap>
                <Input type="text" placeholder="title" onChange={onTitleChange} value={props.newPostTitle} />
                <Textarea
                    placeholder="write your post"
                    onChange={onBodyChange}
                    value={props.newBodyText}
                />
                <Link href="/">
                <Button onClick={sendNewPost}>Send</Button>
                </Link>
            </FormWrap>
        </Global>
    );
};



export default connector(NewPost);
