import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import { log } from '../utils/log';
import { connectRedis, disconnectRedis } from '../conf/redisConf';
import { errorMessages } from '../data/errorMessages';
import { Cart } from '../models/cart/cart.model';
import { UserDoc } from '../models/users/users.model';

export function authorize(
    request: Request,
    response: Response,
    next: NextFunction,
) {
    const authHeader = request.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null)
        return response
            .status(401)
            .json({ message: errorMessages.jwtMissingError });

    verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user: UserDoc) => {
        log(err);
        if (err)
            return response
                .status(403)
                .json({ message: errorMessages.jwtExpiredError });
        request.user = user;
        next();
    });
}

export const isLoggedIn = (
    request: Request,
    response: Response,
    next: NextFunction,
): void | Response<unknown, Record<string, unknown>> => {
    if (request.isAuthenticated()) {
        return next();
    } else {
        return response.status(401).json({
            message: errorMessages.notLoggedInError,
        });
    }
};

export const hasOwnershipForAccount = (
    request: Request,
    response: Response,
    next: NextFunction,
): void | Response<unknown, Record<string, unknown>> => {
    if (
        (request.user && request.user._id.equals(request.params.id)) ||
        request.user.admin.isAdmin
    ) {
        return next();
    } else {
        return response
            .status(403)
            .json({ message: errorMessages.profileOwnershipError });
    }
};

export const setUpCart = async (
    request: Request,
    _response: Response,
    next: NextFunction,
) => {
    const cartId = request.query ? request.query.cartId : request.body.cartId;
    const redisClient = await connectRedis();
    redisClient.get(`cart-${cartId}`, (_err, existingCart) => {
        if (!existingCart) {
            const cart = new Cart({});
            redisClient.setex(
                `cart-${cartId}`,
                3600 /** 1 hour */,
                JSON.stringify(cart),
            );
            disconnectRedis(redisClient);
            next();
        } else {
            next();
        }
    });
};
