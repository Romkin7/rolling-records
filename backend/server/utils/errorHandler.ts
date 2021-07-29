import { Request, Response, NextFunction } from 'express';

/** This errorhandler can send error provided to it via next()
 *  with error object passed to it
 *  custom error object must contain custom message that something wend wrong
 *  and status code of 400 and above
 *  error.status contains statuscode
 *  error.message contains message
 *  =================
 *  IMPORTANT NOTE!!
 * "error.message HAS TO BE CUSTOM MESSAGE"
 *  Never send direct error messages that node produces
 *  for security reasons!
 */
const errorHandler = (
    error: any,
    request: Request,
    response: Response,
    next: NextFunction,
) => {
    return response.status(error.status || 500).json({
        error: {
            message:
                error.message ||
                request.headers.location +
                    ' Ups! Jotain meni pahasti pieleen palvelimella.',
        },
    });
};

export default errorHandler;
