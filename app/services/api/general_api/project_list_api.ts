import { CONSTANTS } from "@/app/services/config/app-config";
import axios from "axios";
import { API_CONFIG } from '@/app/services/config/api-config'

const GetProjectListApi = async (language?: any) => {
    let response: any;

    await axios
        .get(
            `${CONSTANTS.API_BASE_URL}/api/method/pradan.pradan.customizations.project.api.get_project.get_projects`,
            {
                ...API_CONFIG,

            }
        )
        .then((res: any) => {
            response = res?.data?.message?.data;
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

export default GetProjectListApi;
