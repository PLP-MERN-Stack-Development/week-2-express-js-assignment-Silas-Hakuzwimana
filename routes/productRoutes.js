import express from 'express';
const router = express.Router();
import { authenticate } from '../middleware/auth.js';
import { validateProduct } from '../middleware/validateProduct.js';

import {createProduct, getAllProducts, getProductById,  searchProducts, updateProduct, deleteProduct} from '../controllers/productController.js';


//Define routes for product operations
router.post('/products', authenticate, validateProduct, createProduct);
router.get('/products', authenticate,getAllProducts);
router.get('/products/search', authenticate,searchProducts); 
router.get('/products/:id',authenticate, getProductById);
router.put('/products/:id',authenticate, validateProduct, updateProduct);
router.delete('/products/:id', authenticate,deleteProduct);

export default router;