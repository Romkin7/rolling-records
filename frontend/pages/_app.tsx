import React, { FC } from 'react';
import { Provider } from 'react-redux';
import store from '../store/store';

interface IAppProps {
    Component: any;
    pageProps: any;
}

const Application: FC<IAppProps> = ({ Component, pageProps }) => {
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    );
};

export default Application;
