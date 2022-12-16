declare global {
    namespace NodeJS {
        interface ProcessEnv {
            OTP_CODE: string;
            MONGODB_URI: string;
        }
    }
}