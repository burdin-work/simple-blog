// Posts
export type ReceivedPostsType = {
    body: string;
    id: string;
    title: string;
};

export type ReceivedRequestType = {
    posts: Array<ReceivedPostsType> | null
}


export const GET_POSTS = 'GET_POSTS';
export const GET_CURRENT_POST = 'GET_CURRENT_POST';
export const UPDATE_NEW_POST_BODY = 'UPDATE_NEW_POST_BODY';
export const UPDATE_NEW_POST_TITLE = 'UPDATE_NEW_POST_TITLE';