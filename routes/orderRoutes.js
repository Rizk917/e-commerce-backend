import express from 'express';

import { creatAnOrder, deleteAnOrder, getAllOrders, getAnOrder, updateAnOrder } from '../controllers/orderController.js';

const router = express.Router();


router.get('/', getAllOrders)
router.get('/:id', getAnOrder)
router.put('/:id', updateAnOrder)
router.delete('/:id', deleteAnOrder)

router.post('/', creatAnOrder)

export default router;