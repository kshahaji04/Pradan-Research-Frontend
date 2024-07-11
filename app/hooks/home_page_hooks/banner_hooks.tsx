import { fetchBanner, get_banner_from_store } from "@/app/store/slices/home_page_slice/banner_slice";
import { fetchLogo, get_logo_from_store } from "@/app/store/slices/home_page_slice/logo_slice";
import { fetchNavbar, get_navbar_from_store } from "@/app/store/slices/home_page_slice/navbar_slice";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const useBanner = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const bannerFromStore = useSelector(get_banner_from_store);
  const [bannerData, setBannerData] = useState<any>([]);

  useEffect(() => {
    dispatch(fetchBanner() as any);
  }, []);

  useEffect(() => {
    if (bannerFromStore?.data) {
      setBannerData(bannerFromStore?.data);
    }
  }, [bannerFromStore]);

  return { bannerData, loadingBanner: bannerFromStore?.loading};
};

export default useBanner;
