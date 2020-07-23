import { GET_CURRENT_POST, GET_POSTS, UPDATE_NEW_POST_BODY, UPDATE_NEW_POST_TITLE } from '../types';
import { Dispatch } from 'redux';
import { profilesApi } from '../../api/api';

// types
export type ReceivedPostType = {
    id?: string;
    title?: string;
    body?: string;
};
export type ReceivedRequestType = Array<ReceivedPostType>;

export type PostDataType = {
    title: string;
    body: string;
};

export type ActionsTypes = updateNewPostTextType | updateNewPostTitleType | setPostsType | setCurrentPostType;

// actions
//for sync
type updateNewPostTextType = {
    type: typeof UPDATE_NEW_POST_BODY;
    newBodyText: string;
};
export const updateNewPostText = (body: string): updateNewPostTextType => ({
    type: UPDATE_NEW_POST_BODY,
    newBodyText: body,
});

type updateNewPostTitleType = {
    type: typeof UPDATE_NEW_POST_TITLE;
    newPostTitle: string;
};
export const updateNewPostTitle = (title: string): updateNewPostTitleType => ({
    type: UPDATE_NEW_POST_TITLE,
    newPostTitle: title,
});

//for async
type setPostsType = {
    type: typeof GET_POSTS;
    payload: ReceivedRequestType;
};
const setPosts = (resPosts: ReceivedRequestType): setPostsType => ({
    type: GET_POSTS,
    payload: resPosts,
});

type setCurrentPostType = {
    type: typeof GET_CURRENT_POST;
    payload: ReceivedPostType;
};
const setCurrentPost = (currentPost: ReceivedPostType): setCurrentPostType => ({
    type: GET_CURRENT_POST,
    payload: currentPost,
});

// thunks
type fetchCurrentPostType = (id: string) => (dispatch: Dispatch<ActionsTypes>) => void;
export const fetchCurrentPost: fetchCurrentPostType = (id) => async (dispatch) => {
    const currentPost = await profilesApi.getCurrentPost(id);
    dispatch(setCurrentPost(currentPost));
};

type fetchPostsPostType = () => (dispatch: Dispatch<ActionsTypes>) => void;
export const fetchPosts: fetchPostsPostType = () => async (dispatch) => {
    const resPosts = await profilesApi.getPosts();
    dispatch(setPosts(resPosts));
};

type addNewPostType = (title: string, body: string) => () => void;
export const addNewPost: addNewPostType = (title, body) => async () => {
    const data = {
        title,
        body,
    };

    if (data.title.length + data.body.length > 5) {
        await profilesApi.addNewPost(data);
    } else console.log('It too short. Add more symbols...');
};
