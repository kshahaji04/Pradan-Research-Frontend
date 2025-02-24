import { CONSTANTS } from "@/app/services/config/app-config";
import axios from "axios";
import { API_CONFIG } from '@/app/services/config/api-config'

const GetSearchApi = async (page: number | String, searchQuery?: string, sortBy?: string) => {

    const limit = 1;
    let response: any;

    let url = `${CONSTANTS.API_BASE_URL}/api/method/pradan.pradan.customizations.search_api.api.research_api.get_research_search_api?project_name=${CONSTANTS.PROJECT_NAME}&limit=${limit}&page_no=${page || 1}`;

    if (searchQuery) {
        url += `&search_key=${searchQuery}`;
    }
    if (sortBy) {
        url += `&sort_by=${sortBy}`;
    }
    // selectedFilters?: any
    // if (selectedFilters) {
    //     const categoryList = selectedFilters.split(',')
    //     const categoryParam = JSON.stringify(categoryList);
    //     url += `&category=${categoryParam}`;
    // }

    await axios
        .get(
            url,
            {
                ...API_CONFIG,
            }
        )
        .then((res: any) => {
            response = res?.data?.message;
        })
        .catch((err: any) => {
            if (err.code === "ECONNABORTED") {
                response = "Request timed out";
            } else if (err.code === "ERR_BAD_REQUEST") {
                response = "Bad Request";
            } else if (err.code === "ERR_INVALID_URL") {
                response = "Invalid URL";
            } else {
                response = err;
            }
        });

    return response;
};

export default GetSearchApi;
