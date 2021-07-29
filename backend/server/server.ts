/** This is Main Server file that starts Rolling Records store backend. */
/** Import config from dotenv */
import { config } from 'dotenv';
config();

import cors from 'cors';
import session from 'express-session';
import { initialize, session as passportSession } from 'passport';
import express, { Request, Response, NextFunction } from 'express';
import MongoStore from 'connect-mongo';
import errorHandler from './utils/errorHandler';
import { Cart } from './models/cart/cart.model';
import { ExtendedSession } from './types';

/** Connect to Database */
require('./dbConnection');

const app = express();

/** Enable CORS */
app.use(cors());
/** Initialize session and passport */
app.use(
    session({
        secret: process.env.SECRET as string,
        store: MongoStore.create({
            mongoUrl:
                process.env.NODE_ENV === 'production'
                    ? process.env.MONGODB_URI
                    : process.env.DATABASE,
            ttl: 1 * 24 * 60 * 60, // = 1 day. Default
            autoRemove: 'native', // Default
        }),
        resave: false,
        saveUninitialized: false,
        proxy: true,
    }),
);
app.use(initialize());
app.use(passportSession());
app.use(express.json());

/** Setup cart */
app.use((request: Request, _: Response, next: NextFunction) => {
    try {
        const session = request.session as ExtendedSession;
        if (!session.cart) {
            let cart = new Cart({});
            session.cart = cart;
            next();
        } else {
            next();
        }
    } catch (err) {
        return next(err);
    }
});

/** Routes used in app */

app.use(errorHandler);

/** Listen for requests and start server */
let server = app.listen(app.get('port'), app.get('ip'), 1, () => {
    console.log('Rolling Records startattu palvelimella: ' + app.get('port'));
});
function cleanup() {
    server.connections = 0;
}

process.on('SIGINT', cleanup);
process.on('SIGTERM', cleanup);
