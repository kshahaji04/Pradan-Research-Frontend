import { fetchLogo, get_logo_from_store } from "@/app/store/slices/home_page_slice/logo_slice";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const useLogo = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const logoFromStore = useSelector(get_logo_from_store);
  const [logoData, setSetLogoData] = useState<any>([]);

  useEffect(() => {
    dispatch(fetchLogo() as any);
  }, []);

  useEffect(() => {
    if (logoFromStore?.data?.length > 0) {
      setSetLogoData([...logoFromStore?.data]);
    }
  }, [logoFromStore]);

  return { logoData, loadingLogo: logoFromStore?.loading };
};

export default useLogo;
