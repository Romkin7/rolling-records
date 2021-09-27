/* eslint-disable @typescript-eslint/no-explicit-any */
import { Session } from 'express-session';
import { UserDoc } from '../models/users/users.model';

declare module 'express-serve-static-core' {
    interface Request {
        user: UserDoc;
        files: any;
        session: ExtendedSession;
    }
}
export interface ExtendedSession extends Session {
    user: { [key: string]: any };
    cart: { [key: string]: any };
    publicId?: string;
    secureUrl?: string;
}
