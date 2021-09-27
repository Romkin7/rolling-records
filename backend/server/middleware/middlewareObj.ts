import { NextFunction, Request, Response } from 'express';
import { Types } from 'mongoose';
import { errorMessages } from '../data/errorMessages';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const validateMongoDBId = function (
    request: Request,
    response: Response,
    next: NextFunction,
) {
    // Check if the id user's looking for is valid
    if (!Types.ObjectId.isValid(request.params.id)) {
        return response.status(404).json({
            message: 'Valitettavasti hakemaanne tuotetta ei löytynyt!',
        });
    } else {
        return next();
    }
};
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
