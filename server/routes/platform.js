import { Router } from 'express';
import {
  getCustomers,
  hello,
  addCustomer,
  deleteCustomer,
  updateCustomer,
} from '../controller/platform.js';

const router = Router();

//router.get('/', hello);

router.get('/getCustomers', getCustomers);
router.post('/addCustomer', addCustomer);
router.delete('/deleteCustomer/:id', deleteCustomer);
router.put('/updateCustomer/:id', updateCustomer);

export default router;
