/** This is Main Server file that starts Rolling Records store backend. */
/** Import config from dotenv */
import { config } from 'dotenv';
config();
/** Connect to Database */
import { createConnection } from './conf/dbConnection';
createConnection();

import cors from 'cors';
import session from 'express-session';
import { initialize, session as passportSession } from 'passport';
import express, { Request, Response, NextFunction } from 'express';
import MongoStore from 'connect-mongo';
import errorHandler from './middleware/errorHandler';
import { Cart } from './models/cart/cart.model';
import cartRoutes from './routes/cart/cart';
import productRoutes from './routes/products';
import authRoutes from './routes/auth';
import profileRoutes from './routes/profile';
import ordersRoutes from './routes/orders';

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
require('./conf/passportConf');

/** Setup cart */
app.use((request: Request, _: Response, next: NextFunction) => {
    try {
        if (!request.session.cart) {
            console.log(request.session.cart);
            console.log('no session cart');
            const cart = new Cart({});
            request.session.cart = cart;
            next();
        } else {
            console.log('session cart is there');
            next();
        }
    } catch (err) {
        return next(err);
    }
});

/** Routes used in app */
app.use('/', productRoutes);
app.use('/', authRoutes);
app.use('/cart', cartRoutes);
app.use('/profile/:id', profileRoutes);
app.use('/orders', ordersRoutes);

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
