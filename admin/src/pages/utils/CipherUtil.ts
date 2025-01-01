import CryptoJS from "crypto-js";

export const EncryptionUtil = (text: string) => {
    return CryptoJS.AES.encrypt(text, `${import.meta.env.VITE_SECRET_KEY}`).toString();
};

export const DecryptionUtil = (text: string) => {
    return CryptoJS.AES.decrypt(text, `${import.meta.env.VITE_SECRET_KEY}`).toString(CryptoJS.enc.Utf8)
};

export const DecryptionSharedUtil = (text: string) => {
    return CryptoJS.AES.decrypt(text, `${import.meta.env.VITE_SHARED_KEY}`).toString(CryptoJS.enc.Utf8)
};