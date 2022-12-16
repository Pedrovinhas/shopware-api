"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const routes_1 = require("./app/routes");
require("dotenv/config");
const PORT = process.env.PORT || 3003;
mongoose_1.default.connect(`${process.env.MONGODB_URI}`)
    .then(() => {
    const app = (0, express_1.default)();
    const port = 3003;
    app.use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', '*');
        res.setHeader('Access-Control-Allow-Headers', '*');
        next();
    });
    app.use(express_1.default.static('public'));
    app.use('/uploads', express_1.default.static(node_path_1.default.resolve(__dirname, '..', 'uploads')));
    app.use(express_1.default.json());
    app.use(routes_1.router);
    app.listen(PORT, () => {
        console.log(`🚀 Server is running on http://localhost:${port}`);
    });
})
    .catch(() => console.log('❌ Erro ao conectar ao MongoDB'));
