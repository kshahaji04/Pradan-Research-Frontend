import { CONSTANTS } from "@/app/services/config/app-config";
import { API_CONFIG } from '@/app/services/config/api-config';
import axios from "axios";

const GetcontactUs = async () => {
    let response: any;

    await axios
        .get(`${CONSTANTS.API_BASE_URL}//api/method/pradan.pradan.doctype.contact_us.api.contact_us.get_contact_us?project_name=Research%20Site`,{
            ...API_CONFIG,
            timeout: 5000,
        })
        .then((res) => {
            response = res?.data?.message
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
            // throw err
        });
    return response;
};

export default GetcontactUs;
