import axios from "axios";
import { CONSTANTS } from "../../config/app-config";
import { API_CONFIG } from "../../config/api-config";

const GetResearchListApi = async (type?:any,page_no?:any) => {
    const limit = 1;
    let response: any;
    await axios
        .get(
            `${CONSTANTS.API_BASE_URL}/api/method/pradan.pradan.doctype.research.api.research.get_research_list_api?project_name=${CONSTANTS.PROJECT_NAME}&type=${type}&page_no=${page_no}&limit=${limit}`,
            {
                ...API_CONFIG,
            }
        )
        .then((res: any) => {
            response = res;
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

export default GetResearchListApi;
