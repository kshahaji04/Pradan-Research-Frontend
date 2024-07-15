import { CONSTANTS } from "@/app/services/config/app-config";
import axios from "axios";
import { API_CONFIG } from '@/app/services/config/api-config'

const GetFooterApi = async (language?: any) => {
    let response: any;

    await axios
        .get(
            `${CONSTANTS.API_BASE_URL}/api/method/pradan.pradan.doctype.footer.api.get_footer.get_footer_api?project_name=${CONSTANTS.PROJECT_NAME}`,
            {
                ...API_CONFIG,
            }
        )
        .then((res: any) => {
            response = res?.data?.message?.data;
        })
        .catch((err: any) => {
                response = err;
            
        });

    return response;
};

export default GetFooterApi;
