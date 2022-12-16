"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addCartItem = void 0;
const Cart_1 = require("../../models/Cart");
function addCartItem(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { products, userId } = req.body;
            if (!products) {
                res.status(500).json({
                    error: 'Products not found',
                    message: 'Invalid request params'
                });
            }
            const currentCart = yield Cart_1.Cart.find({ 'userId': `${userId}` });
            const cart = yield Cart_1.Cart.create({ products });
            res.status(201).json(cart);
        }
        catch (error) {
            console.log(error);
            res.sendStatus(500);
        }
    });
}
exports.addCartItem = addCartItem;
