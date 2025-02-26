import {useMutation, useQuery} from "@tanstack/react-query";
import {USER_DOMAIN_API_ENDPOINTS} from "@/data/apis/user";
import axios from "axios";
import {countDeveloperType, DeveloperAPIKeyUpdateType, DeveloperCreateType, oneDeveloperType} from "@/data/types/user";

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

const readCountDeveloper = async (): Promise<countDeveloperType> => {
    const response = await axios.get(
        `${import.meta.env.VITE_FULL_SERVER_URL}/${USER_DOMAIN_API_ENDPOINTS.DEVELOPERS}/all`
    );
    return response.data;
}

export const useReadCountDeveloper = () => {
    return useQuery({
        queryKey: ["read", "count_developers"],
        queryFn: readCountDeveloper,
    })
}

let identifierDeveloper = localStorage.getItem("_nfduidr");

if (identifierDeveloper === null) {
    identifierDeveloper = null
} else {
    identifierDeveloper = identifierDeveloper.split(".")[1]
}

const whoIs = localStorage.getItem("_nfdusda") === "developer" ? localStorage.getItem("_nfdusda") === "developer" : null;

const fetchDeveloper = async (): Promise<oneDeveloperType> => {
    const response = await axios.get(
        `${import.meta.env.VITE_FULL_SERVER_URL}/${USER_DOMAIN_API_ENDPOINTS.DEVELOPERS}/${identifierDeveloper}`
    );
    return response.data;
}

export const useFetchDeveloper = () => {
    return useQuery({
        queryKey: ["fetch", "developers"],
        queryFn: fetchDeveloper,
        enabled: !!identifierDeveloper && !!whoIs,
    })
}

export const useAPIKeyUpdateDeveloper = () => {
    return useMutation({
        mutationFn: async (DeveloperAPIKeyUpdateType: DeveloperAPIKeyUpdateType) => {
            const response = await axios.put(
                `${import.meta.env.VITE_FULL_SERVER_URL}/${USER_DOMAIN_API_ENDPOINTS.DEVELOPERS}/${identifierDeveloper}`,
                DeveloperAPIKeyUpdateType,
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