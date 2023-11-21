import { Router } from 'express';
import apiRouter from './productRoutes';

const router = Router();

router.use('/api/v1', apiRouter);

export { router };