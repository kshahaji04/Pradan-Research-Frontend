import { CONSTANTS } from "@/app/services/config/app-config";
import { API_CONFIG } from '@/app/services/config/api-config'

import axios from "axios";

const SignUpApi = async (request: any) => {
  let response: any;

  const encodedPassword = encodeURIComponent(request.password);


  await axios
    .post(
      `${CONSTANTS.API_BASE_URL}/api/method/pradan.pradan.customizations.authentication.api.create_user.create_user_api?email=${request.email}&password=${encodedPassword}&first_name=${request.first_name}&last_name=${request.last_name}&contact_no=${request.contact_no}`,
      undefined,
      { ...API_CONFIG, timeout: 5000 }
    )
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

const RegistrationApi = (request: any) => SignUpApi(request);

export default RegistrationApi;
