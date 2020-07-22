import PostsContainer from "../containers/PostsContainer";
import {Button_CreatePost, Global, Header, Main} from "../styles";

const Home = () =>  (
        <Global>
            <Header>
                <title>Simple Blog</title>
                <Button_CreatePost href="/new">Add New Post</Button_CreatePost>
            </Header>

            <Main>
                <h1 className="title">
                    Simple Blog
                </h1>
                <PostsContainer/>
            </Main>

            <footer>
                All rights reserved
            </footer>
        </Global>
)

export default Home;