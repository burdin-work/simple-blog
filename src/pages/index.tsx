import { Button_CreatePost, Global, Header, Main } from '../styles';
import Posts from '../components/Posts';

const Home: React.FC = () => (
    <Global>
        <Header>
            <title>Simple Blog</title>
            <Button_CreatePost href="/new">Add New Post</Button_CreatePost>
        </Header>

        <Main>
            <h1 className="title">Simple Blog</h1>
            <Posts />
        </Main>
    </Global>
);

export default Home;
