import GetNavbarApi from "@/app/services/api/home_page_api/navbar_api";
import { fetchLogo, get_logo_from_store } from "@/app/store/slices/home_page_slice/logo_slice";
import { fetchNavbar, get_navbar_from_store } from "@/app/store/slices/home_page_slice/navbar_slice";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const useNavbar = () => {
  const [navbarData, setSetNavbarData] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [navbarError, setSetNavbarError] = useState<boolean>(false);

  const fetchNavbar = async () => {
    setLoading(true);
    try {
      const response = await GetNavbarApi();
      // console.log(response, 'nav 1')
      setSetNavbarData(response);
      setLoading(false);

      let error = '';
      if (response.name === "ECONNABORTED") {
        error = "Request timed out";
      } else if (response.code === "ERR_BAD_REQUEST") {
        error = "Bad Request";
      } else if (response.code === "ERR_INVALID_URL") {
        error = "Invalid URL";
      } else if (response.name === "AxiosError") {
        error = "error";
      }
      if(error !== ''){
        setSetNavbarError(true);
      } else {
        setSetNavbarError(false);
      }
      // return response;
    } catch (error) {
      setLoading(false);
      setSetNavbarError(true)
      throw error;
    }
    return;
  }

  useEffect(() => {
    fetchNavbar();
  }, []);

  // useEffect(() => {
  //   if (navbarFromStore?.data) {
  //     setNavbarData(navbarFromStore?.data);
  //   }
  // }, [navbarFromStore]);

  return { navbarData, loadingNavbar: loading, navbarError };
};

export default useNavbar;
