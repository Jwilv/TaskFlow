import { db } from "@/database";
import { Entry } from "@/models";
import { IEntry } from "@/models/Entry";
import { NextApiRequest, NextApiResponse } from "next";

type Data =
    | { ok: boolean, message: string }
    | { entries: IEntry[] }
    | { entry: IEntry }

const getEntries = async (res: NextApiResponse<Data>) => {
    try {

        await db.connect();
        const entries = await Entry.find().sort({ createdAt: 'ascending' });
        await db.disconnect();

        res.status(200).json({
            entries,
        })

    } catch (error) {
        return res.status(500).json({
            ok: false,
            message: 'Error al obtener las entradas',
        })
    }
}

const postEntry = async (req: NextApiRequest, res: NextApiResponse<Data>) => {

    const { description = '', status} = req.body;

    const newEntry = new Entry({
        description,
        status,
        createdAt: Date.now(),
    });

    try {
        await db.connect();
        await newEntry.save();
        await db.disconnect();

        return res.status(201).json({ entry: newEntry });
    } catch (error) {
        return res.status(400).json({
            ok: false,
            message: 'Error al crear la entrada',
        });
    }

}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {

    switch (req.method) {
        case 'GET':
            return getEntries(res);

        case 'POST':
            return postEntry(req, res);

        default:
            return res.status(400).json({ ok: false, message: 'Endpoint no existe' });
    }

}