import { CONSTANTS } from "@/app/services/config/app-config";
import { API_CONFIG } from '@/app/services/config/api-config';
import axios from "axios";

const feedbackApi = async (reaction: any, rating: any) => {
    let response: any;

    const data = {
        reaction,
        rating: String(rating), // Ensure rating is a string
        project_name: CONSTANTS.PROJECT_NAME
    };

    await axios
        .post(`${CONSTANTS.API_BASE_URL}/api/method/pradan.pradan.doctype.feedback.api.create_feedback.create_feedback`, data, {
            ...API_CONFIG,
            timeout: 5000,
        })
        .then((res) => {
            response = res?.data?.message;

        })
        .catch((err) => {
            if (err.code === "ECONNABORTED") {
                response = "Request timed out";
            } else if (err.code === "ERR_BAD_REQUEST") {
                response = "Bad Request";
            } else if (err.code === "ERR_INVALID_URL") {
                response = "Invalid URL";
            } else {
                response = err;
            }
        });
    return response;
};

export default feedbackApi;
