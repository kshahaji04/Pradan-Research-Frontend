import { CONSTANTS } from "@/app/services/config/app-config";
import {API_CONFIG} from '@/app/services/config/api-config'
import axios from "axios";


const ForgetPasswordLinkAPI =async (email?:any, token?:any) => {

    let response: any;
    const link:any = `''`
    await axios
        .post(
            `${CONSTANTS.API_BASE_URL}/api/method/pradan.pradan.customizations.authentication.api.send_reset_link.send_reset_link?email=${email}&link=${link}`,
            undefined
            , {
                ...API_CONFIG,
                timeout: 5000,
              })
        .then((res) => {
            response = res?.data?.message;
           
        })
        .catch((err) => {
            console.log(err, "response in api");
        });
    return response;
}

export default ForgetPasswordLinkAPI;