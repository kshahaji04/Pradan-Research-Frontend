import { CONSTANTS } from "@/app/services/config/app-config";
import { API_CONFIG } from '@/app/services/config/api-config';
import axios from "axios";

const RegistrationApi = async (data:any) => {
    let response: any;

    

    await axios
        .post(`${CONSTANTS.API_BASE_URL}/api/method/pradan.pradan.doctype.registration.api.registration.create_registration`, {
            ...data,
            project_name:"Research Site"
        }, {
            ...API_CONFIG,
            timeout: 5000,
        })
        .then((res) => {
            response = res?.data?.message;

        })
        .catch((err) => {
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

export default RegistrationApi;
