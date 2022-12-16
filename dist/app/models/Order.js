"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
const mongoose_1 = require("mongoose");
exports.Order = (0, mongoose_1.model)('Order', new mongoose_1.Schema({
    status: {
        type: String,
        enum: ['PROCESSING', 'PAID', 'CANCELLED'],
        default: 'PROCESSING'
    },
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User'
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    products: {
        required: true,
        type: [{
                product: {
                    type: mongoose_1.Schema.Types.ObjectId,
                    required: true,
                    ref: 'Product' // Referência a Entidade de Produto
                },
                quantity: {
                    type: Number,
                    default: 1,
                }
            }]
    }
}));
