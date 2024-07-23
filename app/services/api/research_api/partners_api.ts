import axios from "axios";
import { CONSTANTS } from "../../config/app-config";
import { API_CONFIG } from "../../config/api-config";

const GetPartnersApi = async () => {

    let response: any;
    await axios
        .get(
            `${CONSTANTS.API_BASE_URL}/api/method/pradan.pradan.doctype.partners.api.partners.get_partners?project_name=${CONSTANTS.PROJECT_NAME}`,
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

export default GetPartnersApi;
