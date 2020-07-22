import axios from 'axios'
import qs from 'qs';
import {GET_CURRENT_POST, GET_POSTS, UPDATE_NEW_POST_BODY, UPDATE_NEW_POST_TITLE} from "../types";


export const fetchposts = () => async dispatch => {

    const res = await axios.get('https://simple-blog-api.crew.red/posts');
    dispatch({
        type: GET_POSTS,
        payload: res.data
    })
}

export const fetchCurrentPost = (id) => async dispatch => {
    const res = await axios.get('https://simple-blog-api.crew.red/posts/' + id);
    dispatch({
        type: GET_CURRENT_POST,
        payload: res.data
    })
}

export const addNewPost = (title, body) => async () => {
    const data = {'title': title, 'body': body};

    const options = {
        method: 'POST',
        header: {'Content-Type': 'application/json'},
        data: qs.stringify(data),
        url: 'https://simple-blog-api.crew.red/posts',
    };

    axios(options)
        .then(response => console.log(response));
}


export const updateNewPostText = body => ({
    type: UPDATE_NEW_POST_BODY,
    newBodyText: body
});
export const updateNewPostTitle = title => ({
    type: UPDATE_NEW_POST_TITLE,
    newPostTitle: title
});
