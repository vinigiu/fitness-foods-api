require('dotenv').config();
import { MongoClient } from 'mongodb';
import { dbStatus } from '../models/db';

const client = new MongoClient(process.env.MONGODB_URI);

const database = client.db('fitness-foods');
const collection = database.collection('imports');

const apiServices = {
    getApiInfo: async (): Promise<any> => {
        const used = process.memoryUsage();

        const uptimeInSeconds = process.uptime();

        const formattedHours = Math.floor(uptimeInSeconds / 3600);
        const formattedMinutes = Math.floor((uptimeInSeconds % 3600) / 60);
        const formattedSeconds = Math.floor(uptimeInSeconds % 60);

        const formattedUptime = `${formattedHours}h ${formattedMinutes}m ${formattedSeconds}s`;

        let info = {
            dbStatus,
            usedMemory: used,
            onlineTime: formattedUptime,
        };

        try {
            await client.connect();
        
            const imp = await collection.findOne({ sort: { imported_t: -1 } });

            if (imp) {
                Object.assign(info, {
                    lastImport: imp,
                })
            }
        
            console.log("import: ", imp);
        } finally {
            await client.close();
            return info;
        }
    }
}

export default apiServices;
