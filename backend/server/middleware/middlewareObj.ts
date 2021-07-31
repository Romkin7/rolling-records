import { NextFunction, Request, Response } from 'express';
import { Types } from 'mongoose';

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
