import axios from "axios";
import { CONSTANTS } from "../../config/app-config";
import { API_CONFIG } from "../../config/api-config";

const GetChapterWiseApi = async (type?:string) => {

    let response: any;
    await axios
        .get(
            `${CONSTANTS.API_BASE_URL}/api/method/pradan.pradan.doctype.research.api.research.get_research_chapter_api?project_name=${CONSTANTS.PROJECT_NAME}&type=${type}`,
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

export default GetChapterWiseApi;
