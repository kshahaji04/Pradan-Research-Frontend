import { CONSTANTS } from "@/app/services/config/app-config";
import axios from "axios";
import { API_CONFIG } from '@/app/services/config/api-config'

export const GetFeaturedPublicationDetailApi = async (decodedSlug:any) => {

    let response: any;
    

    await axios
        .get(
            `${CONSTANTS.API_BASE_URL}/api/method/pradan.pradan.doctype.publications.api.get_publications.get_publication_details?project_name=${CONSTANTS.PROJECT_NAME}&slug=${decodedSlug}`,
            {
                ...API_CONFIG,
            }
        )
        .then((res: any) => {
            response = res?.data?.message;
        })
        .catch((err: any) => {
            throw err
        });

    return response;
};


