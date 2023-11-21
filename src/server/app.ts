import express from 'express';
import connectDB from '../models/db';
import { router } from '../routes';
import '../modules/cronJobRetrieveData';

const app = express();

connectDB();

app.use(express.json({ limit: '50mb' }));

app.use('/', router);

export default app;