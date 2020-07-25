import * as types from '../types';
import { ActionsTypes, ReceivedPostType } from '../actions/postAction';

type InitialStateType = {
    posts: Array<ReceivedPostType> | null;
    currentPost: ReceivedPostType | null;
    newPost: {
        title: string;
        body: string;
    };
    newBodyText: string;
    newPostTitle: string;
    isFetching: boolean;
};

const initialState: InitialStateType = {
    posts: null,
    currentPost: {},
    newPost: {
        title: '',
        body: '',
    },
    newBodyText: '',
    newPostTitle: '',
    isFetching: false,
};

export const postReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
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
        case types.TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching,
            };

        default:
            return state;
    }
};
