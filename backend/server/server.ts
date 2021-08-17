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

import productRoutes from './routes/products';
import authRoutes from './routes/auth';

const app = express();

/** Set PORT & IP */
app.set('port', process.env.PORT || 8080);
app.set('ip', process.env.IP || '0.0.0.0');

/** Enable CORS */
app.use(cors());
app.use(express.json());
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
require('./utils/passportConf');

/** Setup cart */
app.use((request: Request, _: Response, next: NextFunction) => {
    try {
        const session = request.session as ExtendedSession;
        if (!session.cart) {
            const cart = new Cart({});
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
app.use('/', productRoutes);
app.use('/', authRoutes);

app.use(errorHandler);

/** Listen for requests and start server */
const server = app.listen(app.get('port'), app.get('ip'), 1, () => {
    console.log('Rolling Records startattu palvelimella: ' + app.get('port'));
});
function cleanup() {
    server.connections = 0;
}

process.on('SIGINT', cleanup);
process.on('SIGTERM', cleanup);
