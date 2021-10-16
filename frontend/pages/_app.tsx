import React from 'react';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import store from '../store/store';
import Layout from '../components/Layout';
import Footer from '../components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';
import Rehydrate from '../components/Rehydrate';
import Header from '../components/Header/Header';

type ComponentWithPageLayout = AppProps & {
    Component: AppProps['Component'] & {
        PageLayout?: React.ComponentType;
    };
};

const Application = ({ Component, pageProps }: ComponentWithPageLayout) => {
    return (
        <Provider store={store}>
            <Rehydrate>
                <Head>
                    <title>Rolling Records - Record Shop Helsinki</title>
                    <meta
                        name="description"
                        content="Rolling Records Tmi LP-levykauppa, Ostetaan LP-levyjä, Myydän LP-levyjä, ostetaan vinyyliä, Asiantunteva palvelu. Helsinki, Sörnäinen +358 50 344 55 39 Vaasanpolku 3, liikehuoneisto 6 00500, Helsinki Aukioloajat ma - pe: 11 - 18 la: 11 - 16 su: 12 - 16"
                    />
                    <meta charSet="utf-8" />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1"
                    />
                    <meta
                        name="viewport"
                        content="initial-scale=1.0, width=device-width"
                    />
                    <link
                        rel="andriod-chrome"
                        sizes="192x192"
                        href="/android-chrome-192x192.png"
                    />
                    <link
                        rel="andriod-chrome"
                        sizes="512x512"
                        href="/android-chrome-512x512.png"
                    />
                    <link
                        rel="apple-touch-icon"
                        sizes="180x180"
                        href="/apple-touch-icon.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="32x32"
                        href="/favicon-32x32.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="16x16"
                        href="/favicon-16x16.png"
                    />
                    <link rel="icon" href="/favicon.ico" />
                    <link rel="image_src" href="/images/logo.jpg" />
                    <link rel="manifest" href="/site.webmanifest" />
                    <meta name="theme-color" content="#ffffff" />
                    <script src="https://www.google.com/recaptcha/api.js"></script>
                </Head>
                <Header />
                {Component.PageLayout ? (
                    <Component.PageLayout>
                        <Component {...pageProps} />
                    </Component.PageLayout>
                ) : (
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                )}
                <Footer />
            </Rehydrate>
        </Provider>
    );
};

export default Application;
