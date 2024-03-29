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
exports.listProducts = void 0;
const Product_1 = require("../../models/Product");
function listProducts(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const PAGE_LIMIT = 9;
            const page = parseInt(req.query.page || '0');
            const products = yield Product_1.Product.find()
                .limit(PAGE_LIMIT)
                .skip(PAGE_LIMIT * page);
            // const filteredProducts = await Product.find({color: 'Black', size: 'Big', brand: 'Zara'});
            res.status(200).json(products);
        }
        catch (error) {
            console.log(error);
            res.sendStatus(500);
        }
    });
}
exports.listProducts = listProducts;
