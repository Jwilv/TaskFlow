// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    message: string | string[]
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {

    const { message = 'Bad Request' } = req.query;

    return res.status(200).json({ message })
}
