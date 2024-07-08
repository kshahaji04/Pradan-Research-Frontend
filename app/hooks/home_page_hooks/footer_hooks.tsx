import { fetchLogo, get_logo_from_store } from "@/app/store/slices/home_page_slice/logo_slice";
import { fetchFooter, get_footer_from_store } from "@/app/store/slices/home_page_slice/footer_slice";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const useFooter = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const footerFromStore = useSelector(get_footer_from_store);
  const [footerData, setSetFooterData] = useState<any>([]);

  useEffect(() => {
    dispatch(fetchFooter() as any);
  }, []);

  useEffect(() => {
    if (footerFromStore?.data) {
      setSetFooterData(footerFromStore?.data[0]);
    }
  }, [footerFromStore]);

  return { footerData, loadingFooter: footerFromStore?.loading };
};

export default useFooter;
