import { NextApiRequest, NextApiResponse } from "next";
import moongose from 'mongoose';
import { Entry } from "@/models";
import { db } from "@/database";
import { IEntry } from "@/models/Entry";

type Data = { message: string } | IEntry

const getEntryById = async (req: NextApiRequest, res: NextApiResponse<Data>) => {

    const { id } = req.query;

    try {
        await db.connect();
        const entry = await Entry.findById(id);
        await db.disconnect();

        if (!entry) return res.status(400).json({ message: `Error al obtener la entrada con el id : ${id}}` });

        return res.status(200).json(entry!);
    } catch (error) {
        return res.status(400).json({ message: 'Error al obtener la entrada' });
    }
}


const updateEntry = async (req: NextApiRequest, res: NextApiResponse<Data>) => {

    const { id } = req.query;

    await db.connect();
    const entryToUpdate = await Entry.findById(id);

    if (!entryToUpdate) {
        await db.disconnect();
        return res.status(400).json({ message: `No existe una entrada con el id: ${id}` });
    }

    const {
        description = entryToUpdate.description,
        status = entryToUpdate.status,
    } = req.body;

    try {
        const updatedEntry = await Entry.findByIdAndUpdate(id, {
            description,
            status
        }, {
            runValidators: true,
            new: true
        });

        res.status(200).json(updatedEntry!);
    } catch (error) {
        res.status(400).json({ message: 'Error al intentar actualizar' });
    }

    await db.disconnect();

}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

    const { id } = req.query;

    if (!moongose.isValidObjectId(id)) {
        return res.status(400).json({ message: `El id : ${id} no es válido` });
    }

    switch (req.method) {

        case 'GET':
            return getEntryById(req, res);

        case 'PUT':
            return updateEntry(req, res);

        default:
            return res.status(400).json({ message: 'Endpoint no existe' });
    }

}