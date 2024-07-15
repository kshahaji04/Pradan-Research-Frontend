import { fetchLogo, get_logo_from_store } from "@/app/store/slices/home_page_slice/logo_slice";
import { fetchFooter, get_footer_from_store } from "@/app/store/slices/home_page_slice/footer_slice";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import GetFooterApi from "@/app/services/api/home_page_api/footer_api";

const useFooter = () => {
  const [footerData, setSetFooterData] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [footerError, setSetFooterError] = useState<boolean>(false);
  const fetchFooter = async () => {

    setLoading(true);
    try {
      const response = await GetFooterApi();
      // console.log(response)
      response?.length > 0 && setSetFooterData(response[0]);
      setLoading(false);

      
      let error = '';
      if (response.code === "ECONNABORTED") {
        error = "Request timed out";
      } else if (response.code === "ERR_BAD_REQUEST") {
        error = "Bad Request";
      } else if (response.code === "ERR_INVALID_URL") {
        error = "Invalid URL";
      }
      if (error !== '') {
        setSetFooterError(true);
      } else {
        setSetFooterError(false);
      }
      // return response;
    } catch (error) {
      setLoading(false);
      throw error;
    }
    return;
  }

  useEffect(() => {
    fetchFooter();
  }, []);

  // useEffect(() => {
  //   if (footerFromStore?.data) {
  //     setSetFooterData(footerFromStore?.data[0]);
  //   }
  // }, [footerFromStore]);

  return { footerData, loadingFooter: loading, footerError };
};

export default useFooter;
