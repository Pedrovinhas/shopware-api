"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const mongoose_1 = require("mongoose");
exports.Product = (0, mongoose_1.model)('Product', new mongoose_1.Schema({
    model: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    imagePath: {
        type: String,
    },
    imageUrl: {
        type: String,
    },
    rating: {
        type: Number,
    },
    size: {
        type: String,
        enum: ['Large', 'Big', 'Medium', 'Small'],
    },
    brand: {
        type: String,
        enum: ['H2C', 'Zara', 'Bibi', 'Prada', 'D&G', 'Chanel'],
    },
    color: {
        type: String,
        enum: ['Black', 'Crimson Red', 'Brown', 'Off-White', 'Seinna Pink'],
    },
    category: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true,
        ref: 'Category'
    }
}));
