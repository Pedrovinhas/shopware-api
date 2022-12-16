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
exports.registerUser = void 0;
const User_1 = __importDefault(require("../../models/User"));
function registerUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { name, email, password, phone, address } = req.body;
        try {
            const userExists = yield User_1.default.findOne({ email });
            if (userExists) {
                return res.status(400).json({
                    error: 'Cant do that',
                    message: 'User already exists'
                });
            }
            const user = yield User_1.default.create({
                name,
                email,
                password,
                phone,
                address,
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
exports.registerUser = registerUser;
