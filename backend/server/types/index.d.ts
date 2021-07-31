/* eslint-disable @typescript-eslint/no-explicit-any */
import { Session } from 'express-session';

export interface ExtendedSession extends Session {
    user: { [key: string]: any };
    cart: { [key: string]: any };
}
