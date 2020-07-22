import {connect, useDispatch} from "react-redux";
import {useEffect} from "react";
import {fetchCurrentPost} from "../../store/actions/postAction";
import {Global, Post, PostImg, PostText, PostTitle} from "../../styles";
import Head from 'next/head'

const OpenedPostContainer = (props) => {

    let id = props.query.slug;

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchCurrentPost(id))
    },[])


    return <OpenedPost post={props.currentPost}/>
}

const OpenedPost = (props) => {

    const post = props.post;
    return <>{post &&
    <Global>
        <Head>
            <h1>Simple Blog</h1>
        </Head>
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
    }</>

};

OpenedPostContainer.getInitialProps = ({query}) => {
    return {query}
}


const mapStateToProps = state => {
    return({
        posts: state.posts,
        currentPost: state.posts.currentPost
    })
};

export default connect(mapStateToProps)(OpenedPostContainer);