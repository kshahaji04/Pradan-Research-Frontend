import { CONSTANTS } from "@/app/services/config/app-config";
import { API_CONFIG } from '@/app/services/config/api-config'
import axios from "axios";


const getGoogleAccessTokenApi = async (credential: any) => {
    let response: any;

    let url = `${CONSTANTS.API_BASE_URL}/api/method/pradan.pradan.customizations.authentication.api.login_via_google.login_via_google?credential=${credential}`

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

}

export default getGoogleAccessTokenApi;