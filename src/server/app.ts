import express from 'express';
import connectDB from '../models/db';
import { router } from '../routes';
import '../modules/cronJobRetrieveData';
import apiKeyMiddleware from '../middlewares/apiKeyMiddleware';

const app = express();

connectDB();

app.use(express.json({ limit: '50mb' }));
app.use(apiKeyMiddleware);
app.use('/', router);

export default app;