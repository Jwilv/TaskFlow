import { Entry } from '@/interfaces';
import mongoose, { Schema, Model } from 'mongoose'

export interface IEntry extends Entry {}

const EntrySchema = new Schema({
    description: { type: String, required: true },
    createdAt: { type: Number, required: true },
    status: {
        type: String,
        enum: {
            values: ['pending', 'in-progress', 'finished'],
            message: '{VALUE} no es un estado permitido'
        }
    }

})

const EntryModel: Model<IEntry> = mongoose.models.Entry || mongoose.model('Entry', EntrySchema);

export default EntryModel