import { AboutDataInterface } from "@/app/interfaces/home_page_interface";
import { fetchAboutUsShortInfo, get_about_us_short_info_from_store } from "@/app/store/slices/home_page_slice/about_us_short_info_slice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const useAboutUsShortInfo = () => {
  const dispatch = useDispatch();
  const aboutUsShortInfoFromStore = useSelector(get_about_us_short_info_from_store);
  const [shortInfoData, setShortInfoData] = useState<any>([]);
  const [shortInfoError, setShortInfoError] = useState<boolean>(false);

  useEffect(() => {
    dispatch(fetchAboutUsShortInfo() as any);
  }, []);

  useEffect(() => {
    if (aboutUsShortInfoFromStore?.data && aboutUsShortInfoFromStore?.data?.length > 0) {
      setShortInfoData(aboutUsShortInfoFromStore?.data[0]);
    }
    if (aboutUsShortInfoFromStore?.error !== "") {
      setShortInfoError(true);
    }
  }, [aboutUsShortInfoFromStore]);

  return { shortInfoData: shortInfoData as AboutDataInterface, loadingShortInfo: aboutUsShortInfoFromStore?.loading as boolean, shortInfoError: shortInfoError as boolean };
};

export default useAboutUsShortInfo;
