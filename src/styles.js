import styled from 'styled-components';

export const Global = styled.div`
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
        Helvetica Neue, sans-serif;
    color: rgba(0, 0, 0, 0.87);
    box-sizing: content-box;
`;

export const Header = styled.header`
    display: block;
`;

export const HomeLink = styled.a`
    cursor: pointer;
    text-decoration: none;
    color: inherit;
`;

export const Button_CreatePost = styled.a`
    background-color: #4caf50;
    border: none;
    color: white;
    padding: 9px 64px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    float: right;
    margin-top: 6px;
    margin-right: 3%;
    cursor: pointer;
`;

export const Main = styled.div`
    max-width: 95%;
    margin: 0 auto;
`;

export const WrapPosts = styled.div`
    max-width: 1500px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
`;

export const PostPrev = styled.div`
    width: 400px;
    height: 400px;
    border: 1px solid rgba(0, 0, 0, 0.15);
    border-radius: 0 0 8px 8px;
    box-shadow: 0 0.5px rgba(0, 0, 0, 0.35);
    margin: 2rem;
    display: block;
    cursor: pointer;
    overflow: hidden;
`;

export const Post = styled(PostPrev)`
    width: 800px;
    height: 100%;
    margin: 0 auto;
    min-height: 800px;
    cursor: initial;
`;

export const PostTitle = styled.h3`
    margin: 0.5rem 1rem;
`;

export const PostText = styled.p`
    margin: 0 1rem;
    font-style: italic;
    color: #4d5156;
`;

export const PostImg = styled.img`
    margin: 0 auto;
`;

export const FormWrap = styled.div`
    margin: 0 auto;
    max-width: 65%;
    background-color: rgba(205, 219, 219, 0.22);
    padding: 0.5rem 0;
    box-shadow: inset 0px 0px 3px rgba(0, 0, 0, 0.9);
    border-radius: 5px;
`;

export const Input = styled.input`
    margin: 1rem 2rem;
    width: 75%;
`;

export const Textarea = styled.textarea`
    margin: 1rem 2rem;
    width: 75%;
    resize: none;
    min-height: 400px;
`;

export const Button = styled.button`
    margin: 1rem 2rem;
    width: 40%;
    height: 40px;
    font-family: -apple-system, Droid Sans, sans-serif;
    position: relative;
    position: relative;
    z-index: 1;
    color: black;
    font-size: 135%;
    font-weight: 700;
    text-decoration: none;
    padding: 0.25em 0.5em;
`;

export const PreloaderWrap = styled.div`
    text-align: center;
    height: 300px;
    padding: 150px;
`;
