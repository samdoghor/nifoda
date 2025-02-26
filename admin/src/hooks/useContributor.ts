import {useMutation, useQuery} from "@tanstack/react-query";
import {USER_DOMAIN_API_ENDPOINTS} from "@/data/apis/user";
import axios from "axios";
import {ContributorCreateType, countContributorType, oneContributorType} from "@/data/types/user";

export const useCreateContributor = () => {
    return useMutation({
        mutationFn: async (ContributorCreateType: ContributorCreateType) => {
            const response = await axios.post(
                `${import.meta.env.VITE_FULL_SERVER_URL}/${USER_DOMAIN_API_ENDPOINTS.CONTRIBUTORS}`,
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

const readCountContributor = async (): Promise<countContributorType> => {
    const response = await axios.get(
        `${import.meta.env.VITE_FULL_SERVER_URL}/${USER_DOMAIN_API_ENDPOINTS.CONTRIBUTORS}/all`
    );
    return response.data;
}

export const useReadCountContributor = () => {
    return useQuery({
        queryKey: ["read", "count_contributors"],
        queryFn: readCountContributor,
    })
}

let identifierContributor = localStorage.getItem("_nfduidr");

if (identifierContributor === null) {
    identifierContributor = null
} else {
    identifierContributor = identifierContributor.split(".")[1]
}

const whoIs = localStorage.getItem("_nfdusda") === "contributor" ? localStorage.getItem("_nfdusda") === "contributor" : null;

const fetchContributor = async (): Promise<oneContributorType> => {

    const response = await axios.get(
        `${import.meta.env.VITE_FULL_SERVER_URL}/${USER_DOMAIN_API_ENDPOINTS.CONTRIBUTORS}/${identifierContributor}`
    );
    return response.data;
}

export const useFetchContributor = () => {
    return useQuery({
        queryKey: ["fetch", "contributors"],
        queryFn: fetchContributor,
        enabled: !!identifierContributor && !!whoIs,
    })
}
