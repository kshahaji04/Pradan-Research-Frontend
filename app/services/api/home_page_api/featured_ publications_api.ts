import { CONSTANTS } from "@/app/services/config/app-config";
import axios from "axios";
import { API_CONFIG } from '@/app/services/config/api-config'

export const GetFeaturedPublicationApi = async () => {

    let response: any;
    
    await axios
        .get(
            `${CONSTANTS.API_BASE_URL}/api/method/pradan.pradan.doctype.research_category.api.research_category.get_research_category_list_api?project_name=${CONSTANTS.PROJECT_NAME}`,
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


