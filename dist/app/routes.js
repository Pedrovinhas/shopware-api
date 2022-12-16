"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const upload_1 = require("./middleware/upload");
const auth_1 = __importDefault(require("./middleware/auth"));
const createCategory_1 = require("./useCases/categories/createCategory");
const listCategories_1 = require("./useCases/categories/listCategories");
const listOneProductByCategory_1 = require("./useCases/categories/listOneProductByCategory");
const listProductsByCategory_1 = require("./useCases/categories/listProductsByCategory");
const listProductsByCategoryName_1 = require("./useCases/categories/listProductsByCategoryName");
const cancelOrder_1 = require("./useCases/orders/cancelOrder");
const changeOrderStatus_1 = require("./useCases/orders/changeOrderStatus");
const createOrder_1 = require("./useCases/orders/createOrder");
const listOrders_1 = require("./useCases/orders/listOrders");
const createProduct_1 = require("./useCases/products/createProduct");
const listOneProduct_1 = require("./useCases/products/listOneProduct");
const listProducts_1 = require("./useCases/products/listProducts");
const registerUser_1 = require("./useCases/users/registerUser");
const listUsers_1 = require("./useCases/users/listUsers");
const login_1 = require("./useCases/users/login");
const users_1 = require("./useCases/users");
const registerWithPhone_1 = require("./useCases/users/registerWithPhone");
const loginWithOtp_1 = require("./useCases/users/loginWithOtp");
const listUserOrders_1 = require("./useCases/orders/listUserOrders");
exports.router = (0, express_1.Router)();
// List categories
exports.router.get('/categories', listCategories_1.listCategories);
// Create category
exports.router.post('/categories', createCategory_1.createCategories);
// List products
exports.router.get('/products', listProducts_1.listProducts);
// Create products
exports.router.post('/products', upload_1.upload.single('image'), createProduct_1.createProduct);
// Get products by category
exports.router.get('/categories/:categoryId/products', listProductsByCategory_1.listProductsByCategory);
// Get products by category name
exports.router.get('/categories/:categoryName/products', listProductsByCategoryName_1.listProductsByCategoryName);
// List one product
exports.router.get('/products/:productId', listOneProduct_1.listOneProduct);
// List one product by category
exports.router.get('/:categoryId/products/:productId', listOneProductByCategory_1.listOneProductByCategory);
// List orders
exports.router.get('/orders', listOrders_1.listOrders);
// List orders
exports.router.get('/orders/user', auth_1.default, listUserOrders_1.listUserOrders);
// Create order
exports.router.post('/orders', auth_1.default, createOrder_1.createOrder);
// Change order status
exports.router.patch('/orders/:orderId', changeOrderStatus_1.changeOrderStatus);
// Delete/cancel order
exports.router.delete('/orders/:orderId', cancelOrder_1.cancelOrder);
// Register user with email and password
exports.router.post('/register', registerUser_1.registerUser);
// Register user with phone 
exports.router.post('/register/phone', registerWithPhone_1.registerWithPhone);
// List users
exports.router.get('/users', listUsers_1.listUsers);
// Protected Route
exports.router.get('/auth', auth_1.default, users_1.index); // Must inform BEARERtoken to access this route.
// Auth with OTP
exports.router.post('/login/phone', loginWithOtp_1.loginWithOtp);
// Auth with Password
exports.router.post('/login', login_1.loginUser);
