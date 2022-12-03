import { Router } from 'express';
import { upload } from './middleware/upload';

import { createCategories } from './useCases/categories/createCategory';
import { listCategories } from './useCases/categories/listCategories';
import { listProductsByCategory } from './useCases/categories/listProductsByCategory';
import { createOrder } from './useCases/orders/createOrder';
import { listOrders } from './useCases/orders/listOrders';
import { createProduct } from './useCases/products/createProduct';
import { listProducts } from './useCases/products/listProducts';

export const router = Router();

// List categories
router.get('/categories', listCategories);

// Create category
router.post('/categories', createCategories);

// List products
router.get('/products', listProducts);

// Create products
router.post('/products', upload.single('image'), createProduct);

// Get products by category
router.get('/categories/:categoryId/:products', listProductsByCategory);

// List one product
router.get('/categories/products/:productId', (req, res) => {
  res.send('OK');
});

// List orders
router.get('/orders', listOrders);

// Create order
router.post('/orders', createOrder);

// Change order status
router.patch('/orders/:orderId', (req, res) => {
  res.send('OK');
});

// Delete/cancel order
router.delete('/orders/:orderId', (req, res) => {
  res.send('OK');
});