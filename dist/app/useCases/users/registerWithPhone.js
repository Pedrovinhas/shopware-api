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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerWithPhone = void 0;
const User_1 = __importDefault(require("../../models/User"));
function registerWithPhone(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const randomUser = 'User';
        const { phone, password, otp, email, name, } = req.body;
        try {
            const userExists = yield User_1.default.findOne({ phone });
            if (userExists) {
                return res.status(400).json({
                    error: 'Cant do that',
                    message: 'User already exists'
                });
            }
            const hasEmail = email === '' ? `random${Math.round(Math.random() * 100)}@hotmail.com` : email;
            const user = yield User_1.default.create({
                phone,
                name: randomUser + Math.floor(Math.random() * 10000),
                password: Math.floor(Math.random() * 10000),
                email: hasEmail,
                otp: process.env.OTP_CODE
            });
            res.status(201).json(user);
        }
        catch (error) {
            console.log(error);
            res.status(500).send({ error: 'Registration failed', message: 'Registron Failed' });
        }
    });
}
exports.registerWithPhone = registerWithPhone;
