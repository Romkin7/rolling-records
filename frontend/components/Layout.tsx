import React, { FC } from 'react';
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../sass/main.module.scss';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Application from '../pages/_app';

interface ILayoutProps {
    title: string;
    content: string;
}

const Layout: FC<ILayoutProps> = ({ children, title, content }) => (
    <Application>
        <Head>
            <title>{title}</title>
            <meta name="description" content={content} />
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
        </Head>
        <div className={styles.main}>
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    </Application>
);

export default Layout;
