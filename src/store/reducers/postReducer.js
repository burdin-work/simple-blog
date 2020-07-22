import * as types from '../types'



const initialState = {
    posts: [],
    currentPost: {},
    newPost: {
        title: null,
        body: null
    },
    //loading: false,
    //error: null,
    newBodyText: '',
    newPostTitle: ''
};

export const postReducer = (state = initialState, action) => {
    switch (action.type) {

        case types.GET_POSTS:
            return {
                ...state,
                posts: action.payload,
                //loading: false,
                //error: null
            }

        case types.GET_CURRENT_POST:
            return {
                ...state,
                currentPost: action.payload,
            }

        case types.ADD_NEW_POST:
            return {
                ...state,
                newPost: action.payload,
            }

        case types.UPDATE_NEW_POST_BODY:
            return {
                ...state,
                newBodyText : action.newBodyText,
            };
        case types.UPDATE_NEW_POST_TITLE:
            return {
                ...state,
                newPostTitle : action.newPostTitle,
            };

        default:
            return state

    }
}

//export const addNewPost = (newPost) => ({type: ADD_NEW_POST, newPost})