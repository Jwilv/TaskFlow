import { db } from "@/database";
import { Entry } from "@/models";
import { IEntry } from "@/models/Entry";
import { NextApiRequest, NextApiResponse } from "next";

type Data =
    | { ok: boolean, message: string }
    | { ok: boolean, entries: IEntry[] }

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {

    switch (req.method) {
        case 'GET':
            return getEntries(res);

        default:
            return res.status(400).json({ ok: false, message: 'Endpoint no existe' });
    }

}

const getEntries = async (res: NextApiResponse<Data>) => {
    try {

        await db.connect();
        const entries = await Entry.find().sort({ createdAt: 'ascending' });
        await db.disconnect();

        res.status(200).json({
            ok: true,
            entries,
        })

    } catch (error) {
        return res.status(500).json({
            ok: false,
            message: 'Error al obtener las entradas',
        })
    }
}