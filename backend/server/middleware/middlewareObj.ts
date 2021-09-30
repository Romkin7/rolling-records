import { NextFunction, Request, Response } from 'express';
import { errorMessages } from '../data/errorMessages';

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
