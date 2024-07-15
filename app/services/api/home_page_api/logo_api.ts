import { CONSTANTS } from "@/app/services/config/app-config";
import axios from "axios";
import { API_CONFIG } from '@/app/services/config/api-config'

const GetLogoApi = async (language?: any) => {
    let response: any;

    await axios
        .get(
            `${CONSTANTS.API_BASE_URL}/api/method/pradan.pradan.doctype.logo.api.get_logo.get_logo?project_name=${CONSTANTS.PROJECT_NAME}`,
            {
                ...API_CONFIG,
            }
        )
        .then((res: any) => {
            response = res?.data?.message?.data;
        })
        .catch((err: any) => {
            response = err;
        });

    return response;
};

export default GetLogoApi;
