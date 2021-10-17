import { NextFunction, request, Request, Response } from 'express';
import { connectRedis, disconnectRedis } from '../conf/redisConf';
import { errorMessages } from '../data/errorMessages';
import { Cart } from '../models/cart/cart.model';

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
export const notLoggedIn = (
    request: Request,
    response: Response,
    next: NextFunction,
): void | Response<unknown, Record<string, unknown>> => {
    if (request.user && request.user.user.isVerified) {
        return response.status(401).json({
            message: errorMessages.loggedInError,
        });
    } else {
        return next();
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
