import { NextFunction, Router, Request, Response } from 'express';
import { log } from '../../utils/log';
import { errorMessages } from '../../data/errorMessages';
import MarketingCampaign from '../../models/marketingcampaigns/marketingcampaigns.model';

const router = Router();

router.get(
    '/',
    async (_request: Request, response: Response, next: NextFunction) => {
        try {
            const marketingCampaigns = await MarketingCampaign.find();
            return response.status(200).json({ marketingCampaigns });
        } catch (error) {
            log(error);
            return next({ message: errorMessages.marketingCampaignError });
        }
    },
);

export default router;
