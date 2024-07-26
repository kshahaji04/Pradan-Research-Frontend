import { CONSTANTS } from "@/app/services/config/app-config";
import axios from "axios";
import { API_CONFIG } from '@/app/services/config/api-config'

export const GetFeaturedEventDetailsApi = async (slug?:any) => {

    let response: any;
    let type = 'Feature Event';

    await axios
        .get(
            `${CONSTANTS.API_BASE_URL}/api/method/pradan.pradan.doctype.events.api.events.feature_events_detail_api?project_name=${CONSTANTS.PROJECT_NAME}&slug=${slug}`,
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


