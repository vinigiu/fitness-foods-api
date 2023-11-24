import express from 'express';
import connectDB from '../models/db';
import { router } from '../routes';
import { CronJob } from 'cron';
import apiKeyMiddleware from '../middlewares/apiKeyMiddleware';
import productsJob from '../utils/productsJob';

const app = express();

const job = new CronJob(
	'* * * * *',
	function () {
		// productsJob();
	}, 
	null, 
	true, 
	'Brazil/East'
);

connectDB();

app.use(express.json({ limit: '50mb' }));
app.use(apiKeyMiddleware);
app.use('/', router);

export default app;