import { CONSTANTS } from "@/app/services/config/app-config";
import { API_CONFIG } from "@/app/services/config/api-config";
import axios from "axios";

const GetPublicationsApi = async (type: any) => {
    let response: any;

    let url = `${CONSTANTS.API_BASE_URL}/api/method/pradan.pradan.doctype.publications.api.get_publications.get_publications?project_name=${CONSTANTS.PROJECT_NAME}&type=${type}`

    await axios
        .get(
            url,
            {
                ...API_CONFIG,
            }
        )
        .then((res: any) => {
            response = res?.data?.message?.data;
        })
        .catch((err: any) => {
            throw err;
        });

    return response;
};

export default GetPublicationsApi;
