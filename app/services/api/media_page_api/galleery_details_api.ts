import { CONSTANTS } from "@/app/services/config/app-config";
import { API_CONFIG } from "@/app/services/config/api-config";
import axios from "axios";

const GetGalleryApi = async () => {
    let response: any;
    const limit = 1;

    let url = `${CONSTANTS.API_BASE_URL}/api/method/pradan.pradan.doctype.gallery.api.get_gallery.get_gallery?project_name=${CONSTANTS.PROJECT_NAME}`

    await axios
        .get(
            url,
            {
                ...API_CONFIG,
                // timeout: 5000,

            }
        )
        .then((res: any) => {
            response = res?.data?.message?.data;
        })
        .catch((err: any) => {
            // if (err.code === "ECONNABORTED") {
            //     response = "Request timed out";
            // } else if (err.code === "ERR_BAD_REQUEST") {
            //     response = "Bad Request";
            // } else if (err.code === "ERR_INVALID_URL") {
            //     response = "Invalid URL";
            // } else {
            //     response = err;
            // }
            response = err;
        });

    return response;
};

export default GetGalleryApi;
