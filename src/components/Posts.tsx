import React, { useEffect } from 'react';
import { WrapPosts, PostPrev, PostTitle, PostText } from '../styles';
import Link from 'next/link';
import { ReceivedPostsType } from '../store/types';
import { connect, ConnectedProps, useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../store/actions/postAction';
import { AppStateType } from '../store/reducers';
import Preloader from '../common/Preloader';

const mapState = (state: AppStateType) => ({
    ...state,
});

const connector = connect(mapState, {});
type PropsFromRedux = ConnectedProps<typeof connector>;

const Posts: React.FC<PropsFromRedux> = (props) => {
    const dispatch = useDispatch();
    const { posts } = useSelector((state: AppStateType) => {
        return state.posts;
    });

    useEffect(() => {
        dispatch(fetchPosts());
    }, []);

    if (props.posts.isFetching) {
        return <Preloader />;
    }

    return (
        <WrapPosts>
            {posts &&
                posts.reverse().map((post: ReceivedPostsType) => {
                    if (Object.keys(post).length < 3) return;

                    const maxStrLength = 90;
                    const body =
                        post.body.length > maxStrLength
                            ? post.body.slice(0, maxStrLength) + '...'
                            : post.body.slice(0, maxStrLength);

                    return (
                        <Link as={'/post/' + post.id} href={'/post/[slug]'} key={post.id}>
                            <PostPrev>
                                <div>
                                    <img src="https://source.unsplash.com/400x300/?nature" alt="image" />
                                </div>
                                <div>
                                    <PostTitle>{post.title}</PostTitle>
                                    <PostText>{body}</PostText>
                                </div>
                            </PostPrev>
                        </Link>
                    );
                })}
        </WrapPosts>
    );
};

export default connector(Posts);
