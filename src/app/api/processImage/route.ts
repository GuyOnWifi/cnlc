import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        // Process a POST request
        console.log(req.body);
    } else {
        res.status(405).json({error: "Method Not Allowed"});
    }
}