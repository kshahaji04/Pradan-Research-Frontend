import { CONSTANTS } from "@/app/services/config/app-config";
import axios from "axios";
import { API_CONFIG } from '@/app/services/config/api-config'

export const GetFeaturedPublicationListApi = async (decodedSlug: any, currentPage: any) => {

    let response: any;
    let type = 'Print Media';
    let limit = 1

    await axios
        .get(
            `${CONSTANTS.API_BASE_URL}/api/method/pradan.pradan.doctype.publications.api.research_publication.get_research_publications?project_name=${CONSTANTS.PROJECT_NAME}&type=${type}&category=${decodedSlug}&page_no=${currentPage || 1}&limit=${limit}`,
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


