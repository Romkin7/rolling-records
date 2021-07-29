import {NextFunction, Router, Request, Response } from 'express';
import User from '../../models/users/users.model';

const router = Router();

router.get("/", async(request: Request, response: Response, next: NextFunction) => {
    try {
        const user = await User.findOne();
    } catch(error) {
        return next(error);
    }
})

export default router;
