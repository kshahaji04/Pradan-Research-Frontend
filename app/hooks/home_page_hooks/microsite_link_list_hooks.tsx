import { fetchAboutUsShortInfo, get_about_us_short_info_from_store } from "@/app/store/slices/home_page_slice/about_us_short_info_slice";
import { fetchBanner, get_banner_from_store } from "@/app/store/slices/home_page_slice/banner_slice";
import { fetchCategoryList } from "@/app/store/slices/home_page_slice/category_list_slice";
import { fetchLogo, get_logo_from_store } from "@/app/store/slices/home_page_slice/logo_slice";
import { fetchMicroSite, get_micro_site_link_list_from_store } from "@/app/store/slices/home_page_slice/micro_site_link_slice";
import { fetchNavbar, get_navbar_from_store } from "@/app/store/slices/home_page_slice/navbar_slice";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const useMicrosite = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const microSiteFromStore = useSelector(get_micro_site_link_list_from_store);
  const [microSiteData, setMicroSiteData] = useState<any>([]);

  useEffect(() => {
    dispatch(fetchMicroSite() as any);
  }, []);

  useEffect(() => {
    if (microSiteFromStore?.data) {
      setMicroSiteData(microSiteFromStore?.data[0]);
    }
  }, [microSiteFromStore]);

  return { microSiteData, loadingMicroSite: microSiteFromStore?.loading };
};

export default useMicrosite;
