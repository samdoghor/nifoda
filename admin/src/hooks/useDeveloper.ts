import {useMutation} from "@tanstack/react-query";
import {USER_DOMAIN_API_ENDPOINTS} from "@/data/apis/user";
import axios from "axios";
import {DeveloperCreateType} from "@/data/types/user";

export const useCreateDeveloper = () => {
    return useMutation({
        mutationFn: async (DeveloperCreateType: DeveloperCreateType) => {
            const response = await axios.post(
                `${import.meta.env.VITE_FULL_SERVER_URL}/${USER_DOMAIN_API_ENDPOINTS.DEVELOPERS}`,
                DeveloperCreateType,
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
