import { fetchAboutUsShortInfo, get_about_us_short_info_from_store } from "@/app/store/slices/home_page_slice/about_us_short_info_slice";
import { fetchBanner, get_banner_from_store } from "@/app/store/slices/home_page_slice/banner_slice";
import { fetchLogo, get_logo_from_store } from "@/app/store/slices/home_page_slice/logo_slice";
import { fetchNavbar, get_navbar_from_store } from "@/app/store/slices/home_page_slice/navbar_slice";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const useAboutUsShortInfo = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const aboutUsShortInfoFromStore = useSelector(get_about_us_short_info_from_store);
  const [shortInfoData, setShortInfoData] = useState<any>([]);

  useEffect(() => {
    dispatch(fetchAboutUsShortInfo() as any);
  }, []);

  useEffect(() => {
    if (aboutUsShortInfoFromStore?.data) {
      setShortInfoData(aboutUsShortInfoFromStore?.data);
    }
  }, [aboutUsShortInfoFromStore]);

  return { shortInfoData, loadingShortInfo: aboutUsShortInfoFromStore?.loading };
};

export default useAboutUsShortInfo;
