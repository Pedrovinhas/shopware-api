import { Router } from 'express';
import { upload } from './middleware/upload';
import authMiddleware from './middleware/auth';

import { createCategories } from './useCases/categories/createCategory';
import { listCategories } from './useCases/categories/listCategories';
import { listOneProductByCategory } from './useCases/categories/listOneProductByCategory';
import { listProductsByCategory } from './useCases/categories/listProductsByCategory';
import { listProductsByCategoryName } from './useCases/categories/listProductsByCategoryName';

import { cancelOrder } from './useCases/orders/cancelOrder';
import { changeOrderStatus } from './useCases/orders/changeOrderStatus';
import { createOrder } from './useCases/orders/createOrder';
import { listOrders } from './useCases/orders/listOrders';

import { createProduct } from './useCases/products/createProduct';
import { listOneProduct } from './useCases/products/listOneProduct';
import { listProducts } from './useCases/products/listProducts';
import { registerUser } from './useCases/users/registerUser';

import { listUsers } from './useCases/users/listUsers';
import { loginUser } from './useCases/users/login';
import { index } from './useCases/users';

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
router.get('/categories/:categoryId/products', listProductsByCategory);

// Get products by category name
router.get('/categories/:categoryName/products', listProductsByCategoryName);

// List one product
router.get('/products/:productId', listOneProduct);

// List one product by category
router.get('/:categoryId/products/:productId', listOneProductByCategory);

// List orders
router.get('/orders', listOrders);

// Create order
router.post('/orders', createOrder);

// Change order status
router.patch('/orders/:orderId', changeOrderStatus);

// Delete/cancel order
router.delete('/orders/:orderId', cancelOrder);

// Register user
router.post('/register', registerUser);

// List users
router.get('/users', listUsers);

// Protected Route
router.get('/user', authMiddleware, index); // Must inform BEARERtoken to access this route.

// Auth
router.post('/auth', loginUser);

