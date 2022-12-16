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
exports.loginWithOtp = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const User_1 = __importDefault(require("../../models/User"));
function loginWithOtp(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { otp, phone } = req.body;
            const user = yield User_1.default.findOne({ phone }).select('+password');
            console.log(user);
            if (!user) {
                res.status(401).json({
                    error: 'User not found',
                    message: 'User not exist in db'
                });
            }
            console.log(otp);
            console.log(user === null || user === void 0 ? void 0 : user.otp);
            if (process.env.OTP_CODE !== otp) {
                return res.status(401).json({
                    error: 'OTP ERROR',
                    message: 'OTP is invalid'
                });
            }
            const token = jsonwebtoken_1.default.sign({ id: user === null || user === void 0 ? void 0 : user.id }, 'secret', { expiresIn: '1d' }); // secret must be in .env to avoid 
            const userWithoutPassword = yield User_1.default.findOne({ phone });
            return res.json({
                userWithoutPassword,
                token
            });
        }
        catch (error) {
            console.log(error);
            res.status(500).send({ error: 'Login', message: 'Login Failed' });
        }
    });
}
exports.loginWithOtp = loginWithOtp;
