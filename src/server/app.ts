import express from 'express';
import connectDB from '../models/db';
import { router } from '../routes';
import '../utils/cronJobRetrieveData.js';
import apiKeyMiddleware from '../middlewares/apiKeyMiddleware';
import productsJob from '../utils/productsJob';
const cron = require('node-cron');

cron.schedule('* * * * *', async () => {
    console.log('testando cron')
    productsJob();
})

const app = express();

connectDB();

app.use(express.json({ limit: '50mb' }));
app.use(apiKeyMiddleware);
app.use('/', router);

export default app;