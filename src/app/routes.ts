import { Router } from 'express';
import { createCategories } from './useCases/categories/createCategory';
import { listCategories } from './useCases/categories/listCategories';
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
router.post('/products', createProduct);

// List one product
router.get('/categories/products/:productId', (req, res) => {
  res.send('OK');
});

// Get products by category
router.get('/categories/:products', (req, res) => {
  res.send('OK');
});

// List orders
router.get('/orders', (req, res) => {
  res.send('OK');
});

// Create order
router.post('/orders', (req, res) => {
  res.send('OK');
});

// Change order status
router.patch('/orders/:orderId', (req, res) => {
  res.send('OK');
});

// Delete/cancel order
router.delete('/orders/:orderId', (req, res) => {
  res.send('OK');
});