import mongoose from 'mongoose'
import moongose from 'mongoose';


/**
 * Mongoose connection : 
 *  0 = disconnected,
 *  1 = connected,
 *  2 = connecting,
 *  3 = disconnecting
 */
const mongooseConnection = {
    isConnected: 0,
}

export const connect = async () => {

    if (mongooseConnection.isConnected) {
        console.log('MongoDB is already connected')
        return;
    }

    if (mongooseConnection.isConnected > 0) {

        mongooseConnection.isConnected = mongoose.connections[0].readyState;

        if (mongooseConnection.isConnected === 1) {
            console.log('Using previous connection');
            return;
        }

        disconnect();
    }

    await mongoose.connect(process.env.MONGODB_URL || '');
    mongooseConnection.isConnected = 1;
    console.log('MongoDB connected')
}

export const disconnect = async () => {
    
    if(mongooseConnection.isConnected === 0) return;

    await moongose.disconnect();
    mongooseConnection.isConnected = 0;
    console.log('MongoDB disconnected')
}

