import { CONSTANTS } from "@/app/services/config/app-config";
import {API_CONFIG} from '@/app/services/config/api-config'
import axios from "axios";


const ResetPasswordAPI = async (email?: any, newPassword?: any, token?: any) => {

    let response: any;
    await axios
        .post(
            `${CONSTANTS.API_BASE_URL}/api/method/pradan.pradan.customizations.authentication.api.reset_password.reset_password?email=${email}&new_password=${newPassword}`,
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

export default ResetPasswordAPI;