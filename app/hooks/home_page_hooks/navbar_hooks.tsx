import GetNavbarApi from "@/app/services/api/home_page_api/navbar_api";
import { fetchLogo, get_logo_from_store } from "@/app/store/slices/home_page_slice/logo_slice";
import { fetchNavbar, get_navbar_from_store } from "@/app/store/slices/home_page_slice/navbar_slice";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const useNavbar = () => {
  const [navbarData, setSetNavbarData] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const fetchNavbar = async () => {
    setLoading(true);
    try {
      const response = await GetNavbarApi();
      // console.log(response)
      setSetNavbarData(response);
      setLoading(false);
      // return response;
    } catch (error) {
      setLoading(false);
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

  return { navbarData, loadingNavbar: loading };
};

export default useNavbar;
