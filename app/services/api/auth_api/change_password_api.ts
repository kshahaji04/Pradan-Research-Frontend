import { CONSTANTS } from "@/app/services/config/app-config";
import axios from "axios";


const ChangePasswordAPI = async (oldPassword?: any, newPassword?: any, token?: any) => {

    let response: any;
    await axios
        .post(
            `${CONSTANTS.API_BASE_URL}/api/method/pradan.pradan.customizations.authentication.api.change_password.change_password?old_password=${oldPassword}&new_password=${newPassword}`,
            undefined
            , {
                headers: {
                    Authorization: `${token}`
                },
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

export default ChangePasswordAPI;