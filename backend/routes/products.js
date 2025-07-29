import express from 'express';
import { getAllProducts, getProduct, createProduct, updateProduct, deleteProduct } from '../controllers/productController.js';
import auth from '../middleware/auth.js';
const router = express.Router();

router.get('/', getAllProducts);
router.get('/:id', getProduct);
router.post('/', auth, createProduct);
router.put('/:id', auth, updateProduct);
router.delete('/:id', auth, deleteProduct);

export default router; 