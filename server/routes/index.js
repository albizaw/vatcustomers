import { Router } from 'express';
import platformRoutes from './platform.js';

const router = Router();
router.use('/customers', platformRoutes);

export default router;
