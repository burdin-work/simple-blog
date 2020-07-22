import {connect, useDispatch, useSelector} from "react-redux";
import React, {useEffect} from 'react'
import Posts from "../components/Posts";
import {fetchposts} from "../store/actions/postAction";




const PostsContainer = (props) => {

    const dispatch = useDispatch();
    const {posts} = useSelector(state=> state.posts);

    useEffect(()=>{
        dispatch(fetchposts())
    },[])

    return <Posts posts={posts}/>
}



let mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps)(PostsContainer);