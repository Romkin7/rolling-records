import { NextApiRequest, NextApiResponse } from 'next';

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (!Array.isArray([])) {
            throw new Error('Cannot find products data.');
        }

        res.status(200).json([]);
    } catch (err) {
        res.status(500).json({ statusCode: 500, message: err.message });
    }
};

export default handler;
