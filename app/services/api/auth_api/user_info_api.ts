import { CONSTANTS } from "@/app/services/config/app-config";
import { API_CONFIG } from '@/app/services/config/api-config';
import axios from "axios";

const UserInfoAPI = async (email?: string, first_name?: string, last_name?: string, contact_no?: string) => {
    try {
        const response = await axios.post(
            `${CONSTANTS.API_BASE_URL}/api/method/pradan.pradan.customizations.authentication.api.user_info.create_user_info`,
            null,
            {
                ...API_CONFIG,
                params: { email, first_name, last_name, contact_no },
                timeout: 5000,
            }
        );

        return response; // Return the full response object
    } catch (err) {
        console.log(err, "response in api");
        throw err; // Ensure to rethrow the error so it can be caught in the calling function
    }
};

export default UserInfoAPI;
