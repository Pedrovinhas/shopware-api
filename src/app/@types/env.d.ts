declare global {
    namespace NodeJS {
        interface ProcessEnv {
            OTP_CODE: string;
        }
    }
}