import {useMutation} from "@tanstack/react-query";
import {USER_DOMAIN_API_ENDPOINTS} from "@/data/apis/user";
import axios from "axios";
import {AuthLoginType, AuthLogoutType} from "@/data/types/user";

export const useAuthLogin = () => {
    return useMutation({
        mutationFn: async (AuthLoginType: AuthLoginType) => {
            const response = await axios.post(
                `${import.meta.env.VITE_FULL_SERVER_URL}/${USER_DOMAIN_API_ENDPOINTS.AUTH}`,
                AuthLoginType,
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            );
            return response.data;
        }
    });
}

export const useAuthLogout = () => {
    return useMutation({
        mutationFn: async (AuthLogoutType: AuthLogoutType) => {
            const response = await axios.post(
                `${import.meta.env.VITE_FULL_SERVER_URL}/${USER_DOMAIN_API_ENDPOINTS.AUTHOUT}`,
                AuthLogoutType,
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            );
            return response.data;
        }
    });
}