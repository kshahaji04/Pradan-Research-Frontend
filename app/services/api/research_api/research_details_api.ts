import axios from "axios";
import { CONSTANTS } from "../../config/app-config";
import { API_CONFIG } from "../../config/api-config";

const GetResearchDetailsApi = async (slug?:any) => {
    const slugg = 'introduction'
    let response: any;
    await axios
        .get(
            `${CONSTANTS.API_BASE_URL}/api/method/pradan.pradan.doctype.research.api.research.get_research_detail_ap?project_name=${CONSTANTS.PROJECT_NAME}&slug=${slugg}`,
            {
                ...API_CONFIG,
            }
        )
        .then((res: any) => {
            response = res?.data?.message?.data;
        })
        .catch((err: any) => {
            // throw err;
            response = err;
        });

    return response;
};

export default GetResearchDetailsApi;
