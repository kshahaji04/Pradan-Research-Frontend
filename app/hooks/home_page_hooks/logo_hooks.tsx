import GetLogoApi from "@/app/services/api/home_page_api/logo_api";
import { fetchLogo, get_logo_from_store } from "@/app/store/slices/home_page_slice/logo_slice";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const useLogo = () => {
  const [logoData, setSetLogoData] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [logoError, setSetLogoError] = useState<boolean>(false);
  const fetchLogo = async () => {
    setLoading(true);
    try {
      const response = await GetLogoApi();
      // console.log(response)
      setSetLogoData(response);
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
        setSetLogoError(true);
      } else {
        setSetLogoError(false);
      }
      // return response;
    } catch (error) {
      setLoading(false);
      throw error;
    }
    return;
  }

  useEffect(() => {
    fetchLogo();
  }, []);

  // useEffect(() => {
  //   if (logoFromStore?.data?.length > 0) {
  //     setSetLogoData([...logoFromStore?.data]);
  //   }
  // }, [logoFromStore]);

  return { logoData, loadingLogo: loading, logoError };
};

export default useLogo;
