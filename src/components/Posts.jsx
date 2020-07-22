import {WrapPosts, PostPrev, PostTitle, PostText} from "../styles";
import Link from "next/link";

const Posts = (props) => {

    let posts = props.posts;

    return (
        <WrapPosts>
            {posts && posts.reverse().map(post =>{
                    if(Object.keys(post).length < 3) return

                let maxStrLength = 90;
                let body =( post.body.length > maxStrLength)
                    ? post.body.slice(0,maxStrLength) + '...'
                    : post.body.slice(0,maxStrLength)


                    return (
                        <Link as={"/post/"+post.id}
                              href={"/post/[slug]"}
                              key={post.id}
                        >
                        <PostPrev>
                            <div>
                                <img src="https://source.unsplash.com/400x300/?nature" alt="image"/>
                            </div>
                            <div>
                            <PostTitle>{post.title}</PostTitle>
                            <PostText>{body}</PostText>
                            </div>
                        </PostPrev>
                        </Link>
                    )
                }
            )}
        </WrapPosts>
    )
};

export default Posts;