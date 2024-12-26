import {useMutation} from "@tanstack/react-query";
import {USER_DOMAIN_API_ENDPOINTS} from "@/data/apis/user";
import axios from "axios";
import {ContributorCreateType} from "@/data/types/user";

export const useCreateContributor = () => {
    return useMutation({
        mutationFn: async (ContributorCreateType: ContributorCreateType) => {
            const response = await axios.post(
                `${import.meta.env.VITE_FULL_SERVER_URL}${USER_DOMAIN_API_ENDPOINTS.CONTRIBUTORS}`,
                ContributorCreateType,
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
