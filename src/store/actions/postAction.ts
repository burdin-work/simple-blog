import {GET_CURRENT_POST, GET_POSTS, UPDATE_NEW_POST_BODY, UPDATE_NEW_POST_TITLE} from '../types';
import {Dispatch} from "redux";
import {AppStateType} from "../reducers";
import {profilesApi} from "../../api/api";

// types
export type ReceivedPostType = {
    id?: string
    title?: string
    body?: string
}
export type ReceivedRequestType = Array<ReceivedPostType>

export type PostDataType = {
    title: string,
    body: string
}

export type APIResponseType<D = {}> = {
    data: D,
    method: 'POST',
    header: object,
    url: string
}


export type ActionsTypes = updateNewPostTextType | updateNewPostTitleType | setPostsType | setCurrentPostType


// actions
//for sync
type updateNewPostTextType = {
    type: typeof UPDATE_NEW_POST_BODY,
    newBodyText: string,
}
export const updateNewPostText = (body: string): updateNewPostTextType => ({
    type: UPDATE_NEW_POST_BODY,
    newBodyText: body,
});

type updateNewPostTitleType = {
    type: typeof UPDATE_NEW_POST_TITLE,
    newPostTitle: string,
}
export const updateNewPostTitle = (title: string) : updateNewPostTitleType => ({
    type: UPDATE_NEW_POST_TITLE,
    newPostTitle: title,
});

//for async
type setPostsType = {
    type: typeof GET_POSTS
    payload: ReceivedRequestType
}
const setPosts = (resPosts: ReceivedRequestType): setPostsType  => ({
    type: GET_POSTS,
    payload: resPosts
});

type setCurrentPostType = {
    type: typeof GET_CURRENT_POST,
    payload: ReceivedPostType
}
const setCurrentPost = (currentPost: ReceivedPostType): setCurrentPostType => ({
    type: GET_CURRENT_POST,
    payload: currentPost
});


// thunks
export const fetchCurrentPost = (id: string) => async (dispatch: Dispatch<ActionsTypes>, getState : () => AppStateType ) => {
    let currentPost = await profilesApi.getCurrentPost(id);
    dispatch(setCurrentPost(currentPost));
};


export const fetchPosts = () => async (dispatch: Dispatch<ActionsTypes>, getState : () => AppStateType ) => {
    let resPosts = await  profilesApi.getPosts();
    dispatch(setPosts(resPosts));
};

export const addNewPost = (title: string, body: string) => async () => {
    const data = {
        title,
        body
    };

    if (data.title.length + data.body.length > 5) {
        await profilesApi.addNewPost(data);
    } else console.log('It too short. Add more symbols...');

};
