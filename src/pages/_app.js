import { Provider } from 'react-redux';
import { createWrapper } from 'next-redux-wrapper';
import store from '../store/store';

const MyApp = (props) => {
    const { Component, pageProps } = props;

    return (
        <Provider store={store}>
            <Component {...pageProps}></Component>
        </Provider>
    );
};

const makestore = () => store;
const wrapper = createWrapper(makestore);

export default wrapper.withRedux(MyApp);
