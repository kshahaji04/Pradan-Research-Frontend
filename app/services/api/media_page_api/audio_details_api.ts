import { CONSTANTS } from "@/app/services/config/app-config";
import { API_CONFIG } from "@/app/services/config/api-config";
import axios from "axios";

const GetAudioDetailsApi = async (slug?: any) => {
    let response: any;
    await axios
        .get(
            `${CONSTANTS.API_BASE_URL}/api/method/pradan.pradan.doctype.podcast.api.get_podcast.get_podcast_details?project_name=${CONSTANTS.PROJECT_NAME}&slug=${slug}`,
            {
                ...API_CONFIG,
                timeout: 5000,

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

export default GetAudioDetailsApi;
