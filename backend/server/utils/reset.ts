import { ICoupon } from '../../../@types';

export function resetCoupon(): ICoupon {
    return {
        valid: false,
        value: null,
        createdAt: new Date(),
    };
}
