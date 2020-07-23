import * as types from '../types';
import {ActionsTypes, ReceivedPostType, ReceivedRequestType} from "../actions/postAction";

type InitialStateType = {
    posts: Array<ReceivedPostType> | null,
    currentPost: ReceivedPostType | null,
    newPost: {
        title: string,
        body: string,
    },
    newBodyText: string,
    newPostTitle: string,
}


const initialState: InitialStateType = {
    posts: null,
    currentPost: {},
    newPost: {
        title: '',
        body: '',
    },
    newBodyText: '',
    newPostTitle: '',
};

export const postReducer = (state = initialState, action: ActionsTypes):
    InitialStateType => {

    switch (action.type) {

        case types.GET_POSTS:
            return {
                ...state,
                posts: action.payload,
            };

        case types.GET_CURRENT_POST:
            return {
                ...state,
                currentPost: action.payload,
            };

        /*case types.ADD_NEW_POST:
            return {
                ...state,
                newPost: action.payload,
            };*/

        case types.UPDATE_NEW_POST_BODY:
            return {
                ...state,
                newBodyText: action.newBodyText,
            };
        case types.UPDATE_NEW_POST_TITLE:
            return {
                ...state,
                newPostTitle: action.newPostTitle,
            };

        default:
            return state;
    }
};