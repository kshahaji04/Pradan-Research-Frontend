import { CONSTANTS } from "@/app/services/config/app-config";
import axios from "axios";
import { API_CONFIG } from '@/app/services/config/api-config'

export const GetFeaturedResearchApi = async () => {

    let response: any;
    
    await axios
        .get(
            `${CONSTANTS.API_BASE_URL}/api/method/pradan.pradan.doctype.research.api.research.get_home_research_api?project_name=${CONSTANTS.PROJECT_NAME}`,
            {
                ...API_CONFIG,
            }
        )
        .then((res: any) => {
            response = res?.data?.message?.data;
        })
        .catch((err: any) => {
            throw err
        });

    return response;
};

export const GetSpotlightApi = async () => {

    let response: any;

    await axios
        .get(
            `${CONSTANTS.API_BASE_URL}/api/method/pradan.pradan.doctype.spotlight.api.spotlight.get_spotlight_api?project_name=${CONSTANTS.PROJECT_NAME}`,
            {
                ...API_CONFIG,
            }
        )
        .then((res: any) => {
            response = res?.data?.message?.data;
        })
        .catch((err: any) => {
            throw err
        });

    return response;
};

