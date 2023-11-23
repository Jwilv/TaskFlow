import { NextApiRequest, NextApiResponse } from "next";
import moongose from 'mongoose';
import { Entry } from "@/models";
import { db } from "@/database";
import { IEntry } from "@/models/Entry";

type Data = { message: string } | IEntry


const updateEntry = async (req: NextApiRequest, res: NextApiResponse) => {

    const { id } = req.query;

    await db.connect();
    const entryToUpdate = await Entry.findById(id);

    if (!entryToUpdate) {
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
        res.status(400).json({ message: 'Error al actualizar' });
    }

    await db.disconnect();

}

export default function handler(req: NextApiRequest, res: NextApiResponse) {

    const { id } = req.query;

    if (!moongose.isValidObjectId(id)) {
        return res.status(400).json({ message: `El id : ${id} no es válido` });
    }

    switch (req.method) {
        case 'PUT':
            return updateEntry(req, res);

        default:
            return res.status(400).json({ message: 'Endpoint no existe' });
    }

}