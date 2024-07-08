import { fetchLogo, get_logo_from_store } from "@/app/store/slices/home_page_slice/logo_slice";
import { fetchNavbar, get_navbar_from_store } from "@/app/store/slices/home_page_slice/navbar_slice";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const useNavbar = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const navbarFromStore = useSelector(get_navbar_from_store);
  const [navbarData, setSetNavbarData] = useState<any>([]);

  useEffect(() => {
    dispatch(fetchNavbar() as any);
  }, []);

  useEffect(() => {
    if (navbarFromStore?.data) {
      setSetNavbarData(navbarFromStore?.data);
    }
  }, [navbarFromStore]);

  return { navbarData, loadingNavbar: navbarFromStore?.loading };
};

export default useNavbar;
