import axios from 'axios';
import { PostDataType, ReceivedPostType, ReceivedRequestType } from '../store/actions/postAction';
import qs from 'qs';

//types
type APIRequestType = {
    data: string | number;
    method: 'POST';
    header: object;
    url: string;
};

// api
export const profilesApi = {
    getPosts() {
        return axios.get<ReceivedRequestType>('https://simple-blog-api.crew.red/posts');
    },

    getCurrentPost(id: string) {
        return axios.get<ReceivedPostType>('https://simple-blog-api.crew.red/posts/' + id);
    },

    addNewPost(data: PostDataType): void {
        const options: APIRequestType = {
            method: 'POST',
            header: { 'Content-Type': 'application/json' },
            data: qs.stringify(data),
            url: 'https://simple-blog-api.crew.red/posts',
        };
        debugger;
        axios(options).then((res) => res);
    },
};
