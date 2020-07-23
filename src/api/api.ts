import axios from "axios"
import {APIResponseType, PostDataType, ReceivedPostType, ReceivedRequestType} from "../store/actions/postAction";
import qs from "qs";


// api
export const profilesApi = {
    getPosts() {
        return axios.get<ReceivedRequestType>('https://simple-blog-api.crew.red/posts') .then(res => res.data)
    },

    getCurrentPost(id: string) {
        return  axios.get<ReceivedPostType>('https://simple-blog-api.crew.red/posts/' + id).then(res => res.data);
    },

    addNewPost(data: PostDataType) {
        const options: APIResponseType = {
            method: 'POST',
            header: {'Content-Type': 'application/json'},
            data: qs.stringify(data),
            url: 'https://simple-blog-api.crew.red/posts',
        };
        axios(options).then(res => res);
    }
}