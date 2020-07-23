import { connect, ConnectedProps, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Global, Header, HomeLink, Post, PostImg, PostText, PostTitle } from '../../styles';
import React from 'react';
import { fetchCurrentPost } from '../../store/actions/postAction';
import { AppStateType } from '../../store/reducers';
import { NextPage, NextPageContext } from 'next';

const mapState = (state: AppStateType) => {
    return {
        posts: state.posts,
        currentPost: state.posts.currentPost,
    };
};

const connector = connect(mapState, {});
type PropsFromRedux = ConnectedProps<typeof connector>;

type urlSlug = {
    slug: string;
};

type Props = PropsFromRedux & {
    query: urlSlug;
};

const OpenedPost: NextPage = (props: Props) => {
    const id = props.query.slug;

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchCurrentPost(id));
    }, []);

    const post = props.currentPost;
    return (
        <>
            {post && (
                <Global>
                    <Header>
                        <HomeLink href="/">
                            <h1>Simple Blog</h1>
                        </HomeLink>
                    </Header>
                    <Post>
                        <div>
                            <PostImg src="https://source.unsplash.com/800x600/?nature" alt="image" />
                        </div>
                        <div>
                            <PostTitle>{post.title}</PostTitle>
                            <PostText>{post.body}</PostText>
                        </div>
                    </Post>
                </Global>
            )}
        </>
    );
};

OpenedPost.getInitialProps = ({ query }: NextPageContext) => {
    return { query };
};

export default connector(OpenedPost);
